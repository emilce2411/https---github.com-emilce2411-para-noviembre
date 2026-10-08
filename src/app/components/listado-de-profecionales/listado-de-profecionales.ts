import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api'; // Ajusta la ruta de tu servicio
import { TarjetaProfesionalComponent } from '../tarjeta-profesional/tarjeta-profesional'; // O como se llame tu tarjeta individual

@Component({
  selector: 'app-listado-de-profesionales',
  standalone: true,
  imports: [CommonModule, TarjetaProfesionalComponent],
  templateUrl: './listado-de-profecionales.html',
  styleUrls: ['./listado-de-profecionales.css']
})
export class ListadoDeProfesionalesComponent implements OnInit {
  profesionales: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Usamos el método que ya tienes configurado en tu ApiService
    this.apiService.getProfesionales().subscribe({
      next: (data) => {
        this.profesionales = data;
      },
      error: (err) => {
        console.error('Error al cargar los profesionales:', err);
      }
    });
  }
}