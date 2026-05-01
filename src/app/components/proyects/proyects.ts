import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
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
      description:
        'Sistema completo de e-commerce con gestión de productos, pagos, facturación electrónica, inventario y reclamos. Backend en .NET y frontend en React con TypeScript.',
      image: 'images/Screenshot (18).png',
      tags: ['.NET', 'React', 'TypeScript', 'SQL Server', 'API REST'],
      demoLink: 'https://electro-home-lake.vercel.app/',
      codeLink: 'https://github.com/Walter-Duchi/ElectroHome.git',
    },
    {
      id: 2,
      title: 'Dux Messaging',
      category: 'fullstack',
      description:
        'Aplicación de mensajería en tiempo real con chats privados y grupales utilizando SignalR, autenticación y gestión de usuarios.',
      image: 'images/Screenshot (19).png',
      tags: ['.NET', 'React', 'SignalR', 'WebSockets', 'Auth'],
      demoLink: 'https://dux-nine.vercel.app/login',
      codeLink: 'https://github.com/Walter-Duchi/Dux-Messaging',
    },
    {
      id: 3,
      title: 'Banco Aneupi',
      category: 'frontend',
      description:
        'Frontend moderno desarrollado con Next.js para sistema financiero con múltiples módulos: créditos, accionistas, pagos y gestión de usuarios.',
      image: 'images/Screenshot (20).png',
      tags: ['Next.js', 'React', 'TypeScript', 'UI/UX'],
      demoLink: 'https://institucion-financiera-aneupi.vercel.app/',
      codeLink: 'https://github.com/Walter-Duchi/frontend',
    },
    {
      id: 4,
      title: 'Lista de Tareas',
      category: 'backend',
      description:
        'Aplicación de escritorio en Java para gestión de tareas con arquitectura modular, manejo de estados y UI personalizada.',
      image: 'images/Screenshot (23).png',
      tags: ['Java', 'POO', 'Swing', 'Arquitectura'],
      demoLink: 'https://github.com/Walter-Duchi/Lista-de-Tareas/releases/download/v1.0.0/ListaTareas.jar',
      codeLink: 'https://github.com/Walter-Duchi/Lista-de-Tareas',
    },
    {
      id: 5,
      title: 'Recaudación Impuestos Vehículos',
      category: 'backend',
      description:
        'Sistema en C# para gestión y recaudación de impuestos vehiculares con conexión a base de datos y lógica de validación.',
      image: 'images/Screenshot (25).png',
      tags: ['C#', '.NET', 'SQL', 'Backend'],
      demoLink: 'https://github.com/Walter-Duchi/RecaudacionImpuestosVehiculos/releases/download/v1.0.0/RecaudacionImpuestosVehiculos.exe',
      codeLink: 'https://github.com/Walter-Duchi/RecaudacionImpuestosVehiculos',
    },
    {
      id: 6,
      title: 'Vocales App',
      category: 'mobile',
      description:
        'Aplicación Android educativa para aprendizaje de vocales con interacción visual, ejercicios y base de datos local.',
      image: 'images/Screenshot (27).png',
      tags: ['Android', 'Java', 'SQLite', 'UI'],
      demoLink: 'https://github.com/Walter-Duchi/Preescolar-Digital/releases/download/v1.0.0/PreescolarDigital.apk',
      codeLink: 'https://github.com/Walter-Duchi/Preescolar-Digital',
    },
    {
      id: 7,
      title: 'Move Photos & Videos',
      category: 'backend',
      description:
        'Script en Python para organizar automáticamente archivos multimedia según fechas y tipos, optimizando almacenamiento.',
      image: 'images/Screenshot (36).png',
      tags: ['Python', 'Automatización', 'Scripts'],
      demoLink: 'https://github.com/Walter-Duchi/Move-Photos-Videos/releases/download/v1.0.0/MovePhotosVideos.py',
      codeLink: 'https://github.com/Walter-Duchi/Move-Photos-Videos',
    },
    {
      id: 8,
      title: 'Iterador Nombre Imágenes',
      category: 'backend',
      description:
        'Script en Python para renombrar imágenes de forma masiva con patrones personalizados y fechas.',
      image: 'images/Screenshot (39).png',
      tags: ['Python', 'Automatización', 'Batch'],
      demoLink: 'https://github.com/Walter-Duchi/Iterador-Nombre-Imagenes/releases/download/v1.0.0/iteradorNombreImagenes.py',
      codeLink: 'https://github.com/Walter-Duchi/Iterador-Nombre-Imagenes',
    }
  ];

  filteredProjects = [...this.projects];

  filterProjects(category: string) {
    this.activeFilter = category;
    this.filteredProjects =
      category === 'todos'
        ? [...this.projects]
        : this.projects.filter((p) => p.category === category);
  }

  getCategoryDisplayName(category: string): string {
    switch (category) {
      case 'todos':
        return 'Todos';
      case 'fullstack':
        return 'Full Stack';
      case 'frontend':
        return 'Front End';
      case 'backend':
        return 'Back End';
      case 'mobile':
        return 'Mobile';
      default:
        return category;
    }
  }

  openExplanation(project: Project) {
    alert(`Explicación del proyecto: ${project.title}`);
  }
}