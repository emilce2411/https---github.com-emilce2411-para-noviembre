import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  indiceFotoTrabajo = 0;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Captura el parámetro 'id' de la URL
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.apiService.getProfesionalById(id).subscribe({
        next: (data: any) => {
          this.profesional = data;
          this.cargando = false;
          this.changeDetector.markForCheck();
        },
        error: (err: any) => {
          console.error('Error al cargar el perfil:', err);
          this.cargando = false;
          this.changeDetector.markForCheck();
        }
      });
    } else {
      this.cargando = false;
      this.changeDetector.markForCheck();
    }
  }

  cambiarFotoTrabajo(direccion: number): void {
    const cantidad = this.profesional?.fotos_trabajo?.length ?? 0;
    if (cantidad < 2) return;

    this.indiceFotoTrabajo = (this.indiceFotoTrabajo + direccion + cantidad) % cantidad;
  }

  normalizarUrlImagen(url: string): string {
    return url.startsWith('http') ? url : `http://127.0.0.1:8000${url}`;
  }
}