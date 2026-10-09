import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.css'
})
export class QuienesSomos {

  imagenesCarrusel = [
     '/image/foto-grupal-equipo.png',
    '/image/foto-grupal-trabajadores.png',
    '/image/foto-grupal-hibrido.png',
    '/image/charla.png',
    '/image/obra.png'
  ];

  secciones = [
    {
      titulo: 'ServiMatch',
      parrafos: [
        'En ServiMatch nos dedicamos a conectar personas con profesionales de oficios verificados, ofreciendo una plataforma segura y confiable para encontrar electricistas, carpinteros, pintores, plomeros y muchos otros trabajadores especializados.',
        'Nuestro objetivo es brindar tranquilidad a los usuarios, permitiéndoles contratar servicios de calidad con profesionales validados y calificados por la comunidad.'
      ],
      items: []
    },
    {
      titulo: 'Nuestra Historia',
      parrafos: [
        'ServiMatch nació frente a la necesidad de encontrar trabajadores confiables de manera rápida y segura.',
        'Por eso desarrollamos una plataforma pensada para facilitar la búsqueda de profesionales verificados, promoviendo la confianza, la transparencia y la seguridad.'
      ],
      items: []
    },
    {
      titulo: 'Qué Ofrecemos',
      parrafos: [],
      items: [
        '⚡ Electricistas verificados',
        '🪚 Carpinteros profesionales',
        '🎨 Pintores y albañiles',
        '🔧 Técnicos y especialistas',
        '📍 Búsqueda por ubicación',
        '⭐ Sistema de calificaciones y opiniones'
      ]
    },
    {
      titulo: 'Nuestros Valores',
      parrafos: [],
      items: [
        '🔒 Seguridad y confianza',
        '🤝 Compromiso con los usuarios',
        '⭐ Transparencia en las calificaciones',
        '⚙️ Calidad en los servicios',
        '🌍 Accesibilidad y facilidad de uso'
      ]
    },
    {
      titulo: 'Nuestra Visión',
      parrafos: [
        'Ser la plataforma líder en búsqueda de oficios y servicios verificados, reconocida por conectar usuarios con profesionales confiables de manera rápida, segura y eficiente.',
        'Buscamos impulsar el crecimiento de trabajadores independientes y mejorar la experiencia de contratación de servicios en toda la comunidad.'
      ],
      items: []
    }
  ];

}