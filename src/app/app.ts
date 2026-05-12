import { Component, OnInit } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Proyects } from './components/proyects/proyects';
import { Technologies } from './components/technologies/technologies';
import { Skills } from './components/skills/skills';
import { Certificates } from './components/certificates/certificates';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, Proyects, Technologies, Skills, Certificates, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    // Scroll to top button
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollBtn?.classList.add('visible');
      } else {
        scrollBtn?.classList.remove('visible');
      }
    });
    scrollBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal close logic
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    closeBtn?.addEventListener('click', () => {
      modal?.classList.remove('active');
    });
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}