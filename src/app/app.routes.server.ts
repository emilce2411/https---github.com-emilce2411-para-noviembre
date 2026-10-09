import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'profesionales', renderMode: RenderMode.Prerender },
  { path: 'quienes-somos', renderMode: RenderMode.Prerender },
  { path: 'registro', renderMode: RenderMode.Prerender },
  { path: 'login', renderMode: RenderMode.Prerender },
  { path: 'panel', renderMode: RenderMode.Client },
  { path: 'profesional/:id', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender }
];
