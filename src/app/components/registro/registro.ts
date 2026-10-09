import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent implements OnInit {
  // Objeto para almacenar los datos del formulario
  modelo = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    experiencia_anios: 0,
    descripcion: '',
    oficio: null,
    ubicacion: null
  };

  oficios: any[] = [];
  ubicaciones: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getOficios().subscribe({
      next: (data) => {
        this.oficios = data;
        console.log('Oficios cargados:', data);
      },
      error: (err) => console.error('Error cargando oficios:', err)
    });

    this.apiService.getUbicaciones().subscribe({
      next: (data) => {
        this.ubicaciones = data;
        console.log('Ubicaciones cargadas:', data);
      },
      error: (err) => console.error('Error cargando ubicaciones:', err)
    });
  }

  enviarRegistro(): void {
    console.log('Datos del formulario antes de enviar:', this.modelo);

    if (!this.modelo.username || !this.modelo.password || !this.modelo.nombre || !this.modelo.apellido || !this.modelo.email) {
      alert('Completa los campos obligatorios.');
      return;
    }

    if (!this.modelo.oficio || !this.modelo.ubicacion) {
      alert('Debes seleccionar un oficio y una localidad.');
      return;
    }

    this.apiService.registrar(this.modelo).subscribe({
      next: (res) => {
        alert('¡Registro exitoso! Ya puedes iniciar sesión.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al registrarse:', err);
        alert('Hubo un error en el registro. Revisa los datos.');
      }
    });
  }
}