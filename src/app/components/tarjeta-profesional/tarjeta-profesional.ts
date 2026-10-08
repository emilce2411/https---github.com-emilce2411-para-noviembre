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
}