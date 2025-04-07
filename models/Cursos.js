const cursos = [
  {
    id: "1",
    titulo: "Curso de React Native",
    imagen: require("../assets/react.png"),
    categoria: "Desarrollo Móvil",
    descripcion:
      "Aprende a desarrollar aplicaciones móviles usando React Native desde cero.",
    lecciones: [
      {
        id: "1",
        titulo: "Introducción a React Native",
        video: require("../assets/Videos/React1.mp4"),
      },
      {
        id: "2",
        titulo: "Componentes y Props",
        video: require("../assets/Videos/React2.mp4"),
      },
      {
        id: "3",
        titulo: "Hooks y Estado",
        video: require("../assets/Videos/React3.mp4"),
      },
      {
        id: "4",
        titulo: "Navegación en React Native",
        video: require("../assets/Videos/React4.mp4"),
      },
      {
        id: "5",
        titulo: "Consumo de APIs con Axios",
        video: require("../assets/Videos/React5.mp4"),
      },
      {
        id: "6",
        titulo: "Animaciones y Estilos",
        video: require("../assets/Videos/React6.mp4"),
      },
    ],
  },
  {
    id: "2",
    titulo: "Curso de JavaScript",
    imagen: require("../assets/javascript.png"),
    categoria: "Programación",
    descripcion:
      "Domina JavaScript desde lo básico hasta técnicas avanzadas para el desarrollo web.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos de JavaScript",
        video: require("../assets/Videos/JS1.mp4"),
      },
      {
        id: "2",
        titulo: "Manipulación del DOM",
        video: require("../assets/Videos/JS2.mp4"),
      },
      {
        id: "3",
        titulo: "Eventos y funciones",
        video: require("../assets/Videos/JS3.mp4"),
      },
      {
        id: "4",
        titulo: "Promesas y async/await",
        video: require("../assets/Videos/JS4.mp4"),
      },
      {
        id: "5",
        titulo: "Uso de APIs",
        video: require("../assets/Videos/JS5.mp4"),
      },
      {
        id: "6",
        titulo: "ES6 y más allá",
        video: require("../assets/Videos/JS6.mp4"),
      },
    ],
  },
  {
    id: "3",
    titulo: "Curso de Python",
    imagen: require("../assets/python.png"),
    categoria: "Programación",
    descripcion:
      "Aprende Python, uno de los lenguajes más versátiles y usados en el mundo.",
    lecciones: [
      {
        id: "1",
        titulo: "Introducción a Python",
        video: require("../assets/Videos/Python1.mp4"),
      },
      {
        id: "2",
        titulo: "Tipos de datos y estructuras",
        video: require("../assets/Videos/Python2.mp4"),
      },
      {
        id: "3",
        titulo: "Funciones y módulos",
        video: require("../assets/Videos/Python3.mp4"),
      },
      {
        id: "4",
        titulo: "Manejo de archivos",
        video: require("../assets/Videos/Python4.mp4"),
      },
      {
        id: "5",
        titulo: "Programación orientada a objetos",
        video: require("../assets/Videos/Python5.mp4"),
      },
      {
        id: "6",
        titulo: "Automatización con Python",
        video: require("../assets/Videos/Python6.mp4"),
      },
    ],
  },
  {
    id: "4",
    titulo: "Curso de Node.js",
    imagen: require("../assets/nodejs.png"),
    categoria: "Backend",
    descripcion: "Desarrolla aplicaciones backend escalables con Node.js y Express.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos de Node.js",
        video: require("../assets/Videos/Node1.mp4"),
      },
      {
        id: "2",
        titulo: "Manejo de paquetes con NPM",
        video: require("../assets/Videos/Node2.mp4"),
      },
      {
        id: "3",
        titulo: "Creación de APIs REST",
        video: require("../assets/Videos/Node3.mp4"),
      },
      {
        id: "4",
        titulo: "Autenticación y seguridad",
        video: require("../assets/Videos/Node4.mp4"),
      },
      {
        id: "5",
        titulo: "Conexión con bases de datos",
        video: require("../assets/Videos/Node5.mp4"),
      },
      {
        id: "6",
        titulo: "Despliegue de aplicaciones",
        video: require("../assets/Videos/Node6.mp4"),
      },
    ],
  },
  {
    id: "5",
    titulo: "Curso de HTML y CSS",
    imagen: require("../assets/html-css.png"),
    categoria: "Desarrollo Web",
    descripcion: "Aprende a construir sitios web con HTML y CSS desde cero.",
    lecciones: [
      {
        id: "1",
        titulo: "Estructura HTML",
        video: require("../assets/Videos/HTML1.mp4"),
      },
      {
        id: "2",
        titulo: "CSS y diseño responsivo",
        video: require("../assets/Videos/HTML2.mp4"),
      },
      {
        id: "3",
        titulo: "Flexbox y Grid",
        video: require("../assets/Videos/HTML3.mp4"),
      },
      {
        id: "4",
        titulo: "Animaciones con CSS",
        video: require("../assets/Videos/HTML4.mp4"),
      },
      {
        id: "5",
        titulo: "Frameworks CSS (Bootstrap, Tailwind)",
        video: require("../assets/Videos/HTML5.mp4"),
      },
      {
        id: "6",
        titulo: "Buenas prácticas en desarrollo web",
        video: require("../assets/Videos/HTML6.mp4"),
      },
    ],
  },
  {
    id: "6",
    titulo: "Curso de UX/UI",
    imagen: require("../assets/ux-ui.png"),
    categoria: "Diseño",
    descripcion: "Aprende los fundamentos del diseño UX/UI para crear experiencias de usuario efectivas.",
    lecciones: [
      {
        id: "1",
        titulo: "Principios de UX/UI",
        video: require("../assets/Videos/uxui1.mp4"),
      },
      {
        id: "2",
        titulo: "Diseño centrado en el usuario",
        video: require("../assets/Videos/uxui2.mp4"),
      },
      {
        id: "3",
        titulo: "Herramientas de prototipado",
        video: require("../assets/Videos/uxui3.mp4"),
      },
      {
        id: "4",
        titulo: "Pruebas de usabilidad",
        video: require("../assets/Videos/uxui4.mp4"),
      },
      {
        id: "5",
        titulo: "Diseño de interfaces accesibles",
        video: require("../assets/Videos/uxui5.mp4"),
      },
      {
        id: "6",
        titulo: "Tendencias en UX/UI",
        video: require("../assets/Videos/uxui6.mp4"),
      },
    ],
  },
  {
    id: "7",
    titulo: "Curso de MongoDB",
    imagen: require("../assets/mongodb.png"),
    categoria: "Bases de Datos",
    descripcion: "Domina el manejo de bases de datos NoSQL con MongoDB.",
    lecciones: [
      {
        id: "1",
        titulo: "Introducción a MongoDB",
        video: require("../assets/Videos/mongodb1.mp4"),
      },
      {
        id: "2",
        titulo: "Operaciones CRUD",
        video: require("../assets/Videos/mongodb2.mp4"),
      },
      {
        id: "3",
        titulo: "Modelado de datos",
        video: require("../assets/Videos/mongodb3.mp4"),
      },
      {
        id: "4",
        titulo: "Índices y optimización",
        video: require("../assets/Videos/mongodb4.mp4"),
      },
      {
        id: "5",
        titulo: "Integración con Node.js",
        video: require("../assets/Videos/mongodb5.mp4"),
      },
      {
        id: "6",
        titulo: "Escalabilidad y replicación",
        video: require("../assets/Videos/mongodb6.mp4"),
      },
    ],
  },
  {
    id: "8",
    titulo: "Curso de Docker",
    imagen: require("../assets/docker.png"),
    categoria: "DevOps",
    descripcion: "Aprende a usar Docker para la contenedorización de aplicaciones.",
    lecciones: [
      {
        id: "1",
        titulo: "Conceptos básicos de Docker",
        video: require("../assets/Videos/docker1.mp4"),
      },
      {
        id: "2",
        titulo: "Creación de contenedores",
        video: require("../assets/Videos/docker2.mp4"),
      },
      {
        id: "3",
        titulo: "Docker Compose",
        video: require("../assets/Videos/docker3.mp4"),
      },
      {
        id: "4",
        titulo: "Redes y volúmenes en Docker",
        video: require("../assets/Videos/docker4.mp4"),
      },
      {
        id: "5",
        titulo: "Despliegue de aplicaciones",
        video: require("../assets/Videos/docker5.mp4"),
      },
      {
        id: "6",
        titulo: "Buenas prácticas con Docker",
        video: require("../assets/Videos/docker6.mp4"),
      },
    ],
  },
  {
    id: "9",
    titulo: "Curso de AWS",
    imagen: require("../assets/aws.png"),
    categoria: "Cloud Computing",
    descripcion: "Descubre los servicios de AWS para desarrollar soluciones en la nube.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos de AWS",
        video: require("../assets/Videos/aws1.mp4"),
      },
      {
        id: "2",
        titulo: "EC2 y almacenamiento S3",
        video: require("../assets/Videos/aws2.mp4"),
      },
      {
        id: "3",
        titulo: "Bases de datos en AWS",
        video: require("../assets/Videos/aws3.mp4"),
      },
      {
        id: "4",
        titulo: "Implementación de APIs Serverless",
        video: require("../assets/Videos/aws4.mp4"),
      },
      {
        id: "5",
        titulo: "Seguridad en la nube",
        video: require("../assets/Videos/aws5.mp4"),
      },
      {
        id: "6",
        titulo: "Automatización con AWS Lambda",
        video: require("../assets/Videos/aws6.mp4"),
      },
    ],
  },
  {
    id: "10",
    titulo: "Curso de Flutter",
    imagen: require("../assets/flutter.png"),
    categoria: "Desarrollo Móvil",
    descripcion: "Desarrolla aplicaciones móviles multiplataforma con Flutter y Dart.",
    lecciones: [
      {
        id: "1",
        titulo: "Introducción a Flutter",
        video: require("../assets/Videos/flutter1.mp4"),
      },
      {
        id: "2",
        titulo: "Widgets y diseño de interfaces",
        video: require("../assets/Videos/flutter2.mp4"),
      },
      {
        id: "3",
        titulo: "Gestión del estado",
        video: require("../assets/Videos/flutter3.mp4"),
      },
      {
        id: "4",
        titulo: "Consumo de APIs",
        video: require("../assets/Videos/flutter4.mp4"),
      },
      {
        id: "5",
        titulo: "Animaciones y rendimiento",
        video: require("../assets/Videos/flutter5.mp4"),
      },
      {
        id: "6",
        titulo: "Publicación en Play Store y App Store",
        video: require("../assets/Videos/flutter6.mp4"),
      },
    ],
  },
  {
    id: "11",
    titulo: "Curso de Ciberseguridad Básica",
    imagen: require("../assets/ciberseguridad.png"),
    categoria: "Seguridad",
    descripcion: "Aprende los fundamentos de la ciberseguridad y cómo protegerte en línea.",
    lecciones: [
      {
        id: "1",
        titulo: "Conceptos básicos de ciberseguridad",
        video: require("../assets/Videos/ciberseguridad1.mp4"),
      },
      {
        id: "2",
        titulo: "Tipos de ataques cibernéticos",
        video: require("../assets/Videos/ciberseguridad2.mp4"),
      },
      {
        id: "3",
        titulo: "Autenticación y contraseñas seguras",
        video: require("../assets/Videos/ciberseguridad3.mp4"),
      },
      {
        id: "4",
        titulo: "Protección de redes y sistemas",
        video: require("../assets/Videos/ciberseguridad4.mp4"),
      },
      {
        id: "5",
        titulo: "Normativas y cumplimiento",
        video: require("../assets/Videos/ciberseguridad5.mp4"),
      },
      {
        id: "6",
        titulo: "Buenas prácticas de seguridad",
        video: require("../assets/Videos/ciberseguridad6.mp4"),
      },
    ],
  },
  {
    id: "12",
    titulo: "Curso de Inteligencia Artificial",
    imagen: require("../assets/ia.png"),
    categoria: "Ciencia de Datos",
    descripcion: "Descubre el mundo de la IA y aprende a desarrollar modelos de Machine Learning.",
    lecciones: [
      {
        id: "1",
        titulo: "Introducción a la Inteligencia Artificial",
        video: require("../assets/Videos/ia1.mp4"),
      },
      {
        id: "2",
        titulo: "Algoritmos de Machine Learning",
        video: require("../assets/Videos/ia2.mp4"),
      },
      {
        id: "3",
        titulo: "Redes neuronales y Deep Learning",
        video: require("../assets/Videos/ia3.mp4"),
      },
      {
        id: "4",
        titulo: "Procesamiento de lenguaje natural",
        video: require("../assets/Videos/ia4.mp4"),
      },
      {
        id: "5",
        titulo: "Aplicaciones prácticas de IA",
        video: require("../assets/Videos/ia5.mp4"),
      },
      {
        id: "6",
        titulo: "Implementación de modelos IA",
        video: require("../assets/Videos/ia6.mp4"),
      },
    ],
  },
  {
    id: "13",
    titulo: "Curso de SQL y Bases de Datos",
    imagen: require("../assets/sql.png"),
    categoria: "Bases de Datos",
    descripcion: "Aprende SQL desde cero y domina la gestión de bases de datos relacionales.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos de SQL",
        video: require("../assets/Videos/sql1.mp4"),
      },
      {
        id: "2",
        titulo: "Consultas y manipulación de datos",
        video: require("../assets/Videos/sql2.mp4"),
      },
      {
        id: "3",
        titulo: "Normalización y diseño de bases de datos",
        video: require("../assets/Videos/sql3.mp4"),
      },
      {
        id: "4",
        titulo: "Índices y optimización de consultas",
        video: require("../assets/Videos/sql4.mp4"),
      },
      {
        id: "5",
        titulo: "Procedimientos almacenados y triggers",
        video: require("../assets/Videos/sql5.mp4"),
      },
      {
        id: "6",
        titulo: "Gestión de bases de datos en la nube",
        video: require("../assets/Videos/sql6.mp4"),
      },
    ],
  },
  {
    id: "14",
    titulo: "Curso de Desarrollo Blockchain",
    imagen: require("../assets/blockchain.png"),
    categoria: "Desarrollo Web",
    descripcion: "Explora la tecnología blockchain y aprende a desarrollar aplicaciones descentralizadas.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos de Blockchain",
        video: require("../assets/Videos/blockchain1.mp4"),
      },
      {
        id: "2",
        titulo: "Smart Contracts y Ethereum",
        video: require("../assets/Videos/blockchain2.mp4"),
      },
      {
        id: "3",
        titulo: "Desarrollo con Solidity",
        video: require("../assets/Videos/blockchain3.mp4"),
      },
      {
        id: "4",
        titulo: "Redes y nodos blockchain",
        video: require("../assets/Videos/blockchain4.mp4"),
      },
      {
        id: "5",
        titulo: "Seguridad en Blockchain",
        video: require("../assets/Videos/blockchain5.mp4"),
      },
      {
        id: "6",
        titulo: "Casos de uso de Blockchain",
        video: require("../assets/Videos/blockchain6.mp4"),
      },
    ],
  },
  {
    id: "15",
    titulo: "Curso de Kotlin para Android",
    imagen: require("../assets/kotlin.png"),
    categoria: "Desarrollo Móvil",
    descripcion: "Domina Kotlin y desarrolla aplicaciones nativas para Android con Jetpack Compose.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos de Kotlin",
        video: require("../assets/Videos/kotlin1.mp4"),
      },
      {
        id: "2",
        titulo: "Componentes de una app Android",
        video: require("../assets/Videos/kotlin2.mp4"),
      },
      {
        id: "3",
        titulo: "Jetpack Compose y UI moderna",
        video: require("../assets/Videos/kotlin3.mp4"),
      },
      {
        id: "4",
        titulo: "Persistencia de datos con Room",
        video: require("../assets/Videos/kotlin4.mp4"),
      },
      {
        id: "5",
        titulo: "Consumo de APIs y Networking",
        video: require("../assets/Videos/kotlin5.mp4"),
      },
      {
        id: "6",
        titulo: "Publicación en Google Play Store",
        video: require("../assets/Videos/kotlin6.mp4"),
      },
    ],
  },
  {
    id: "16",
    titulo: "Curso de Arquitectura de Microservicios",
    imagen: require("../assets/microservicios.png"),
    categoria: "Desarrollo Backend",
    descripcion:
      "Aprende a diseñar y desarrollar aplicaciones escalables con microservicios.",
    lecciones: [
      {
        id: "1",
        titulo: "Introducción a Microservicios",
        video: require("../assets/Videos/microservicios1.mp4"),
      },
      {
        id: "2",
        titulo: "Diseño y patrones arquitectónicos",
        video: require("../assets/Videos/microservicios2.mp4"),
      },
      {
        id: "3",
        titulo: "Comunicación entre servicios",
        video: require("../assets/Videos/microservicios3.mp4"),
      },
      {
        id: "4",
        titulo: "Seguridad en microservicios",
        video: require("../assets/Videos/microservicios4.mp4"),
      },
      {
        id: "5",
        titulo: "Despliegue con Docker y Kubernetes",
        video: require("../assets/Videos/microservicios5.mp4"),
      },
      {
        id: "6",
        titulo: "Monitorización y escalabilidad",
        video: require("../assets/Videos/microservicios6.mp4"),
      },
    ],
  },
  {
    id: "17",
    titulo: "Curso de Testing y QA",
    imagen: require("../assets/qa.png"),
    categoria: "Calidad de Software",
    descripcion:
      "Aprende técnicas de testing y calidad de software para garantizar aplicaciones confiables.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos del Testing",
        video: require("../assets/Videos/qa1.mp4"),
      },
      {
        id: "2",
        titulo: "Testing unitario y de integración",
        video: require("../assets/Videos/qa2.mp4"),
      },
      {
        id: "3",
        titulo: "Automatización con Selenium y Jest",
        video: require("../assets/Videos/qa3.mp4"),
      },
      {
        id: "4",
        titulo: "Pruebas de carga y rendimiento",
        video: require("../assets/Videos/qa4.mp4"),
      },
      {
        id: "5",
        titulo: "Gestión de errores y depuración",
        video: require("../assets/Videos/qa5.mp4"),
      },
      {
        id: "6",
        titulo: "Mejores prácticas en QA",
        video: require("../assets/Videos/qa6.mp4"),
      },
    ],
  },
  {
    id: "18",
    titulo: "Curso de Diseño de APIs RESTful",
    imagen: require("../assets/api.png"),
    categoria: "Desarrollo Backend",
    descripcion:
      "Crea APIs robustas y eficientes siguiendo las mejores prácticas RESTful.",
    lecciones: [
      {
        id: "1",
        titulo: "Principios de APIs REST",
        video: require("../assets/Videos/api1.mp4"),
      },
      {
        id: "2",
        titulo: "Diseño y documentación con OpenAPI",
        video: require("../assets/Videos/api2.mp4"),
      },
      {
        id: "3",
        titulo: "Autenticación y seguridad",
        video: require("../assets/Videos/api3.mp4"),
      },
      {
        id: "4",
        titulo: "Optimización y caché",
        video: require("../assets/Videos/api4.mp4"),
      },
      {
        id: "5",
        titulo: "Manejo de errores y logging",
        video: require("../assets/Videos/api5.mp4"),
      },
      {
        id: "6",
        titulo: "Despliegue y pruebas de APIs",
        video: require("../assets/Videos/api6.mp4"),
      },
    ],
  },
  {
    id: "19",
    titulo: "Curso de Análisis de Datos",
    imagen: require("../assets/datos.png"),
    categoria: "Ciencia de Datos",
    descripcion:
      "Aprende a analizar grandes volúmenes de datos con herramientas modernas.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos del análisis de datos",
        video: require("../assets/Videos/datos1.mp4"),
      },
      {
        id: "2",
        titulo: "Manejo de datos con Pandas",
        video: require("../assets/Videos/datos2.mp4"),
      },
      {
        id: "3",
        titulo: "Visualización con Matplotlib y Seaborn",
        video: require("../assets/Videos/datos3.mp4"),
      },
      {
        id: "4",
        titulo: "Estadística aplicada al análisis de datos",
        video: require("../assets/Videos/datos4.mp4"),
      },
      {
        id: "5",
        titulo: "Modelado y predicciones",
        video: require("../assets/Videos/datos5.mp4"),
      },
      {
        id: "6",
        titulo: "Dashboards e informes interactivos",
        video: require("../assets/Videos/datos6.mp4"),
      },
    ],
  },
  {
    id: "20",
    titulo: "Curso de Vue.js desde Cero",
    imagen: require("../assets/vue.png"),
    categoria: "Desarrollo Web",
    descripcion:
      "Aprende a desarrollar aplicaciones web modernas con Vue.js desde cero.",
    lecciones: [
      {
        id: "1",
        titulo: "Fundamentos de Vue.js",
        video: require("../assets/Videos/vue1.mp4"),
      },
      {
        id: "2",
        titulo: "Componentes y Directivas",
        video: require("../assets/Videos/vue2.mp4"),
      },
      {
        id: "3",
        titulo: "Vue Router y Navegación",
        video: require("../assets/Videos/vue3.mp4"),
      },
      {
        id: "4",
        titulo: "Manejo del Estado con Vuex",
        video: require("../assets/Videos/vue4.mp4"),
      },
      {
        id: "5",
        titulo: "Consumo de APIs y Axios",
        video: require("../assets/Videos/vue5.mp4"),
      },
      {
        id: "6",
        titulo: "Despliegue de aplicaciones Vue.js",
        video: require("../assets/Videos/vue6.mp4"),
      },
    ],
  },
  ];

export default cursos;