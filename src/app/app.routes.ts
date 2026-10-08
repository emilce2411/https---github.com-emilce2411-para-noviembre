import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PerfilProfesionalComponent } from './components/perfil-profesional/perfil-profesional';
// Importa aquí también el componente que quieras mostrar al hacer clic en profesionales si tienes uno específico
import { ListadoDeProfesionalesComponent } from './components/listado-de-profecionales/listado-de-profecionales'; // Asegúrate de que la ruta sea correcta

export const routes: Routes = [
  { path: '', component: Home},
  // AQUÍ EDITAS/AGREGAS LA RUTA QUE CONECTA CON EL ROUTERLINK:
  { path: 'profesionales', component: ListadoDeProfesionalesComponent}, // O el componente que despliegue las tarjetas
  { path: 'profesional/:id', component: PerfilProfesionalComponent },
];