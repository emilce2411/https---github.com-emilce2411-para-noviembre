import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-panel-profesional',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panel-profesional.html',
  styleUrls: ['./panel-profesional.css']
})
export class PanelProfesionalComponent implements OnInit {
  profesional: any = {};
  oficios: any[] = [];
  ubicaciones: any[] = [];
  archivoFoto: File | null = null;
  fotosTrabajoSeleccionadas: File[] = [];
  cargando: boolean = true;
  errorPerfil = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined' && !localStorage.getItem('token')) {
      this.router.navigate(['/login']);
      return;
    }

    this.apiService.getOficios().subscribe(data => {
      this.oficios = data;
      this.changeDetector.markForCheck();
    });
    this.apiService.getUbicaciones().subscribe(data => {
      this.ubicaciones = data;
      this.changeDetector.markForCheck();
    });
    setTimeout(() => this.cargarPerfil(), 0);
  }

  cargarPerfil(): void {
    this.cargando = true;
    this.errorPerfil = '';

    this.apiService.getPerfilAutenticado().pipe(timeout(10000)).subscribe({
      next: (data) => {
        this.profesional = data;
        this.cargando = false;
        this.changeDetector.markForCheck();
      },
      error: (err) => {
        console.error('Error al cargar el perfil:', err);
        this.cargando = false;
        if (err.status === 401 || err.status === 403) {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
          return;
        }

        this.errorPerfil = err.status === 404
          ? 'No se encontró un perfil profesional asociado a esta cuenta.'
          : err.name === 'TimeoutError'
            ? 'El servidor está tardando demasiado en responder.'
            : 'No se pudieron cargar los datos de tu perfil.';
        this.changeDetector.markForCheck();
      }
    });
  }

  onFotoSeleccionada(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.archivoFoto = input.files[0];
    }
  }

  onFotosTrabajoSeleccionadas(event: Event): void {
    const input = event.target as HTMLInputElement;
    const archivos = Array.from(input.files ?? []);

    if (archivos.length > 10) {
      alert('Puedes seleccionar hasta 10 fotos por vez.');
      input.value = '';
      return;
    }

    this.fotosTrabajoSeleccionadas = archivos;
  }

  cerrarSesion(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/login']);
  }

  guardarCambios(): void {
    const formData = new FormData();

    formData.append('nombre', this.profesional.nombre ?? '');
    formData.append('apellido', this.profesional.apellido ?? '');
    formData.append('telefono', this.profesional.telefono ?? '');
    formData.append('email', this.profesional.email ?? '');
    formData.append('experiencia_anios', String(this.profesional.experiencia_anios ?? 0));
    formData.append('descripcion', this.profesional.descripcion ?? '');
    formData.append('oficio', String(this.profesional.oficio ?? this.profesional.oficio_id ?? ''));
    formData.append('ubicacion', String(this.profesional.ubicacion ?? this.profesional.ubicacion_id ?? ''));

    if (this.archivoFoto) {
      formData.append('imagen_portfolio', this.archivoFoto);
    }

    this.apiService.actualizarPerfil(this.profesional.id, formData).subscribe({
      next: (res) => {
        this.profesional = res;
        this.archivoFoto = null;
        this.changeDetector.markForCheck();
        if (this.fotosTrabajoSeleccionadas.length > 0) {
          this.guardarFotosTrabajo(res.id);
        } else {
          alert('¡Perfil actualizado con éxito!');
        }
      },
      error: (err) => {
        console.error('Error al actualizar:', err);
        alert('Hubo un error al guardar los cambios.');
      }
    });
  }

  private guardarFotosTrabajo(profesionalId: number): void {
    this.apiService.subirFotosTrabajo(profesionalId, this.fotosTrabajoSeleccionadas).subscribe({
      next: (fotos) => {
        this.profesional = {
          ...this.profesional,
          fotos_trabajo: [...(this.profesional.fotos_trabajo ?? []), ...fotos]
        };
        this.fotosTrabajoSeleccionadas = [];
        this.changeDetector.markForCheck();
        alert('¡Perfil y fotos guardados con éxito!');
      },
      error: (err) => {
        console.error('Error al subir las fotos de trabajos:', err);
        alert(err.error?.imagenes?.[0]?.imagen?.[0] ?? err.error?.error ?? 'El perfil se guardó, pero no se pudieron subir las fotos de trabajos.');
      }
    });
  }
}