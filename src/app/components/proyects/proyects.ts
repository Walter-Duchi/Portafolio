import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  category: 'web' | 'escritorio' | 'movil';
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  explanation?: string;
  codeLinkFrontend?: string;
  codeLinkBackend?: string;
  videoId?: string;
  demoLabel?: string;
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
      category: 'web',
      description: 'Plataforma empresarial integral para tienda de electrodomésticos, que cubre desde la publicación de productos en tienda virtual hasta la resolución de reclamos posventa. Incluye control de inventario por número de serie, emisión de comprobantes electrónicos autorizados por el SRI, integración con pasarela de pago Payphone y panel de administración con métricas. Desarrollado con Clean Architecture en .NET 10 y React + TypeScript.',
      image: 'images/Screenshot (18).png',
      tags: ['.NET', 'React', 'TypeScript', 'SQL Server', 'API REST'],
      demoLink: 'https://electro-home-lake.vercel.app/',
      codeLink: undefined,
      codeLinkFrontend: 'https://github.com/Walter-Duchi/ElectroHome-Frontend',
      codeLinkBackend: 'https://github.com/Walter-Duchi/ElectroHome-Backend',
      videoId: 'N3TzUA2BkDY',
      demoLabel: 'Visitar sitio',
      explanation: 'Este proyecto integra pasarela de pagos, autenticación JWT, panel de administración y facturación electrónica. Desarrollado con arquitectura limpia y buenas prácticas.'
    },
    {
      id: 2,
      title: 'Dux Messaging',
      category: 'web',
      description: 'Aplicación de mensajería en tiempo real que permite chats privados y grupales, con entrega instantánea mediante SignalR y WebSockets. Incluye autenticación JWT, historial persistido en base de datos y diseño responsivo. Construida con React en el frontend y ASP.NET Core en el backend.',
      image: 'images/Screenshot (19).png',
      tags: ['.NET', 'React', 'SignalR', 'WebSockets', 'Auth'],
      demoLink: 'https://dux-nine.vercel.app/login',
      codeLink: undefined,
      codeLinkFrontend: 'https://github.com/Walter-Duchi/Dux-Frontend',
      codeLinkBackend: 'https://github.com/Walter-Duchi/Dux-Backend',
      videoId: 'gQwQWplRWQY',
      demoLabel: 'Visitar sitio',
      explanation: 'Implementación completa de SignalR para mensajería instantánea, notificaciones en tiempo real y almacenamiento de conversaciones.'
    },
    {
      id: 3,
      title: 'Lista de Tareas',
      category: 'escritorio',
      description: 'Aplicación de escritorio para gestión de tareas personales, desarrollada en Java con interfaz gráfica Swing. Implementa patrones de diseño (Singleton, MVC), renderizador personalizado de listas, y pruebas unitarias con JUnit. Permite agregar, completar, eliminar y ver detalles de tareas con persistencia en memoria.',
      image: 'images/Screenshot (23).png',
      tags: ['Java', 'POO', 'Swing', 'Arquitectura'],
      demoLink: 'https://github.com/Walter-Duchi/Lista-de-Tareas/releases/download/v1.0.0/ListaTareas.jar',
      codeLink: 'https://github.com/Walter-Duchi/Lista-de-Tareas',
      codeLinkFrontend: undefined,
      codeLinkBackend: undefined,
      videoId: 'YYPTllP_CvY',
      demoLabel: 'Descargar JAR',
      explanation: 'Aplicación con patrones de diseño, persistencia en archivos y manejo de excepciones.'
    },
    {
      id: 4,
      title: 'Recaudación Impuestos Vehículos',
      category: 'escritorio',
      description: 'Sistema de escritorio en C# para la gestión y recaudación de impuestos vehiculares. Permite registrar vehículos y propietarios, controlar deudas y pagos, generar comprobantes en PDF con iText7, enviar notificaciones por correo electrónico y producir informes de gestión. Conecta a SQL Server y sigue el patrón MVC.',
      image: 'images/Screenshot (25).png',
      tags: ['C#', '.NET', 'SQL', 'Backend'],
      demoLink: 'https://github.com/Walter-Duchi/Recaudacion-Impuestos-Vehiculares/releases/download/v1.0.0/RecaudacionImpuestosVehiculares.exe',
      codeLink: 'https://github.com/Walter-Duchi/Recaudacion-Impuestos-Vehiculares',
      codeLinkFrontend: undefined,
      codeLinkBackend: undefined,
      videoId: 'PKmrrVr6wlw',
      demoLabel: 'Descargar ejecutable',
      explanation: 'Incluye cálculos automáticos, generación de reportes y conexión segura a SQL Server.'
    },
    {
      id: 5,
      title: 'Vocales App',
      category: 'movil',
      description: 'Aplicación Android educativa para el aprendizaje de vocales en niños de 3 a 6 años. Ofrece actividades interactivas con audio, imágenes y retroalimentación visual, incluyendo trazado de vocales con el dedo. Incluye sistema de registro y autenticación con SQLite, y soporte para modo oscuro y diseño responsivo.',
      image: 'images/Screenshot (27).png',
      tags: ['Android', 'Java', 'SQLite', 'UI'],
      demoLink: 'https://github.com/Walter-Duchi/Preescolar-Digital/releases/download/v1.0.0/PreescolarDigital.apk',
      codeLink: 'https://github.com/Walter-Duchi/Preescolar-Digital',
      codeLinkFrontend: undefined,
      codeLinkBackend: undefined,
      videoId: 'oaCFtG-vEeg',
      demoLabel: 'Descargar APK',
      explanation: 'Diseño adaptado para niños, actividades interactivas y almacenamiento de progreso.'
    },
    {
      id: 6,
      title: 'Move Photos & Videos',
      category: 'escritorio',
      description: 'Herramienta de escritorio en Python para extraer, copiar o mover imágenes y videos desde una carpeta de origen (incluyendo subcarpetas) hacia una carpeta de destino. Soporta cancelación en tiempo real, renombrado automático para evitar colisiones, barra de progreso en vivo y opción de subcarpeta de destino personalizada. Interfaz con Tkinter.',
      image: 'images/Screenshot (36).png',
      tags: ['Python', 'Automatización', 'Scripts'],
      demoLink: 'https://github.com/Walter-Duchi/Move-Photos-Videos/releases/download/v1.0.0/MovePhotosVideos.py',
      codeLink: 'https://github.com/Walter-Duchi/Move-Photos-Videos',
      codeLinkFrontend: undefined,
      codeLinkBackend: undefined,
      videoId: 'aoW7GGX_JT0',
      demoLabel: 'Descargar script',
      explanation: 'Script con manejo de metadatos, detección de fechas y organización por carpetas.'
    },
    {
      id: 7,
      title: 'Iterador Nombre Imágenes',
      category: 'escritorio',
      description: 'Herramienta de escritorio en Python para renombrar lotes de imágenes de forma automática y ordenada. Escanea una carpeta, ordena las imágenes por fecha de creación y las renombra secuencialmente como imagen_1.jpg, imagen_2.jpg, etc., convirtiendo formatos (PNG, WEBP) a JPG. Interfaz gráfica con Tkinter y previsualización.',
      image: 'images/Screenshot (39).png',
      tags: ['Python', 'Automatización', 'Batch'],
      demoLink: 'https://github.com/Walter-Duchi/Iterador-Nombre-Imagenes/releases/download/v1.0.0/iteradorNombreImagenes.py',
      codeLink: 'https://github.com/Walter-Duchi/Iterador-Nombre-Imagenes',
      codeLinkFrontend: undefined,
      codeLinkBackend: undefined,
      videoId: 'flfneFJYcAw',
      demoLabel: 'Descargar script',
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
      case 'web': return 'Web';
      case 'escritorio': return 'Escritorio';
      case 'movil': return 'Móvil';
      default: return category;
    }
  }

  openExplanation(project: Project) {
    const modal = document.getElementById('visorModal');
    const iframe = document.getElementById('visorIframe') as HTMLIFrameElement;
    const titulo = document.getElementById('modalTitulo');
    const descargarBtn = document.getElementById('modalDescargarBtn');
    if (modal && iframe && titulo && descargarBtn) {
      titulo.textContent = project.title;
      iframe.src = `https://www.youtube.com/embed/${project.videoId}?autoplay=1`;
      descargarBtn.style.display = 'none';
      modal.classList.add('active');
    }
  }
}