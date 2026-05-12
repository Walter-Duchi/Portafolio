import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initTypeEffect();
  }

  private initTypeEffect(): void {
    const words: string[] = [
      'Desarrollador Web Full Stack',
      'Backend Specialist',
      'Frontend Architect',
      'Soluciones Digitales Innovadoras'
    ];
    const typedSpan = document.querySelector('.typed-text') as HTMLElement;
    const cursorSpan = document.querySelector('.cursor') as HTMLElement;
    if (!typedSpan || !cursorSpan) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typedSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typedSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 120;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  }
}