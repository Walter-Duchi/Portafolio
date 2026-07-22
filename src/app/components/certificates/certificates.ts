import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {

  abrirCertificado(pdfPath: string) {
    const modal = document.getElementById('visorModal');
    const iframe = document.getElementById('visorIframe') as HTMLIFrameElement;
    const titulo = document.getElementById('modalTitulo');
    const descargarBtn = document.getElementById('modalDescargarBtn') as HTMLAnchorElement;
    if (modal && iframe && titulo && descargarBtn) {
      titulo.textContent = 'Certificado';
      iframe.src = pdfPath;
      descargarBtn.style.display = 'inline-flex';
      descargarBtn.href = pdfPath;
      descargarBtn.setAttribute('download', '');
      modal.classList.add('active');
    }
  }

}
