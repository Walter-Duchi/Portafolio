import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  category: 'fullstack' | 'backend' | 'mobile';
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  explanation?: string;
}

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.html',
  styleUrl: './proyects.css',
})
export class Proyects {
  activeFilter: string = 'todos';

  projects: Project[] = [
    {
      id: 1,
      title: 'Electro Home',
      category: 'fullstack',
      description: 'Sistema completo de e-commerce con gestión de productos, pagos, facturación electrónica, inventario y reclamos. Backend en .NET y frontend en React con TypeScript.',
      image: 'images/Screenshot (18).png',
      tags: ['.NET', 'React', 'TypeScript', 'SQL Server', 'API REST'],
      demoLink: 'https://electro-home-lake.vercel.app/',
      codeLink: 'https://github.com/Walter-Duchi/ElectroHome.git',
      explanation: 'Este proyecto integra pasarela de pagos, autenticación JWT, panel de administración y facturación electrónica. Desarrollado con arquitectura limpia y buenas prácticas.'
    },
    {
      id: 2,
      title: 'Dux Messaging',
      category: 'fullstack',
      description: 'Aplicación de mensajería en tiempo real con chats privados y grupales utilizando SignalR, autenticación y gestión de usuarios.',
      image: 'images/Screenshot (19).png',
      tags: ['.NET', 'React', 'SignalR', 'WebSockets', 'Auth'],
      demoLink: 'https://dux-nine.vercel.app/login',
      codeLink: 'https://github.com/Walter-Duchi/Dux-Messaging',
      explanation: 'Implementación completa de SignalR para mensajería instantánea, notificaciones en tiempo real y almacenamiento de conversaciones.'
    },
    {
      id: 3,
      title: 'Lista de Tareas',
      category: 'backend',
      description: 'Aplicación de escritorio en Java para gestión de tareas con arquitectura modular, manejo de estados y UI personalizada.',
      image: 'images/Screenshot (23).png',
      tags: ['Java', 'POO', 'Swing', 'Arquitectura'],
      demoLink: 'https://github.com/Walter-Duchi/Lista-de-Tareas/releases/download/v1.0.0/ListaTareas.jar',
      codeLink: 'https://github.com/Walter-Duchi/Lista-de-Tareas',
      explanation: 'Aplicación con patrones de diseño, persistencia en archivos y manejo de excepciones.'
    },
    {
      id: 4,
      title: 'Recaudación Impuestos Vehículos',
      category: 'backend',
      description: 'Sistema en C# para gestión y recaudación de impuestos vehiculares con conexión a base de datos y lógica de validación.',
      image: 'images/Screenshot (25).png',
      tags: ['C#', '.NET', 'SQL', 'Backend'],
      demoLink: 'https://github.com/Walter-Duchi/RecaudacionImpuestosVehiculos/releases/download/v1.0.0/RecaudacionImpuestosVehiculos.exe',
      codeLink: 'https://github.com/Walter-Duchi/RecaudacionImpuestosVehiculos',
      explanation: 'Incluye cálculos automáticos, generación de reportes y conexión segura a SQL Server.'
    },
    {
      id: 5,
      title: 'Vocales App',
      category: 'mobile',
      description: 'Aplicación Android educativa para aprendizaje de vocales con interacción visual, ejercicios y base de datos local.',
      image: 'images/Screenshot (27).png',
      tags: ['Android', 'Java', 'SQLite', 'UI'],
      demoLink: 'https://github.com/Walter-Duchi/Preescolar-Digital/releases/download/v1.0.0/PreescolarDigital.apk',
      codeLink: 'https://github.com/Walter-Duchi/Preescolar-Digital',
      explanation: 'Diseño adaptado para niños, actividades interactivas y almacenamiento de progreso.'
    },
    {
      id: 6,
      title: 'Move Photos & Videos',
      category: 'backend',
      description: 'Script en Python para organizar automáticamente archivos multimedia según fechas y tipos, optimizando almacenamiento.',
      image: 'images/Screenshot (36).png',
      tags: ['Python', 'Automatización', 'Scripts'],
      demoLink: 'https://github.com/Walter-Duchi/Move-Photos-Videos/releases/download/v1.0.0/MovePhotosVideos.py',
      codeLink: 'https://github.com/Walter-Duchi/Move-Photos-Videos',
      explanation: 'Script con manejo de metadatos, detección de fechas y organización por carpetas.'
    },
    {
      id: 7,
      title: 'Iterador Nombre Imágenes',
      category: 'backend',
      description: 'Script en Python para renombrar imágenes de forma masiva con patrones personalizados y fechas.',
      image: 'images/Screenshot (39).png',
      tags: ['Python', 'Automatización', 'Batch'],
      demoLink: 'https://github.com/Walter-Duchi/Iterador-Nombre-Imagenes/releases/download/v1.0.0/iteradorNombreImagenes.py',
      codeLink: 'https://github.com/Walter-Duchi/Iterador-Nombre-Imagenes',
      explanation: 'Renombrado batch con expresiones regulares y soporte para múltiples formatos.'
    }
  ];

  filteredProjects = [...this.projects];

  filterProjects(category: string) {
    this.activeFilter = category;
    this.filteredProjects = category === 'todos' ? [...this.projects] : this.projects.filter(p => p.category === category);
  }

  getCategoryDisplayName(category: string): string {
    switch (category) {
      case 'todos': return 'Todos';
      case 'fullstack': return 'Full Stack';
      case 'backend': return 'Back End';
      case 'mobile': return 'Mobile';
      default: return category;
    }
  }

  openExplanation(project: Project) {
    const modal = document.getElementById('projectModal');
    const titleEl = document.getElementById('modalTitle');
    const descEl = document.getElementById('modalDesc');
    if (modal && titleEl && descEl) {
      titleEl.textContent = project.title;
      descEl.textContent = project.explanation || 'Próximamente más detalles sobre este proyecto.';
      modal.classList.add('active');
    }
  }
}