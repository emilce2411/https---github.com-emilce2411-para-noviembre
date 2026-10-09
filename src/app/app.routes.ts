import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PerfilProfesionalComponent } from './components/perfil-profesional/perfil-profesional';
import { ListadoDeProfesionalesComponent } from './components/listado-de-profecionales/listado-de-profecionales'; 
import { QuienesSomos } from './components/quienes-somos/quienes-somos';
import { RegistroComponent } from './components/registro/registro';
import { Login } from './components/login/login';
import { PanelProfesionalComponent } from './components/panel-profesional/panel-profesional';

export const routes: Routes = [
  { path: '', component: Home},
  // AQUÍ EDITAS/AGREGAS LA RUTA QUE CONECTA CON EL ROUTERLINK:
  { path: 'profesionales', component: ListadoDeProfesionalesComponent}, // O el componente que despliegue las tarjetas
  { path: 'profesional/:id', component: PerfilProfesionalComponent },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: Login },
  { path: 'panel', component: PanelProfesionalComponent }
];