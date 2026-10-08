import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-perfil-profesional',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './perfil-profesional.html',
  styleUrl: './perfil-profesional.css'
})
export class PerfilProfesionalComponent implements OnInit {
  profesional: any = null;
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Captura el parámetro 'id' de la URL
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.apiService.getProfesionalById(id).subscribe({
        next: (data: any) => {
          this.profesional = data;
          this.cargando = false;
        },
        error: (err: any) => {
          console.error('Error al cargar el perfil:', err);
          this.cargando = false;
        }
      });
    }
  }
}