import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <--- Importar

@Component({
  selector: 'app-tarjeta-profesional',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- Agregar aquí
  templateUrl: './tarjeta-profesional.html',
  styleUrl: './tarjeta-profesional.css'
})
export class TarjetaProfesionalComponent {
  @Input() profesional: any;

  normalizarUrlImagen(url: string): string {
    return url.startsWith('http') ? url : `http://127.0.0.1:8000${url}`;
  }
}