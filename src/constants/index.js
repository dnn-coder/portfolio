import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Web Designer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Backend Developer',
    company_name: 'Colegio Los Andes, Tambo - cauca · Contrato de prácticas',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Jul 2022 - May 2023',
    points: [
      'Se desarrolló una aplicación para optimizar la gestión de datos y procesos en el Colegio Los Andes, ubicado en Tambo, Cauca. Este software facilita la organización eficiente y precisa de la información escolar.',
      'La aplicación permite crear y administrar diversos recursos en la base de datos, como matrículas de estudiantes, agilizando el proceso de inscripción.',
      'También gestiona boletines y notas, generando automáticamente boletines y registrando las notas de los estudiantes para su consulta en cualquier momento.',
      'Además, incluye otras funciones útiles para la gestión de información escolar, centralizando datos importantes y mejorando la eficiencia operativa del colegio.',
    ],
  },
  {
    title: 'Facturador',
    company_name: 'Hospital Universitario San José de Popayán',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Abr 2017 - Oct 2021',
    points: [
      'Facturar los servicios de salud prestados según pagador, tipo de contratación y normativa vigente.',
      'Área: Urgencias, Urgencias Pediátricas, facturación central.',
      'Software: Dinámica Gerencial (DGH).',
      'Jornada completa',
    ],
  },
  {
    title: 'Facturador',
    company_name: 'Hospital Susana Lopez de Valencia',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Ene 2014 - Jun 2017',
    points: [
      'Facturar los servicios de salud prestados según pagador, tipo de contratación y normativa vigente.',
      'Área: Urgencias, Urgencias Pediátricas, facturación central.',
      'Software: Dinámica Gerencial (DGH).',
      'Jornada completa',
    ],
  },
  {
    title: 'Técnico En Sistemas',
    company_name: 'Corporación Universitaria Autónoma del Cauca',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Ene 2013 - Dic 2013',
    points: [
      'Apoyo al Sitio Web de la Universidad: Colaboración en el mantenimiento del sitio web universitario.',
      'Mantenimiento de Computadores: Realización de mantenimiento preventivo y correctivo de computadoras.',
      'Instalación de Sistemas Operativos: Instalación de sistemas operativos como Windows, Ubuntu y máquinas virtuales.',
      'Mantenimiento de Redes y Backup’s: Mantenimiento de redes universitarias y gestión de backups.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Ecommerce',
    description:
      'Tienda online de ropa utilizando Next.js, un framework de React que permite construir aplicaciones web rápidas y eficientes. Se configuró el entorno, se integraron APIs para gestionar inventario y pagos, y se implementó renderizado del lado del servidor para mejorar la velocidad de carga. La tienda tiene una interfaz moderna y responsiva, asegurando una experiencia de compra fluida en todos los dispositivos. Se incluyeron medidas de seguridad para proteger la información y las transacciones de los usuarios.',
    tags: [
      {
        name: 'Nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Postgres',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
