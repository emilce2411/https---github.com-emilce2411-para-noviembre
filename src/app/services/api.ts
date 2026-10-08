import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

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
}