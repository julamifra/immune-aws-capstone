import {
  Phone,
  Building,
  Users,
  History,
  Info,
  Eye,
  Microscope,
  Glasses,
  Home,
  Newspaper,
  BookOpen,
  User,
  Sun,
  EyeOff,
  Layers,
  Droplet,
  CloudSun,
  ScanEye,
  LucideEye,
  LucideEyeOff,
} from 'lucide-react';

export const navLinks = [
  { name: 'Inicio', path: '/', dropdown: false, icon: Home },
  {
    name: 'Quienes somos',
    path: '/quienes-somos',
    dropdown: true,
    subLinks: [
      { name: 'Centro', path: '/quienes-somos/centro', icon: Building },
      { name: 'Equipo', path: '/quienes-somos/equipo', icon: Users },
      { name: 'Historia', path: '/quienes-somos/historia', icon: History },
      {
        name: 'Sobre nosotros',
        path: '/quienes-somos/sobre-nosotros',
        icon: Info,
      },
      {
        name: 'Publicaciones',
        path: '/quienes-somos/publicaciones',
        icon: BookOpen,
      },
    ],
  },
  {
    name: 'Especialidades',
    path: '/especialidades',
    dropdown: true,
    subLinks: [
      {
        name: 'Láser Femtosegundo',
        path: '/especialidades/laser-femtosegundo',
        icon: Microscope,
      },
      {
        name: 'Cirugía refractiva',
        path: '/especialidades/cirugia-refractiva',
        icon: Glasses,
        dropdown: true,
        subLinks: [
          {
            name: 'Miopía',
            path: '/especialidades/operacion-miopia',
            icon: ScanEye,
          },
          {
            name: 'Hipermetropía',
            path: '/especialidades/operacion-hipermetropia',
            icon: LucideEye,
          },
          {
            name: 'Astigmatismo',
            path: '/especialidades/operacion-astigmatismo',
            icon: LucideEyeOff,
          },
        ],
      },
      {
        name: 'Presbicia',
        path: '/especialidades/operacion-presbicia',
        icon: User,
      },
      {
        name: 'Cataratas',
        path: '/especialidades/operacion-cataratas',
        icon: Sun,
      },
      {
        name: 'Glaucoma',
        path: '/especialidades/tratamiento-glaucoma',
        icon: EyeOff,
      },
      {
        name: 'Retina y Mácula',
        path: '/especialidades/tratamiento-retina-macula',
        icon: Layers,
      },
      {
        name: 'Queratocono',
        path: '/especialidades/tratamiento-queratocono',
        icon: Droplet,
      },
      {
        name: 'Párpados y vías lagrimales',
        path: '/especialidades/cirugia-parpados-vias-lagrimales',
        icon: CloudSun,
      },
      {
        name: 'Superficie ocular',
        path: '/especialidades/tratamiento-superficie-ocular',
        icon: Eye,
      },
    ],
  },
  {
    name: 'Blog',
    path: '/blog',
    dropdown: false,
    icon: Newspaper,
  },
  { name: 'Contacto', path: '/contacto', dropdown: false, icon: Phone },
];
