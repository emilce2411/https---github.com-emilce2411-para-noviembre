import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  credenciales = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      this.router.navigate(['/panel']);
    }
  }

  enviarLogin(): void {
    this.apiService.login(this.credenciales).subscribe({
      next: (res) => {
        if (res?.token) {
          localStorage.setItem('token', res.token);
        }
        alert('¡Inicio de sesión exitoso!');
        this.router.navigate(['/panel']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        alert('Usuario o contraseña incorrectos.');
      }
    });
  }
}