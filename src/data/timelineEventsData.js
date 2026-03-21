import {
  GraduationCap,
  Eye,
  Plane,
  Home,
  Building,
  Zap,
  Activity,
  Waves,
  Droplet,
  Building2,
  Award,
  Video,
  Star,
  Target,
  Circle,
  Tag,
  Focus,
  Link,
  Search,
} from 'lucide-react';
import { imageUrls } from '@/config/urls';
import { routePaths } from '@/config/routes';

export const timelineEvents = [
  {
    year: '1982',
    title: 'Licenciatura en Medicina',
    description:
      'El Dr. Amigó se gradúa en Medicina y Cirugía por la Universidad de La Laguna.',
    icon: GraduationCap,
  },
  {
    year: '1983 - 1987',
    title: 'Especialización en Oftalmología',
    description:
      'Formación MIR en el Hospital Clínico San Carlos (Madrid) y subespecialización en Retina-Vítreo en el Hospital La Paz.',
    icon: Eye,
    link: routePaths.blog,
    linkText: 'Blog Salud Visual',
  },
  {
    year: '1988',
    title: 'Subespecialización internacional',
    description:
      'Se traslada a Países Bajos para formarse en cirugía de cataratas y cirugía refractiva.',
    icon: Plane,
    image: imageUrls.teamHeader,
  },
  {
    year: '1990',
    title: 'Regreso a Tenerife',
    description:
      'Inicia práctica privada e introduce la cirugía refractiva corneal incisional en la isla.',
    icon: Home,
  },
  {
    year: '1992',
    title: 'Dirección en Hospiten',
    description:
      'Dirige el Servicio de Oftalmología del grupo Hospiten hasta ese año.',
    icon: Building,
  },
  {
    year: '1993',
    title: 'Cirugía refractiva láser',
    description:
      'Co-fundador del primer equipo en Canarias especializado en láser excimer.',
    icon: Zap,
  },
  {
    year: '1993',
    title: 'Cirugía ambulatoria de catarata',
    description: 'Introduce esta técnica de forma sistemática en Tenerife.',
    icon: Activity,
  },
  {
    year: '1994',
    title: 'Facoemulsificación',
    description:
      'Implanta esta técnica como práctica habitual en cirugía de catarata.',
    icon: Waves,
  },
  {
    year: '1995',
    title: 'Anestesia tópica',
    description:
      'Pionero en el uso de anestesia sin inyecciones para cirugía de catarata.',
    icon: Droplet,
  },
  {
    year: '1996',
    title: 'Dirección en San Juan de Dios',
    description: 'Dirige el Servicio de Oftalmología hasta 2001.',
    icon: Building2,
  },
  {
    year: '1996',
    title: 'Doctorado',
    description:
      'Doctor en Medicina por la Universidad Complutense, calificación "cum laude".',
    icon: Award,
  },
  {
    year: '1997',
    title: 'Curso en directo',
    description:
      'Organiza el primer curso en Canarias de cirugía de catarata en directo con facoemulsificación.',
    icon: Video,
  },
  {
    year: '2001',
    title: 'Fundación de la clínica Instituto Oftalmológico Amigó ',
    description:
      'Nace el Instituto Oftalmológico Amigó y Muiños, primer centro en Canarias para Cirugía Mayor Ambulatoria en Oftalmología.',
    icon: Star,
  },
  {
    year: '2003',
    title: 'Innovación personalizada',
    description:
      'Se incorporan tratamientos refractivos guiados por frente de onda.',
    icon: Target,
  },
  {
    year: '2005',
    title: 'Manejo del queratocono',
    description: 'Se implantan anillos intracorneales como tratamiento.',
    icon: Circle,
  },
  {
    year: '2006',
    title: 'Nuevo nombre',
    description:
      'El centro adopta su actual denominación: Instituto Oftalmológico Amigó (IOA).',
    icon: Tag,
  },
  {
    year: '2008',
    title: 'Presbylasik',
    description: 'Técnica para la corrección de la presbicia.',
    icon: Focus,
  },
  {
    year: '2009',
    title: 'Cross-Linking corneal',
    description: 'Se introduce esta técnica para detener el queratocono.',
    icon: Link,
  },
  {
    year: '2009',
    title: 'Creación de Sección de Investigación',
    description:
      'Área dedicada a innovación en técnicas quirúrgicas personalizadas.',
    icon: Search,
  },
  {
    year: '2014',
    title: 'Láser de femtosegundo',
    description: 'Avance tecnológico para cirugía de catarata y refractiva.',
    icon: Search,
  },
];
