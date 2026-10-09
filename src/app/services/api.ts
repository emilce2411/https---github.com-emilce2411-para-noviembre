import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    return new HttpHeaders(
      token ? { Authorization: `Token ${token}` } : {}
    );
  }

  // Obtener lista de profesionales
  getProfesionales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profesionales/`);
  }

  // Obtener el detalle de un profesional por su ID (¡ESTE ES EL NUEVO!)
  getProfesionalById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profesionales/${id}/`);
  }

  // Obtener lista de oficios
  getOficios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/oficios/`);
  }

  // Obtener lista de ubicaciones
  getUbicaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ubicaciones/`);
  }

  // Obtener lista de reseñas
  getResenas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/resenas/`);
  }

  // Registrar un nuevo usuario/profesional
  registrar(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/register/', datos);
  }

  // Iniciar sesión (Login)
  login(credenciales: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login/', credenciales);
  }

  // Obtener el perfil del profesional autenticado
  getPerfilAutenticado(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/perfil/`, {
      headers: this.getAuthHeaders()
    });
  }

  // Actualizar los datos del profesional
  actualizarPerfil(id: number, datos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profesionales/${id}/`, datos, {
      headers: this.getAuthHeaders()
    });
  }

  subirFotosTrabajo(id: number, archivos: File[]): Observable<any[]> {
    const datos = new FormData();
    archivos.forEach((archivo) => datos.append('imagenes', archivo));

    return this.http.post<any[]>(`${this.apiUrl}/profesionales/${id}/fotos-trabajo/`, datos, {
      headers: this.getAuthHeaders()
    });
  }
}