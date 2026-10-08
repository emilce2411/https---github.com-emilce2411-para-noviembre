import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  imagenPrincipal = 
    {
      src: '/image/servimatch-laptop.jpg',
      alt: 'Profesionales ServiMatch'
    };
  
  beneficios = [
    {
      titulo: 'Trabajadores verificados',
      descripcion: 'Encontrá profesionales verificados listos para ayudarte en cualquier trabajo o reparación.',
      imagen: '/image/profesionales.png',
      alt: 'Profesionales'
    },
    {
      titulo: 'Contacto directo',
      descripcion: 'Coordiná trabajos, consultas y presupuestos directamente con profesionales verificados.',
      imagen: '/image/contacto-directo.png',
      alt: 'Contacto directo'
    },
    {
      titulo: 'Reseñas y calificaciones',
      descripcion: 'Descubrí profesionales recomendados por usuarios reales y mejor valorados.',
      imagen: '/image/reseñas.png',
      alt: 'Reseñas y calificaciones'
    }
  ];

  requisitos = [
    {
      icono: '🪪',
      titulo: 'Documento de identidad',
      descripcion: 'Subí una foto clara de tu DNI para validar tu identidad dentro de la plataforma.'
    },
    {
      icono: '📱',
      titulo: 'Número de teléfono',
      descripcion: 'Confirmá tu celular para que los clientes puedan contactarte de forma segura.'
    },
    {
      icono: '👤',
      titulo: 'Foto de perfil',
      descripcion: 'Agregá una foto profesional para transmitir mayor confianza a los usuarios.'
    },
    {
      icono: '🎓',
      titulo: 'Experiencia y certificaciones',
      descripcion: 'Mostrá tus trabajos, cursos o matrículas para destacar tu perfil profesional.'
    }
  ];

  preguntasFrecuentes = [
    {
      pregunta: '¿ServiMatch tiene costo para los usuarios?',
      respuesta: 'No, buscar profesionales y consultar perfiles dentro de la plataforma es totalmente gratuito.'
    },
    {
      pregunta: '¿Cómo contacto a un profesional?',
      respuesta: 'Podés comunicarte directamente con el trabajador mediante los datos de contacto disponibles en su perfil.'
    },
    {
      pregunta: '¿Qué tipos de servicios puedo encontrar?',
      respuesta: 'ServiMatch reúne electricistas, plomeros, carpinteros, pintores y muchos otros oficios.'
    },
    {
      pregunta: '¿Las reseñas son reales?',
      respuesta: 'Sí, las opiniones y calificaciones son realizadas por usuarios que utilizaron los servicios.'
    },
    {
      pregunta: '¿Puedo ofrecer mis servicios en la plataforma?',
      respuesta: 'Sí, cualquier profesional puede registrarse y crear su perfil para comenzar a recibir clientes.'
    },
    {
      pregunta: '¿Qué pasa si tengo un problema con un servicio?',
      respuesta: 'Podés revisar las calificaciones del profesional y comunicarte directamente para resolver cualquier inconveniente.'
    }
  ];

}
