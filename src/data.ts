import { Project, Service } from './types';

// Import local images from the images directory
import imgPepsi2 from '../images/Copia de poster III campaña Pepsi.png';
import imgVallaKids from '../images/VALLA HUMANA AI KIDS post.jpg';
import imgCartelImprenta from '../images/CARTEL IMPRENTA OFFSET GABRIELA ALCANTARA-1.png';
import imgPortadaRevista from '../images/Copia de portada para la revista-Recuperado.png';
import imgPaginaWeb from '../images/pagina web curso.jpg';
import imgCursoRedesN from '../images/curso para redes sociales(nuevoPOST).jpg';
import imgCartelTipografico from '../images/cartel tipografico [Recuperado]_Mesa de trabajo 1.png';
import imgAmistad from '../images/Amistad CTD(NUEVO) (1).jpg';
import imgCapcut from '../images/Capcut.jpg';
import imgCarrusel1 from '../images/carrucel-de-marketing(opcion)_01.jpg';
import imgBaseball from '../images/BaseballOpcion2(historia).jpg';
import imgDisenoG from '../images/diseño G especialidad.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'project-pepsi',
    title: 'Campaña Pepsi',
    category: 'Brand Identity',
    year: '2025',
    description: 'Rediseño conceptual y dirección de arte para la campaña publicitaria de Pepsi.',
    role: 'Diseñadora Gráfica & Directora de Arte',
    image: imgPepsi2,
    details: {
      client: 'Pepsi Co. (Concepto)',
      challenge: 'Modernizar la comunicación visual de Pepsi para conectar con las nuevas generaciones digitales.',
      solution: 'Se crearon pósters vibrantes con alto contraste y dinamismo visual respetando la esencia de la marca.',
      gridSystem: 'Rejilla asimétrica dinámica de 12 columnas.',
      typography: 'Inter Tight & Futura Bold',
      colorPalette: ['#004B87', '#FF0000', '#FFFFFF', '#000000'],
      scope: ['Dirección de Arte', 'Diseño de Póster', 'Campaña Digital']
    }
  },
  {
    id: 'project-valla-kids',
    title: 'Valla Humana AI Kids',
    category: 'Brand Identity',
    year: '2024',
    description: 'Propuesta de valla publicitaria exterior para la marca AI Kids.',
    role: 'Diseñadora de Marca',
    image: imgVallaKids,
    details: {
      client: 'AI Kids',
      challenge: 'Diseñar un elemento publicitario de gran formato que sea llamativo y transmita tecnología e infancia.',
      solution: 'Composición moderna con elementos de inteligencia artificial orientados a la educación infantil.',
      gridSystem: 'Layout modular para exteriores.',
      typography: 'Outfit & Space Grotesk',
      colorPalette: ['#6C5CE7', '#FFEAA7', '#2D3436', '#FFFFFF'],
      scope: ['Diseño Exterior', 'Identidad de Marca', 'Publicidad de Gran Formato']
    }
  },
  {
    id: 'project-cartel-offset',
    title: 'Cartel Imprenta Offset',
    category: 'Illustration',
    year: '2024',
    description: 'Diseño técnico e ilustrativo para promoción de servicios de imprenta offset.',
    role: 'Ilustradora & Diseñadora de Producción',
    image: imgCartelImprenta,
    details: {
      client: 'Imprenta Offset S.A.',
      challenge: 'Comunicar la precisión y calidad del sistema de impresión offset tradicional en una sola pieza visual.',
      solution: 'Ilustración detallada que resalta los colores CMYK y los rodillos de impresión clásicos.',
      gridSystem: 'Cuadrícula técnica simétrica.',
      typography: 'Courier New & Helvetica Neue',
      colorPalette: ['#EC008C', '#00AEEF', '#FFF200', '#000000'],
      scope: ['Ilustración Vectorial', 'Preparación para Prensa', 'Diseño Promocional']
    }
  },
  {
    id: 'project-portada-revista',
    title: 'Portada de Revista',
    category: 'Packaging',
    year: '2023',
    description: 'Diseño editorial premium para la portada de una revista de arte contemporáneo.',
    role: 'Diseñadora Editorial',
    image: imgPortadaRevista,
    details: {
      client: 'Revista Arte & Diseño',
      challenge: 'Crear una portada impactante que funcione tanto en formato impreso como en quioscos digitales.',
      solution: 'Composición limpia con tipografía expresiva y una imagen central de alto contraste.',
      gridSystem: 'Rejilla editorial de 3 columnas.',
      typography: 'Editorial Garamond & Syne',
      colorPalette: ['#111111', '#E5E5E5', '#D4AF37', '#FFFFFF'],
      scope: ['Diseño de Portada', 'Dirección Editorial', 'Maquetación Digital']
    }
  },
  {
    id: 'project-web-curso',
    title: 'Página Web Curso',
    category: 'Web & Digital',
    year: '2024',
    description: 'Diseño de interfaz y experiencia de usuario para plataforma de cursos en línea.',
    role: 'Diseñadora UI/UX',
    image: imgPaginaWeb,
    details: {
      client: 'Educación Online',
      challenge: 'Hacer que el proceso de aprendizaje sea intuitivo y visualmente atractivo para estudiantes jóvenes.',
      solution: 'Landing page minimalista con jerarquía clara, colores vibrantes y navegación simple.',
      gridSystem: 'Rejilla responsive de 12 columnas.',
      typography: 'Inter & Outfit',
      colorPalette: ['#0F16A5', '#F2F2F2', '#111111', '#FF7675'],
      scope: ['Diseño de Interfaz', 'Arquitectura de Información', 'Prototipado Interactivo']
    }
  },
  {
    id: 'project-curso-redes',
    title: 'Curso Redes Sociales',
    category: 'Brand Identity',
    year: '2024',
    description: 'Diseño de post promocional y branding para cursos de redes sociales.',
    role: 'Social Media Designer',
    image: imgCursoRedesN,
    details: {
      client: 'Marketing Academy',
      challenge: 'Capturar la atención en feeds saturados de redes sociales con un diseño limpio pero llamativo.',
      solution: 'Uso de contrastes fuertes, textos legibles y espacios vacíos estratégicos.',
      gridSystem: 'Layout cuadrado de 1:1 optimizado para Instagram.',
      typography: 'Space Grotesk & Inter',
      colorPalette: ['#000000', '#00FFCC', '#FF007F', '#FFFFFF'],
      scope: ['Social Media Assets', 'Branding Digital', 'Campaña de Ads']
    }
  },
  {
    id: 'project-cartel-tipografico',
    title: 'Cartel Tipográfico',
    category: 'Illustration',
    year: '2023',
    description: 'Exploración artística de la tipografía como elemento puramente ilustrativo.',
    role: 'Artista Visual',
    image: imgCartelTipografico,
    details: {
      client: 'Galería de Arte Tipográfico',
      challenge: 'Expresar un concepto poético prescindiendo de imágenes y utilizando únicamente caracteres tipográficos.',
      solution: 'Composición experimental jugando con pesos visuales, superposiciones y ritmo.',
      gridSystem: 'Composición libre asimétrica.',
      typography: 'Didot & Bodoni Bold',
      colorPalette: ['#0A0A0A', '#EAEAEA', '#C83232', '#FFFFFF'],
      scope: ['Composición Artística', 'Póster de Exhibición', 'Tipografía Experimental']
    }
  },
  {
    id: 'project-amistad-ctd',
    title: 'Ilustración Amistad CTD',
    category: 'Illustration',
    year: '2025',
    description: 'Obra digital temática que explora las conexiones humanas y la amistad.',
    role: 'Ilustradora Digital',
    image: imgAmistad,
    details: {
      client: 'Proyecto Cultural CTD',
      challenge: 'Traducir el sentimiento abstracto de la amistad en una ilustración moderna y metafórica.',
      solution: 'Uso de formas fluidas y colores cálidos que transmiten cercanía y empatía.',
      gridSystem: 'Composición orgánica fluida.',
      typography: 'Syne ExtraBold',
      colorPalette: ['#FD79A8', '#FFEAA7', '#6C5CE7', '#2D3436'],
      scope: ['Ilustración Conceptual', 'Arte Digital', 'Poster de Exhibición']
    }
  },
  {
    id: 'project-capcut',
    title: 'Recursos Capcut',
    category: 'Web & Digital',
    year: '2025',
    description: 'Diseño de material promocional y tutorial para creadores en Capcut.',
    role: 'Diseñadora de Contenido',
    image: imgCapcut,
    details: {
      client: 'Capcut Creators',
      challenge: 'Presentar una guía clara y estética para la edición de videos en formato vertical.',
      solution: 'Visualización paso a paso y elementos UI simulados para facilitar la comprensión.',
      gridSystem: 'Formato vertical 9:16.',
      typography: 'Inter Bold',
      colorPalette: ['#000000', '#F5A623', '#4A90E2', '#FFFFFF'],
      scope: ['Diseño de Plantillas', 'Edición Digital', 'Recursos Creativos']
    }
  },
  {
    id: 'project-carrucel-mkt',
    title: 'Carrusel de Marketing',
    category: 'Web & Digital',
    year: '2024',
    description: 'Estructura e interfaz visual para carruseles educativos en LinkedIn e Instagram.',
    role: 'UI Designer & Content Strategist',
    image: imgCarrusel1,
    details: {
      client: 'Agencia de Marketing Digital',
      challenge: 'Garantizar que el usuario continúe deslizando en carruseles multi-página.',
      solution: 'Diseño continuo donde los elementos visuales conectan una página con la siguiente.',
      gridSystem: 'Multi-cuadrícula horizontal continua.',
      typography: 'Space Grotesk & Outfit',
      colorPalette: ['#050505', '#EFEFEF', '#0F16A5', '#00FFCC'],
      scope: ['Diseño de Carrusel', 'Estrategia de Interacción', 'Branding de Contenidos']
    }
  },
  {
    id: 'project-baseball',
    title: 'Historia del Béisbol',
    category: 'Illustration',
    year: '2024',
    description: 'Ilustración y diseño editorial sobre la trayectoria histórica del béisbol.',
    role: 'Ilustradora & Diseñadora Editorial',
    image: imgBaseball,
    details: {
      client: 'Liga de Béisbol (Edición Especial)',
      challenge: 'Condensar momentos históricos en una sola infografía de carácter artístico.',
      solution: 'Composición clásica inspirada en revistas deportivas retro, con colores tierra y texturas vintage.',
      gridSystem: 'Cuadrícula clásica de periódico.',
      typography: 'Impact & Times New Roman',
      colorPalette: ['#8B0000', '#F5F5DC', '#333333', '#FFFFFF'],
      scope: ['Ilustración Retro', 'Diseño de Infografía', 'Dirección de Arte']
    }
  },
  {
    id: 'project-diseno-g',
    title: 'Especialidad G',
    category: 'Brand Identity',
    year: '2023',
    description: 'Identidad visual y monograma conceptual para Gabriela Alcántara.',
    role: 'Diseñadora de Identidad',
    image: imgDisenoG,
    details: {
      client: 'Marca Personal',
      challenge: 'Sintetizar la letra G y la esencia del diseño en una marca atemporal.',
      solution: 'Monograma geométrico que juega con líneas limpias y equilibrio constructivo.',
      gridSystem: 'Cuadrícula geométrica estricta.',
      typography: 'Didot & Inter',
      colorPalette: ['#000000', '#EAEAEA', '#9C9286', '#FFFFFF'],
      scope: ['Diseño de Monograma', 'Identidad Corporativa', 'Papelería Premium']
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 'service-1',
    title: 'Brand Identity',
    description: 'Developing cohesive visual structures that define true market presence, creating lasting resonance.',
    icon: 'branding_watermark',
    benefits: [
      'Bespoke, timeless logo systems and symbol design',
      'Exquisite responsive typography guidelines matching your niche',
      'Durable visual identity templates covering stationery, print & social media',
      'Art direction strategy to establish a high-end emotional prestige'
    ],
    process: [
      '1. Strategic Discovery & Core Values Triage',
      '2. Moodboards, Tone definitions & Typographic pair research',
      '3. Visual concepts sketch, refinement & mock layouts',
      '4. Delivery of robust brand ecosystem and digital assets guide'
    ]
  },
  {
    id: 'service-2',
    title: 'Packaging Design',
    description: 'Tactile, premium luxury layouts merging eco-conscious material science with sophisticated retail design.',
    icon: 'inventory_2',
    benefits: [
      'Custom luxury boxes and cosmetic label engineering',
      'Strict emphasis on post-recycled heavy papers and premium textures',
      'Accurate geometric folding structures & high-end die-cuts',
      'Collaborations with sustainable boutique material vendors worldwide'
    ],
    process: [
      '1. Container Geometry & Material research',
      '2. Visual labeling, color palettes and finish tests (emboss/foil)',
      '3. Sourcing compostable and marble organic polymers',
      '4. Final manufacturing blueprints and close-up artwork files'
    ]
  },
  {
    id: 'service-3',
    title: 'Web & Digital',
    description: 'Responsive, fluid digital interfaces focused on ultra-minimalist navigation & high performance.',
    icon: 'web',
    benefits: [
      'Beautiful user experience design honoring negative space and clarity',
      'Premium animations and transitions centered on guiding focus',
      'Responsive screens engineered with crisp typography scaling',
      'Modern interactive components (galleries, custom planners, viewers)'
    ],
    process: [
      '1. Visual Architecture, Flow maps & wire-diagram validation',
      '2. Figma-grade aesthetic interface screens mockups',
      '3. Interaction models, transitions & fine motion scripting',
      '4. Production code delivery or collaboration with developer teams'
    ]
  },
  {
    id: 'service-4',
    title: 'Bespoke Illustration',
    description: 'Custom organic textures, kinetic digital art, and bespoke drawings made for luxury applications.',
    icon: 'draw',
    benefits: [
      'Tailored custom wallpapers, liquid wave vectors, and premium line patterns',
      'High-resolution art compatible with large scale canvas installations',
      'Editorial graphic artworks for print covers and boutique merchandise'
    ],
    process: [
      '1. Theme analysis, scale definition, and tactile references exploration',
      '2. Silhouette blocking, light maps, and gradient system experiments',
      '3. High fidelity fine detailing & viscous kinetic texture generation',
      '4. High-resolution color-graded raster or vector delivery'
    ]
  }
];
