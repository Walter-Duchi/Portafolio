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
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['.NET', 'React', 'TypeScript', 'SQL Server', 'API REST'],
    },
    {
      id: 2,
      title: 'Dux Messaging',
      category: 'fullstack',
      description:
        'Aplicación de mensajería en tiempo real con chats privados y grupales utilizando SignalR, autenticación y gestión de usuarios.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['.NET', 'React', 'SignalR', 'WebSockets', 'Auth'],
    },
    {
      id: 3,
      title: 'Banco Aneupi',
      category: 'frontend',
      description:
        'Frontend moderno desarrollado con Next.js para sistema financiero con múltiples módulos: créditos, accionistas, pagos y gestión de usuarios.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['Next.js', 'React', 'TypeScript', 'UI/UX'],
    },
    {
      id: 4,
      title: 'Lista de Tareas',
      category: 'backend',
      description:
        'Aplicación de escritorio en Java para gestión de tareas con arquitectura modular, manejo de estados y UI personalizada.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['Java', 'POO', 'Swing', 'Arquitectura'],
    },
    {
      id: 5,
      title: 'Recaudación Impuestos Vehículos',
      category: 'backend',
      description:
        'Sistema en C# para gestión y recaudación de impuestos vehiculares con conexión a base de datos y lógica de validación.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['C#', '.NET', 'SQL', 'Backend'],
    },
    {
      id: 6,
      title: 'Vocales App',
      category: 'mobile',
      description:
        'Aplicación Android educativa para aprendizaje de vocales con interacción visual, ejercicios y base de datos local.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['Android', 'Java', 'SQLite', 'UI'],
    },
    {
      id: 7,
      title: 'Move Photos & Videos',
      category: 'backend',
      description:
        'Script en Python para organizar automáticamente archivos multimedia según fechas y tipos, optimizando almacenamiento.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['Python', 'Automatización', 'Scripts'],
    },
    {
      id: 8,
      title: 'Iterador Nombre Imágenes',
      category: 'backend',
      description:
        'Script en Python para renombrar imágenes de forma masiva con patrones personalizados y fechas.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['Python', 'Automatización', 'Batch'],
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