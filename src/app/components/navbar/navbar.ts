import { Component, inject, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  private themeService = inject(ThemeService);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  currentTheme = this.themeService.getThemeSignal();
  isMenuOpen = false;

  ngOnInit(): void {
    this.handleScroll();
    window.addEventListener('scroll', () => this.handleScroll());
    this.setActiveLinkOnScroll();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMenu(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  getThemeIcon(): string {
    return this.currentTheme() === 'dark' ? '☀️' : '🌙';
  }

  private handleScroll(): void {
    const navbar = this.el.nativeElement.querySelector('.navbar');
    if (window.scrollY > 50) {
      this.renderer.addClass(navbar, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
    }
  }

  private setActiveLinkOnScroll(): void {
    const sections = document.querySelectorAll('section[id]');
    const navLinks: NodeListOf<HTMLAnchorElement> = this.el.nativeElement.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 120;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });
      navLinks.forEach((link: HTMLAnchorElement) => {
        link.classList.remove('active-link');
        const href = link.getAttribute('href');
        if (href && href === `#${current}`) {
          link.classList.add('active-link');
        }
      });
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (this.isMenuOpen && !target.closest('.menu-toggle') && !target.closest('.nav-links')) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}