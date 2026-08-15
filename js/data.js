/**
 * Portafolio Mauricio Juanes - Módulo de Datos y Traducciones
 * Contenido modular estructurado en Español (es) e Inglés (en)
 * Prioridades: 1) INFOTEC, 2) MasFast, 3) IA & Chatbots
 */

const portfolioData = {
    es: {
        nav: {
            logo: "Mauricio Juanes",
            experience: "Experiencia",
            projects: "Proyectos",
            awards: "Reconocimientos",
            education: "Educación",
            skills: "Habilidades",
            contact: "Contacto"
        },
        hero: {
            initials: "MJ",
            location: "Zacatecas, México",
            title: "José Mauricio Juanes Martínez",
            typedStrings: [
                "Desarrollador Full-Stack",
                "Frontend & UI/UX Specialist",
                "Arquitecto de Soluciones IA",
                "Fundador & CTO en MasFast"
            ],
            bio: "Ingeniero en Sistemas Computacionales (IPN UPIIZ) y <strong>Desarrollador Full-Stack</strong> con sólida base frontend. Especializado en la construcción de plataformas gubernamentales a gran escala (<strong>INFOTEC</strong>), ecosistemas de logística y delivery reactivos (<strong>MasFast</strong>) y arquitecturas multi-agente con <strong>Inteligencia Artificial</strong>, multimodalidad y control de acceso estricto para protección de tokens.",
            cta: "Hablemos",
            projectsCta: "Ver Proyectos"
        },
        experience: {
            sectionTitle: "Experiencia Profesional",
            items: [
                {
                    id: "infotec",
                    title: "Desarrollador Full-Stack · Frontend UI/UX",
                    company: "INFOTEC",
                    companyType: "Centro de Investigación e Innovación en TIC (Gobierno de México)",
                    period: "2025 — Presente",
                    location: "México (Híbrido)",
                    badge: "1.er Lugar · Escala Nacional",
                    intro: "Diseño y desarrollo frontend/UI/UX para sistemas críticos del Gobierno de México con alto volumen de usuarios e impacto ciudadano:",
                    highlights: [
                        "<strong>PNC (Plataforma Nacional Catastral):</strong> Diseño e implementación de interfaces modernas para la plataforma catastral nacional, con alcance y despliegue en <strong>+900 municipios</strong> y millones de usuarios en producción.",
                        "<strong>RPP (Registro Público de la Propiedad):</strong> Construcción desde cero de la <strong>Bandeja de Trámites del Ciudadano</strong> con búsqueda en tiempo real, filtros dinámicos por estado, tarjetas interactivas y diseño responsivo accesible.",
                        "<strong>Flujos Interactivos de Trámites:</strong> Desarrollo paso a paso de la lógica de selección y gestión dinámica para solicitudes ciudadanas (copias certificadas y certificaciones registrales).",
                        "<strong>Optimización de Motor de PDFs:</strong> Reducción del tiempo de generación y renderizado documental de <strong>8s a 2s (75% de aceleración)</strong>.",
                        "<strong>Figma to Code:</strong> Traslación pixel-perfect de especificaciones de diseño a código HTML5/CSS3 modular y JavaScript (ES6+)."
                    ],
                    tags: ["JavaScript (ES6+)", "UI/UX Figma", "Plataformas de Gobierno", "Optimización PDF", "Java / Jakarta EE", "APIs REST", "Git Flow"],
                    links: []
                },
                {
                    id: "masfast",
                    title: "Fundador, CEO & CTO",
                    company: "MasFast",
                    companyType: "Plataforma de Logística & Delivery",
                    period: "2020 — Presente",
                    location: "Zacatecas, México",
                    badge: "2.º Lugar · Startup & Escalabilidad",
                    intro: "Dirección técnica y arquitectura integral de plataforma de última milla con <strong>+35,000 pedidos completados</strong> y +1,000 descargas activas:",
                    highlights: [
                        "<strong>Arquitectura Backend Reactiva:</strong> Diseño y despliegue del core en <strong>NestJS</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong> y <strong>WebSockets</strong> para tracking satelital GPS en tiempo real de repartidores.",
                        "<strong>Aplicaciones Móviles:</strong> Desarrollo de aplicaciones para clientes y repartidores en <strong>Flutter</strong> para Android e iOS con integración de pasarelas de pago y notificaciones push.",
                        "<strong>Aceleración PotencIA MX (2025–2026):</strong> Startup seleccionada entre las más innovadoras del país para el programa de aceleración impulsado por <strong>Meta y el Tec de Monterrey</strong> con enfoque en IA.",
                        "<strong>Posible México:</strong> Clasificada en el <strong>Top 20 nacional</strong> entre más de 300 proyectos tecnológicos evaluados por Fundación Televisa."
                    ],
                    tags: ["NestJS", "Flutter", "TypeScript", "WebSockets", "Docker", "PostgreSQL", "GPS Tracking"],
                    links: [
                        { label: "Sitio Web", url: "https://masfast.app", icon: "fas fa-globe" },
                        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.talzzoft.masfast", icon: "fab fa-google-play" }
                    ]
                },
                {
                    id: "ai-chatbots",
                    title: "Arquitecto de Soluciones IA & Chatbots Omnicanal",
                    company: "Talzzoft / Proyectos de IA",
                    companyType: "Ecosistemas Autónomos & Multi-Agente",
                    period: "2024 — Presente",
                    location: "Remoto",
                    badge: "3.er Lugar · Inteligencia Artificial",
                    intro: "Diseño y despliegue de agentes inteligentes multimodal con integración omnicanal y blindaje de seguridad:",
                    highlights: [
                        "<strong>Arquitectura Multi-Agente (DDD):</strong> Ecosistema modular en Domain-Driven Design para <strong>WhatsApp</strong> (BuilderBot + Baileys) y <strong>Telegram</strong> (GrammY) con persistencia en PostgreSQL.",
                        "<strong>Orquestación LLM & Voz:</strong> Integración de modelos Llama 3.3 70B vía Groq y Gemini CLI, con transcripción de notas de voz en tiempo real usando <strong>Whisper ASR</strong> y análisis visual.",
                        "<strong>Seguridad & Control de Acceso:</strong> Blindaje mediante <strong>lista blanca dinámica (whitelist)</strong> multi-canal para mitigar abuso de tokens y restringir consumo de cómputo a remitentes autorizados.",
                        "<strong>Autenticación & Integraciones:</strong> Conexión con OAuth 2.0 (TickTick, Google), JWT con Passport y roles en NestJS, y sincronización de herramientas en background."
                    ],
                    tags: ["Multi-Agent AI", "Llama 3.3 & Gemini", "BuilderBot", "GrammY", "Whisper ASR", "Whitelist Security", "OAuth 2.0"],
                    links: [
                        { label: "GitHub Perfil", url: "https://github.com/JMauricioJuanesM", icon: "fab fa-github" }
                    ]
                },
                {
                    id: "talzzoft",
                    title: "Fundador & Desarrollador de Soluciones Web",
                    company: "Talzzoft",
                    companyType: "Desarrollo Web & E-Commerce",
                    period: "2014 — Presente",
                    location: "Zacatecas, México",
                    badge: "Trayectoria",
                    intro: "Consultoría y desarrollo a medida de productos digitales para empresas y comercios:",
                    highlights: [
                        "<strong>E-Commerce & Sitios a Medida:</strong> Creación de plataformas de comercio electrónico, tiendas WordPress/WooCommerce y landing pages de alto rendimiento.",
                        "<strong>Integraciones API REST:</strong> Conexión de pasarelas de pago, servicios de facturación electrónica y herramientas de administración interna.",
                        "<strong>Mantenimiento & Despliegue:</strong> Configuración de servidores Linux (Ubuntu), Nginx, certificados SSL y optimización de velocidad de carga."
                    ],
                    tags: ["JavaScript", "WordPress / WooCommerce", "APIs REST", "PHP", "Nginx", "Linux"],
                    links: []
                }
            ]
        },
        projects: {
            sectionTitle: "Proyectos Destacados",
            items: [
                {
                    title: "RPP — Bandeja de Trámites Ciudadanos",
                    category: "Gobierno / En Producción",
                    description: "Interfaz de usuario construida desde cero para la gestión de trámites en el Registro Público de la Propiedad. Búsqueda en vivo, filtrado dinámico por estado, tarjetas interactivas y emisión acelerada de documentos.",
                    tags: ["HTML5 / CSS3", "JavaScript (ES6+)", "Fetch API", "UI/UX", "Optimización PDF"]
                },
                {
                    title: "PNC — Plataforma Nacional Catastral",
                    category: "Escala Nacional",
                    description: "Diseño CSS, estilos modulares y componentes de UI en producción para una de las plataformas catastrales gubernamentales más grandes del país, sirviendo a más de 900 municipios.",
                    tags: ["CSS3 Modular", "UI/UX", "Figma to Code", "Responsive Design"]
                },
                {
                    title: "MasFast — Plataforma & App de Delivery",
                    category: "Logística & Escalabilidad",
                    description: "Ecosistema integral de última milla con +35,000 entregas. Backend en NestJS con WebSockets para tracking satelital en tiempo real, base de datos PostgreSQL y app móvil en Flutter.",
                    tags: ["NestJS", "Flutter", "TypeScript", "WebSockets", "Docker", "PostgreSQL"],
                    links: [
                        { label: "Sitio Web", url: "https://masfast.app", icon: "fas fa-globe" },
                        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.masfast", icon: "fab fa-google-play" }
                    ]
                },
                {
                    title: "RestaBot & Asistente IA Omnicanal",
                    category: "Inteligencia Artificial",
                    description: "Ecosistema conversacional multi-agente con transcripción Whisper ASR de notas de voz, autorización de acceso estricta por lista blanca de tokens, integración con Telegram y WhatsApp.",
                    tags: ["Node.js", "Llama 3.3", "Whisper ASR", "BuilderBot", "GrammY", "Seguridad Tokens"]
                },
                {
                    title: "ReflejArte — App & Tienda Online",
                    category: "E-Commerce & Titulación",
                    description: "Tienda digital de obras de arte con backend WordPress/WooCommerce y sincronización bidireccional vía REST API con app móvil en Flutter publicada en Google Play Store (Proyecto de titulación IPN).",
                    tags: ["WordPress", "WooCommerce", "Flutter", "REST API", "PHP"],
                    links: [
                        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.reflejarte", icon: "fab fa-google-play" }
                    ]
                }
            ]
        },
        awards: {
            sectionTitle: "Reconocimientos & Aceleración",
            items: [
                {
                    title: "PotencIA MX (2025–2026)",
                    entity: "Meta & Tecnológico de Monterrey",
                    description: "Startup seleccionada entre las más innovadoras del país para el programa de aceleración de Inteligencia Artificial impulsado por Meta y el Tec de Monterrey.",
                    icon: "fas fa-award"
                },
                {
                    title: "Top 20 Posible México (2022)",
                    entity: "Fundación Televisa",
                    description: "Seleccionado en el Top 20 nacional entre más de 300 proyectos de emprendimiento tecnológico y logística evaluados en México.",
                    icon: "fas fa-medal"
                },
                {
                    title: "2.º Lugar — InnovaHack (2019)",
                    entity: "COZCyT & InnovaHack",
                    description: "Segundo lugar en hackathon estatal de innovación tecnológica y desarrollo acelerado de soluciones de software.",
                    icon: "fas fa-trophy"
                },
                {
                    title: "Top 11 Hackathon Campus Party (2017)",
                    entity: "Campus Party México",
                    description: "Finalista en el hackathon tecnológico más grande de México mediante desarrollo de soluciones de software en tiempo récord.",
                    icon: "fas fa-star"
                }
            ]
        },
        education: {
            sectionTitle: "Educación & Formación",
            items: [
                {
                    title: "Ingeniería en Sistemas Computacionales",
                    school: "Instituto Politécnico Nacional (IPN) — UPIIZ",
                    period: "2019 — 2026 (Titulación en trámite)",
                    description: "Formación de alto nivel en ciencias de la computación, desarrollo de software empresarial, arquitectura de sistemas y gestión de proyectos tecnológicos en una de las instituciones líderes del país.",
                    tag: "IPN UPIIZ"
                },
                {
                    title: "Formación de Idiomas — Inglés B1/B2",
                    school: "Centro de Idiomas UAZ",
                    period: "Certificación Continua",
                    description: "Nivel B1 consolidado en camino a acreditación B2. Comunicación técnica fluida para lectura de documentación, redacción y colaboración en equipos multidisciplinarios e internacionales.",
                    tag: "Inglés B1 / B2"
                },
                {
                    title: "Bachillerato Técnico en Soporte y Mantenimiento",
                    school: "CECYTEZ",
                    period: "2014 — 2017",
                    description: "Bases sólidas en infraestructura de hardware, redes de datos, mantenimiento preventivo/correctivo y administración de sistemas operativos.",
                    tag: "CECYTEZ"
                }
            ]
        },
        skills: {
            sectionTitle: "Stack Tecnológico",
            categories: [
                {
                    name: "Frontend & UI/UX",
                    icon: "fas fa-laptop-code",
                    skills: [
                        "JavaScript (ES6+) & TypeScript",
                        "HTML5 Semántico & CSS3 Modular",
                        "Figma to Code (Pixel-Perfect UI)",
                        "React & Responsive Web Design",
                        "Flutter para Android e iOS"
                    ]
                },
                {
                    name: "Backend & Arquitectura",
                    icon: "fas fa-server",
                    skills: [
                        "Node.js & NestJS",
                        "Java 17 & Jakarta EE",
                        "PHP & WordPress REST API",
                        "WebSockets & RESTful APIs",
                        "Domain-Driven Design (DDD)"
                    ]
                },
                {
                    name: "Inteligencia Artificial & Bots",
                    icon: "fas fa-robot",
                    skills: [
                        "Multi-Agent AI Architecture",
                        "LLM Integration (Llama 3.3, Gemini)",
                        "BuilderBot (WhatsApp) & GrammY (Telegram)",
                        "Whisper ASR (Voz a Texto)",
                        "Whitelist Security & Token Protection"
                    ]
                },
                {
                    name: "Bases de Datos & DevOps",
                    icon: "fas fa-database",
                    skills: [
                        "PostgreSQL & MySQL",
                        "Docker & Docker-Compose",
                        "Nginx Reverse Proxy & SSL",
                        "Git & Git Flow / GitHub Actions",
                        "Administración Linux (Ubuntu Server)"
                    ]
                }
            ]
        },
        contact: {
            sectionTitle: "Contacto",
            description: "¿Tienes un proyecto en mente, buscas un perfil full-stack para tu equipo o te interesa colaborar en soluciones de software e IA? Escríbeme y conectemos.",
            buttonText: "Enviar Correo Electrónico",
            footerText: `&copy; ${new Date().getFullYear()} José Mauricio Juanes Martínez — Diseñado con elegancia, modularidad y alto rendimiento.`
        }
    },
    en: {
        nav: {
            logo: "Mauricio Juanes",
            experience: "Experience",
            projects: "Projects",
            awards: "Awards",
            education: "Education",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            initials: "MJ",
            location: "Zacatecas, Mexico",
            title: "José Mauricio Juanes Martínez",
            typedStrings: [
                "Full-Stack Developer",
                "Frontend & UI/UX Specialist",
                "AI Solutions Architect",
                "Founder & CTO at MasFast"
            ],
            bio: "Computer Systems Engineer (IPN UPIIZ) and <strong>Full-Stack Developer</strong> with solid frontend expertise. Specialized in building mission-critical public sector platforms (<strong>INFOTEC</strong>), scalable reactive logistics ecosystems (<strong>MasFast</strong>), and multi-agent <strong>Artificial Intelligence</strong> architectures with multimodal support and token authorization security.",
            cta: "Let's Talk",
            projectsCta: "View Projects"
        },
        experience: {
            sectionTitle: "Professional Experience",
            items: [
                {
                    id: "infotec",
                    title: "Full-Stack & Frontend UI/UX Developer",
                    company: "INFOTEC",
                    companyType: "National ICT Research & Innovation Center (Gov of Mexico)",
                    period: "2025 — Present",
                    location: "Mexico (Hybrid)",
                    badge: "Top Priority · Nationwide Scale",
                    intro: "Frontend and UI/UX engineering for high-impact mission-critical platforms in Mexico's public sector:",
                    highlights: [
                        "<strong>PNC (National Cadastral Platform):</strong> UI/UX design and production implementation for nationwide cadastral management across <strong>+900 municipalities</strong> and millions of citizens.",
                        "<strong>RPP (Citizen Procedures Portal):</strong> Built the citizen procedure dashboard from scratch with real-time search, dynamic status filtering, interactive cards, and accessible responsive design.",
                        "<strong>Interactive Citizen Workflows:</strong> Developed end-to-end multi-step dynamic flows for certified document and property registry requests.",
                        "<strong>PDF Engine Optimization:</strong> Accelerated document rendering and generation pipeline from <strong>8s down to 2s (75% performance boost)</strong>.",
                        "<strong>Figma to Code:</strong> Pixel-perfect translation from Figma specifications to accessible, modular HTML5/CSS3 and modern JavaScript."
                    ],
                    tags: ["JavaScript (ES6+)", "UI/UX Figma", "Government Platforms", "PDF Optimization", "Java / Jakarta EE", "REST APIs", "Git Flow"],
                    links: []
                },
                {
                    id: "masfast",
                    title: "Founder, CEO & CTO",
                    company: "MasFast",
                    companyType: "Logistics & Delivery Platform",
                    period: "2020 — Present",
                    location: "Zacatecas, Mexico",
                    badge: "Startup & High Scalability",
                    intro: "Technical leadership and full-stack architecture for a last-mile logistics startup with <strong>+35,000 completed orders</strong> and 1,000+ active downloads:",
                    highlights: [
                        "<strong>Reactive Backend Architecture:</strong> Designed core backend with <strong>NestJS</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, and <strong>WebSockets</strong> for real-time GPS tracking of drivers.",
                        "<strong>Cross-Platform Mobile Apps:</strong> Built consumer and driver applications in <strong>Flutter</strong> with payment gateway and push notification integrations.",
                        "<strong>PotencIA MX Accelerator (2025–2026):</strong> Selected for the prestigious AI acceleration program organized by <strong>Meta and Tecnológico de Monterrey</strong>.",
                        "<strong>Posible Mexico:</strong> Ranked in the <strong>Top 20 nationwide</strong> out of 300+ technology and logistics ventures."
                    ],
                    tags: ["NestJS", "Flutter", "TypeScript", "WebSockets", "Docker", "PostgreSQL", "GPS Tracking"],
                    links: [
                        { label: "Website", url: "https://masfast.app", icon: "fas fa-globe" },
                        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.talzzoft.masfast", icon: "fab fa-google-play" }
                    ]
                },
                {
                    id: "ai-chatbots",
                    title: "AI Solutions Architect & Omnichannel Chatbots",
                    company: "Talzzoft / AI Projects",
                    companyType: "Autonomous Multi-Agent Ecosystems",
                    period: "2024 — Present",
                    location: "Remote",
                    badge: "Artificial Intelligence",
                    intro: "Architecture and deployment of intelligent multimodal agents with token security and omnichannel integrations:",
                    highlights: [
                        "<strong>Multi-Agent Architecture (DDD):</strong> Domain-Driven Design modular agents for <strong>WhatsApp</strong> (BuilderBot + Baileys) and <strong>Telegram</strong> (GrammY) with PostgreSQL state persistence.",
                        "<strong>LLM & Voice Orchestration:</strong> Llama 3.3 70B via Groq and Gemini CLI integrations, real-time voice-to-text with <strong>Whisper ASR</strong>, and computer vision pipelines.",
                        "<strong>Security & Access Control:</strong> Strict <strong>dynamic whitelist system</strong> across channels preventing token abuse and unauthorized compute consumption.",
                        "<strong>Authentication & Background Jobs:</strong> OAuth 2.0 integrations (TickTick, Google), JWT roles in NestJS, and persistent background job workers."
                    ],
                    tags: ["Multi-Agent AI", "Llama 3.3 & Gemini", "BuilderBot", "GrammY", "Whisper ASR", "Whitelist Security", "OAuth 2.0"],
                    links: [
                        { label: "GitHub Profile", url: "https://github.com/JMauricioJuanesM", icon: "fab fa-github" }
                    ]
                },
                {
                    id: "talzzoft",
                    title: "Founder & Web Solutions Developer",
                    company: "Talzzoft",
                    companyType: "Custom Web & E-Commerce",
                    period: "2014 — Present",
                    location: "Zacatecas, Mexico",
                    badge: "Track Record",
                    intro: "Custom software engineering and digital products for businesses and merchants:",
                    highlights: [
                        "<strong>E-Commerce & Custom Web:</strong> High-performance e-commerce stores, custom WordPress/WooCommerce solutions, and performant web apps.",
                        "<strong>REST API Integrations:</strong> Payment gateway integrations, electronic invoicing, and internal management tooling.",
                        "<strong>DevOps & Server Admin:</strong> Ubuntu Linux server configuration, Nginx reverse proxies, SSL certificates, and speed optimization."
                    ],
                    tags: ["JavaScript", "WordPress / WooCommerce", "REST APIs", "PHP", "Nginx", "Linux"],
                    links: []
                }
            ]
        },
        projects: {
            sectionTitle: "Featured Projects",
            items: [
                {
                    title: "RPP — Citizen Procedures Dashboard",
                    category: "Government / In Production",
                    description: "Built-from-scratch user interface for citizen property procedures in the Public Property Registry. Real-time search, dynamic state filters, interactive cards, and accelerated PDF delivery.",
                    tags: ["HTML5 / CSS3", "JavaScript (ES6+)", "Fetch API", "UI/UX", "PDF Engine"]
                },
                {
                    title: "PNC — National Cadastral Platform",
                    category: "Nationwide Scale",
                    description: "Modular CSS design, UI components, and final styling in production for Mexico's largest public cadastral system, serving 900+ municipalities.",
                    tags: ["Modular CSS3", "UI/UX", "Figma to Code", "Responsive Design"]
                },
                {
                    title: "MasFast — Platform & Delivery App",
                    category: "Logistics & High Scale",
                    description: "Complete last-mile ecosystem with 35,000+ deliveries. NestJS backend with WebSockets for real-time GPS tracking, PostgreSQL database, and Flutter mobile apps.",
                    tags: ["NestJS", "Flutter", "TypeScript", "WebSockets", "Docker", "PostgreSQL"],
                    links: [
                        { label: "Website", url: "https://masfast.app", icon: "fas fa-globe" },
                        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.masfast", icon: "fab fa-google-play" }
                    ]
                },
                {
                    title: "RestaBot & Omnichannel AI Assistant",
                    category: "Artificial Intelligence",
                    description: "Multi-agent conversational ecosystem with Whisper ASR voice transcription, strict token security via dynamic whitelist, and Telegram/WhatsApp integration.",
                    tags: ["Node.js", "Llama 3.3", "Whisper ASR", "BuilderBot", "GrammY", "Token Security"]
                },
                {
                    title: "ReflejArte — App & Online Gallery",
                    category: "E-Commerce & Graduation Project",
                    description: "Digital art gallery powered by WordPress/WooCommerce backend and two-way REST API synchronization with a Flutter mobile app on Google Play Store (IPN thesis project).",
                    tags: ["WordPress", "WooCommerce", "Flutter", "REST API", "PHP"],
                    links: [
                        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.reflejarte", icon: "fab fa-google-play" }
                    ]
                }
            ]
        },
        awards: {
            sectionTitle: "Awards & Recognitions",
            items: [
                {
                    title: "PotencIA MX (2025–2026)",
                    entity: "Meta & Tecnológico de Monterrey",
                    description: "Selected among the top innovative AI startups in Mexico for the accelerator program led by Meta and Tec de Monterrey.",
                    icon: "fas fa-award"
                },
                {
                    title: "Top 20 Posible Mexico (2022)",
                    entity: "Fundación Televisa",
                    description: "Ranked in the national Top 20 out of 300+ technology and entrepreneurship ventures evaluated in Mexico.",
                    icon: "fas fa-medal"
                },
                {
                    title: "2nd Place — InnovaHack (2019)",
                    entity: "COZCyT & InnovaHack",
                    description: "Awarded 2nd place in the state tech innovation hackathon for rapid software prototype engineering.",
                    icon: "fas fa-trophy"
                },
                {
                    title: "Top 11 Hackathon Campus Party (2017)",
                    entity: "Campus Party Mexico",
                    description: "Finalist in Mexico's largest technology hackathon delivering working software solutions under tight deadlines.",
                    icon: "fas fa-star"
                }
            ]
        },
        education: {
            sectionTitle: "Education & Certifications",
            items: [
                {
                    title: "B.S. in Computer Systems Engineering",
                    school: "Instituto Politécnico Nacional (IPN) — UPIIZ",
                    period: "2019 — 2026 (Degree in process)",
                    description: "Advanced education in computer science, enterprise software development, system architecture, and tech project management at one of Latin America's premier institutes.",
                    tag: "IPN UPIIZ"
                },
                {
                    title: "Language Training — English B1/B2",
                    school: "UAZ Language Center",
                    period: "Continuous Certification",
                    description: "Solid B1 proficiency transitioning to B2 certification. Fluent technical communication for documentation, architecture, and international collaboration.",
                    tag: "English B1 / B2"
                },
                {
                    title: "Technical High School — IT Support & Systems",
                    school: "CECYTEZ",
                    period: "2014 — 2017",
                    description: "Strong fundamentals in hardware infrastructure, network engineering, preventive maintenance, and Linux/Windows systems administration.",
                    tag: "CECYTEZ"
                }
            ]
        },
        skills: {
            sectionTitle: "Technology Stack",
            categories: [
                {
                    name: "Frontend & UI/UX",
                    icon: "fas fa-laptop-code",
                    skills: [
                        "JavaScript (ES6+) & TypeScript",
                        "Semantic HTML5 & Modular CSS3",
                        "Figma to Code (Pixel-Perfect UI)",
                        "React & Responsive Web Design",
                        "Flutter for Android & iOS"
                    ]
                },
                {
                    name: "Backend & Architecture",
                    icon: "fas fa-server",
                    skills: [
                        "Node.js & NestJS",
                        "Java 17 & Jakarta EE",
                        "PHP & WordPress REST API",
                        "WebSockets & RESTful APIs",
                        "Domain-Driven Design (DDD)"
                    ]
                },
                {
                    name: "Artificial Intelligence & Bots",
                    icon: "fas fa-robot",
                    skills: [
                        "Multi-Agent AI Architecture",
                        "LLM Integration (Llama 3.3, Gemini)",
                        "BuilderBot (WhatsApp) & GrammY (Telegram)",
                        "Whisper ASR (Speech-to-Text)",
                        "Whitelist Security & Token Protection"
                    ]
                },
                {
                    name: "Databases & DevOps",
                    icon: "fas fa-database",
                    skills: [
                        "PostgreSQL & MySQL",
                        "Docker & Docker-Compose",
                        "Nginx Reverse Proxy & SSL",
                        "Git & Git Flow / GitHub Actions",
                        "Linux Server Admin (Ubuntu)"
                    ]
                }
            ]
        },
        contact: {
            sectionTitle: "Contact",
            description: "Have a project in mind, looking for a full-stack engineer for your team, or interested in collaborating on software & AI? Let's connect.",
            buttonText: "Send Email",
            footerText: `&copy; ${new Date().getFullYear()} José Mauricio Juanes Martínez — Built with precision, modularity, and high performance.`
        }
    }
};
