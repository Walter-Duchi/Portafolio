import { Component, inject, HostListener, ElementRef, Renderer2, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy, AfterViewInit {
  private themeService = inject(ThemeService);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  currentTheme = this.themeService.getThemeSignal();
  isMenuOpen = false;
  private scrollTicking = false;
  private scrollHandler: (() => void) | null = null;

  ngOnInit(): void {
    this.scrollHandler = () => this.onScrollUpdate();
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngAfterViewInit(): void {
    this.handleScroll();
    this.updateActiveLink();
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  private onScrollUpdate(): void {
    if (!this.scrollTicking) {
      requestAnimationFrame(() => {
        this.handleScroll();
        this.updateActiveLink();
        this.scrollTicking = false;
      });
      this.scrollTicking = true;
    }
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

  private updateActiveLink(): void {
    const sections = document.querySelectorAll('section[id]');
    const navLinks: NodeListOf<HTMLAnchorElement> = this.el.nativeElement.querySelectorAll('.nav-links a');
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    let current = '';
    const offsetTopMargin = 100;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionHeight = rect.height;
      if (scrollY + offsetTopMargin >= sectionTop && scrollY + offsetTopMargin < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || '';
      }
    });

    if (!current && sections.length > 0) {
      const lastSection = sections[sections.length - 1];
      const lastRect = lastSection.getBoundingClientRect();
      if (scrollY + viewportHeight >= document.body.scrollHeight - 10) {
        current = lastSection.getAttribute('id') || '';
      }
    }

    if (!current && sections.length > 0 && scrollY < 100) {
      current = sections[0].getAttribute('id') || '';
    }

    navLinks.forEach((link: HTMLAnchorElement) => {
      link.classList.remove('active-link');
      const href = link.getAttribute('href');
      if (href && href === `#${current}`) {
        link.classList.add('active-link');
      }
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
