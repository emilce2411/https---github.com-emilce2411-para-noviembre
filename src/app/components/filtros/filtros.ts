import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtros.html',
  styleUrl: './filtros.css'
})
export class FiltrosComponent {
  // Recibimos las listas desde el componente padre
  @Input() oficios: any[] = [];
  @Input() ubicaciones: any[] = [];

  // Variables locales para los selectores
  filtroOficio: string = '';
  filtroUbicacion: string = '';

  // Eventos para avisar al componente principal cuando cambian los filtros
  @Output() cambioFiltro = new EventEmitter<{ oficio: string, ubicacion: string }>();

  onFiltroChange(): void {
    this.cambioFiltro.emit({
      oficio: this.filtroOficio,
      ubicacion: this.filtroUbicacion
    });
  }
}