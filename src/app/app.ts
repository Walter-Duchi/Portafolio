import { Component, OnInit } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Proyects } from './components/proyects/proyects';
import { Technologies } from './components/technologies/technologies';
import { Skills } from './components/skills/skills';
import { Certificates } from './components/certificates/certificates';
import { Contact } from './components/contact/contact';
import { Languages } from './components/languages/languages';

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, Proyects, Technologies, Skills, Languages, Certificates, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 50px 0px' });
    reveals.forEach(el => observer.observe(el));

    const scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollBtn?.classList.add('visible');
      } else {
        scrollBtn?.classList.remove('visible');
      }
    }, { passive: true });
    scrollBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const visorModal = document.getElementById('visorModal');
    const closeBtn = document.getElementById('modalCerrarBtn');
    closeBtn?.addEventListener('click', () => {
      visorModal?.classList.remove('active');
      const iframe = document.getElementById('visorIframe') as HTMLIFrameElement;
      if (iframe) iframe.src = '';
    });
    visorModal?.addEventListener('click', (e) => {
      if (e.target === visorModal) {
        visorModal.classList.remove('active');
        const iframe = document.getElementById('visorIframe') as HTMLIFrameElement;
        if (iframe) iframe.src = '';
      }
    });
  }
}
