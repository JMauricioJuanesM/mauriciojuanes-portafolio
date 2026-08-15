/**
 * Portafolio Mauricio Juanes - Módulo de Datos y Traducciones
 * Contenido modular estructurado en Español (es) e Inglés (en)
 */

const portfolioData = {
    es: {
        nav: {
            experience: "Experiencia",
            projects: "Proyectos",
            education: "Educación",
            awards: "Reconocimientos",
            skills: "Habilidades",
            contact: "Contacto"
        },
        hero: {
            title: "Mauricio Juanes",
            typedStrings: [
                "Desarrollador Full-Stack",
                "Frontend & UI/UX",
                "Arquitecto de Soluciones IA",
                "Fundador & CTO de MasFast"
            ],
            bio: "Ingeniero en Sistemas Computacionales (IPN UPIIZ) y <strong>Desarrollador Full-Stack</strong> con más de 5 años de experiencia. Especializado en construcción de plataformas gubernamentales de alto impacto (<strong>INFOTEC</strong>), arquitecturas escalables y reactivas (<strong>MasFast</strong>) y ecosistemas multi-agente con <strong>Inteligencia Artificial</strong> y seguridad de tokens.",
            cta: "Hablemos",
            cvButton: "Ver CV / Perfil"
        },
        experience: {
            sectionTitle: "Experiencia Profesional",
            items: [
                {
                    id: "infotec",
                    title: "Desarrollador Full-Stack & Frontend UI/UX",
                    company: "INFOTEC",
                    period: "Mayo 2025 — Presente",
                    location: "México (Híbrido)",
                    description: "Desarrollo de software en el Centro de Investigación e Innovación en TIC del Gobierno de México. Diseño y construcción de interfaces críticas para plataformas a gran escala como la <strong>Plataforma Nacional Catastral (PNC)</strong> para más de 900 municipios y la <strong>Bandeja de Trámites del Registro Público de la Propiedad (RPP)</strong>. Optimización integral del motor de generación de reportes y documentos PDF con una aceleración del <strong>75%</strong> en tiempos de respuesta, integración ágil de APIs REST y traslación precisa de diseño Figma a código de producción accesible y responsivo.",
                    tags: ["JavaScript (ES6+)", "UI/UX Figma", "Plataformas de Gobierno", "Optimización PDF", "Java / Jakarta EE", "APIs REST", "Git Flow"],
                    imageText: "INFOTEC",
                    badge: "1.er Lugar de Prioridad"
                },
                {
                    id: "masfast",
                    title: "Fundador, CEO & CTO",
                    company: "MasFast",
                    period: "Abril 2020 — Presente",
                    location: "Zacatecas, México",
                    description: "Liderazgo técnico y dirección general de la plataforma de logística y delivery de última milla. Diseño e implementación de la arquitectura full-stack reactiva con <strong>NestJS</strong>, <strong>Docker</strong>, <strong>PostgreSQL</strong> y <strong>WebSockets</strong> para rastreo satelital GPS en tiempo real. Desarrollo de la app móvil para usuarios y repartidores en <strong>Flutter</strong> (+1,000 descargas y +35,000 entregas completadas). Startup seleccionada para el programa de aceleración <strong>PotencIA MX</strong> (Meta + Tecnológico de Monterrey) y Top 20 nacional en <strong>Posible México</strong>.",
                    tags: ["NestJS", "Flutter", "TypeScript", "WebSockets", "Docker", "PostgreSQL", "GPS Tracking"],
                    imageText: "MasFast",
                    links: [
                        { label: "Sitio Web", url: "https://masfast.app", icon: "fas fa-globe" },
                        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.masfast", icon: "fab fa-google-play" }
                    ]
                },
                {
                    id: "ai-chatbots",
                    title: "Arquitecto de Soluciones IA & Chatbots Omnicanal",
                    company: "Talzzoft / Proyectos de IA",
                    period: "2024 — Presente",
                    location: "Remoto",
                    description: "Diseño y despliegue de ecosistemas conversacionales multi-agente basados en <strong>Domain-Driven Design (DDD)</strong> para WhatsApp (BuilderBot + Baileys) y Telegram (GrammY). Integración de modelos LLM (Llama 3.3 70B vía Groq, Gemini CLI), notas de voz con transcripción automática vía <strong>Whisper ASR</strong> y visión computacional. Implementación de control de acceso estricto mediante <strong>lista blanca dinámica (whitelist)</strong> multi-canal para protección contra ataques y mitigación de abuso de tokens.",
                    tags: ["Multi-Agent AI", "Llama 3.3 & Gemini", "BuilderBot", "GrammY", "Whisper ASR", "Whitelist Security", "DDD"],
                    imageText: "IA & Bots",
                    links: [
                        { label: "GitHub Perfil", url: "https://github.com/JMauricioJuanesM", icon: "fab fa-github" }
                    ]
                }
            ]
        },
        projects: {
            sectionTitle: "Proyectos Destacados",
            items: [
                {
                    title: "PNC & RPP — Plataformas Nacionales",
                    subtitle: "INFOTEC",
                    description: "Sistemas gubernamentales de gestión catastral y registral con alcance para +900 municipios. Implementación de bandejas de trámites ciudadanos, alta fidelidad en UI/UX y optimización del motor de generación documental.",
                    tags: ["Frontend", "UI/UX", "APIs REST", "Jakarta EE", "Optimización PDF"],
                    imageText: "PNC & RPP"
                },
                {
                    title: "MasFast Platform & Apps",
                    subtitle: "Logística y Delivery",
                    description: "Ecosistema completo de última milla con backend en NestJS, tracking GPS en vivo con WebSockets, pasarelas de pago y aplicaciones móviles multiplataforma en Flutter.",
                    tags: ["NestJS", "Flutter", "WebSockets", "Docker", "PostgreSQL"],
                    imageText: "MasFast App",
                    links: [
                        { label: "Ver en Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.masfast", icon: "fab fa-google-play" }
                    ]
                },
                {
                    title: "Asistente IA Omnicanal & RestaBot",
                    subtitle: "Multi-Agente & Automatización",
                    description: "Sistema inteligente con reconocimiento de audio, ejecución segura de tareas, autorización por lista blanca dinámica y orquestación multimodal para empresas y atención ciudadana.",
                    tags: ["Node.js", "Llama 3.3", "Whisper", "BuilderBot", "GrammY", "Seguridad Tokens"],
                    imageText: "RestaBot AI"
                },
                {
                    title: "ReflejArte — E-commerce & Mobile",
                    subtitle: "Proyecto de Titulación",
                    description: "Tienda online de artes plásticas con backend WordPress/WooCommerce y sincronización bidireccional vía REST API con app móvil en Flutter.",
                    tags: ["WordPress", "WooCommerce", "Flutter", "REST API", "PHP"],
                    imageText: "ReflejArte",
                    links: [
                        { label: "Ver en Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.reflejarte", icon: "fab fa-google-play" }
                    ]
                }
            ]
        },
        awards: {
            sectionTitle: "Reconocimientos & Aceleración",
            items: [
                {
                    title: "Aceleradora PotencIA MX (2025–2026)",
                    entity: "Meta & Tecnológico de Monterrey",
                    description: "Seleccionado entre las startups tecnológicas más innovadoras de México para el programa de aceleración impulsado por Meta y el Tec de Monterrey con enfoque en Inteligencia Artificial."
                },
                {
                    title: "Top 20 Posible México (2022)",
                    entity: "Fundación Televisa",
                    description: "Reconocimiento a MasFast como uno de los 20 mejores proyectos de emprendimiento tecnológico y logística de alto impacto en el país."
                },
                {
                    title: "2.º Lugar Nacional InnovaHack (2019)",
                    entity: "InnovaHack",
                    description: "Segundo lugar en competencia nacional de desarrollo tecnológico, prototipado acelerado y resolución de retos de ingeniería."
                },
                {
                    title: "Top 11 Hackathon Campus Party (2017)",
                    entity: "Campus Party México",
                    description: "Finalista en el hackathon tecnológico más grande de México mediante desarrollo de soluciones de software en tiempo récord."
                }
            ]
        },
        education: {
            sectionTitle: "Educación",
            items: [
                {
                    title: "Ingeniería en Sistemas Computacionales",
                    school: "Instituto Politécnico Nacional (IPN) — UPIIZ",
                    period: "2019 — 2026 (Titulación en trámite)",
                    description: "Formación de excelencia en ciencias de la computación, desarrollo de software empresarial, arquitectura de sistemas y gestión de proyectos tecnológicos en una de las instituciones líderes de Latinoamérica.",
                    imageText: "IPN UPIIZ"
                },
                {
                    title: "Bachillerato Técnico en Soporte y Mantenimiento",
                    school: "CECYTEZ",
                    period: "2014 — 2017",
                    description: "Bases sólidas en infraestructura física y lógica, redes de datos, mantenimiento preventivo/correctivo y administración de sistemas operativos.",
                    imageText: "CECYTEZ"
                },
                {
                    title: "Formación de Idiomas — Inglés B1/B2",
                    school: "Centro de Idiomas UAZ",
                    period: "Certificación continua",
                    description: "Nivel B1 consolidado en camino a acreditación B2. Comunicación técnica fluida para lectura de documentación, redacción y colaboración en equipos internacionales.",
                    imageText: "Inglés B1/B2"
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
                        "React & Responsive Design",
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
                        "Administración de Servidores Linux (Ubuntu)"
                    ]
                }
            ]
        },
        contact: {
            sectionTitle: "Contacto",
            description: "¿Tienes un proyecto en mente, buscas un perfil full-stack para tu equipo o te interesa colaborar en soluciones de software e IA? Escríbeme y conectemos.",
            buttonText: "Enviar Correo Electrónico",
            footerText: `&copy; ${new Date().getFullYear()} Mauricio Juanes — Diseñado y construido de forma modular. Código limpio y alto rendimiento.`
        }
    },
    en: {
        nav: {
            experience: "Experience",
            projects: "Projects",
            education: "Education",
            awards: "Awards",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            title: "Mauricio Juanes",
            typedStrings: [
                "Full-Stack Developer",
                "Frontend & UI/UX",
                "AI Solutions Architect",
                "Founder & CTO at MasFast"
            ],
            bio: "Computer Systems Engineer (IPN UPIIZ) and <strong>Full-Stack Developer</strong> with 5+ years of experience. Specialized in building high-impact public sector platforms (<strong>INFOTEC</strong>), scalable reactive architectures (<strong>MasFast</strong>), and multi-agent <strong>Artificial Intelligence</strong> ecosystems with token authorization.",
            cta: "Let's Talk",
            cvButton: "View CV / Profile"
        },
        experience: {
            sectionTitle: "Professional Experience",
            items: [
                {
                    id: "infotec",
                    title: "Full-Stack & Frontend UI/UX Developer",
                    company: "INFOTEC",
                    period: "May 2025 — Present",
                    location: "Mexico (Hybrid)",
                    description: "Software engineering at Mexico's National ICT Research and Innovation Center. Designing and building critical web interfaces for nationwide enterprise systems, including the <strong>National Cadastral Platform (PNC)</strong> for 900+ municipalities and the <strong>Citizen Procedures Portal for Property Registry (RPP)</strong>. Engineered an end-to-end report and PDF generation optimization resulting in a <strong>75% performance boost</strong>, agile REST API integration, and pixel-perfect translation from Figma prototypes to accessible, responsive production code.",
                    tags: ["JavaScript (ES6+)", "UI/UX Figma", "Government Platforms", "PDF Engine Optimization", "Java / Jakarta EE", "REST APIs", "Git Flow"],
                    imageText: "INFOTEC",
                    badge: "Top Priority"
                },
                {
                    id: "masfast",
                    title: "Founder, CEO & CTO",
                    company: "MasFast",
                    period: "April 2020 — Present",
                    location: "Zacatecas, Mexico",
                    description: "Technical leadership and executive management of last-mile logistics and food delivery platform. Architected the full-stack reactive ecosystem utilizing <strong>NestJS</strong>, <strong>Docker</strong>, <strong>PostgreSQL</strong>, and <strong>WebSockets</strong> for real-time GPS fleet tracking. Developed cross-platform mobile apps in <strong>Flutter</strong> (+1,000 downloads and +35,000 completed orders). Selected for the <strong>PotencIA MX</strong> accelerator by Meta & Tec de Monterrey, and recognized in the national Top 20 of <strong>Posible Mexico</strong>.",
                    tags: ["NestJS", "Flutter", "TypeScript", "WebSockets", "Docker", "PostgreSQL", "GPS Tracking"],
                    imageText: "MasFast",
                    links: [
                        { label: "Website", url: "https://masfast.app", icon: "fas fa-globe" },
                        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.masfast", icon: "fab fa-google-play" }
                    ]
                },
                {
                    id: "ai-chatbots",
                    title: "AI Solutions Architect & Omnichannel Chatbots",
                    company: "Talzzoft / AI Projects",
                    period: "2024 — Present",
                    location: "Remote",
                    description: "Architected multi-agent conversational ecosystems structured on <strong>Domain-Driven Design (DDD)</strong> for WhatsApp (BuilderBot + Baileys) and Telegram (GrammY). Integrated cutting-edge LLMs (Llama 3.3 70B via Groq, Gemini CLI), voice notes transcription with <strong>Whisper ASR</strong>, and computer vision. Engineered dynamic multi-channel <strong>whitelist access control</strong> to prevent prompt injection and mitigate token abuse.",
                    tags: ["Multi-Agent AI", "Llama 3.3 & Gemini", "BuilderBot", "GrammY", "Whisper ASR", "Whitelist Security", "DDD"],
                    imageText: "AI & Bots",
                    links: [
                        { label: "GitHub Profile", url: "https://github.com/JMauricioJuanesM", icon: "fab fa-github" }
                    ]
                }
            ]
        },
        projects: {
            sectionTitle: "Featured Projects",
            items: [
                {
                    title: "PNC & RPP — Nationwide Government Platforms",
                    subtitle: "INFOTEC",
                    description: "High-scale cadastral and registry platforms covering 900+ municipalities. Designed user-friendly procedure management, fast PDF engines, and robust REST communication.",
                    tags: ["Frontend", "UI/UX", "REST APIs", "Jakarta EE", "PDF Engine"],
                    imageText: "PNC & RPP"
                },
                {
                    title: "MasFast Platform & Mobile Apps",
                    subtitle: "Logistics & Food Delivery",
                    description: "Complete last-mile ecosystem with NestJS backend, real-time WebSockets GPS tracking, payment gateways, and Flutter mobile apps.",
                    tags: ["NestJS", "Flutter", "WebSockets", "Docker", "PostgreSQL"],
                    imageText: "MasFast App",
                    links: [
                        { label: "View on Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.masfast", icon: "fab fa-google-play" }
                    ]
                },
                {
                    title: "Omnichannel AI Assistant & RestaBot",
                    subtitle: "Multi-Agent Automation",
                    description: "Intelligent assistant with voice note processing, dynamic whitelist token security, and autonomous tool workflows for Telegram and WhatsApp.",
                    tags: ["Node.js", "Llama 3.3", "Whisper", "BuilderBot", "GrammY", "Token Security"],
                    imageText: "RestaBot AI"
                },
                {
                    title: "ReflejArte — E-commerce & Mobile App",
                    subtitle: "B.S. Thesis Project",
                    description: "Fine arts store with WordPress & WooCommerce backend, custom REST API integration, and companion Flutter mobile application.",
                    tags: ["WordPress", "WooCommerce", "Flutter", "REST API", "PHP"],
                    imageText: "ReflejArte",
                    links: [
                        { label: "View on Play Store", url: "https://play.google.com/store/apps/details?id=com.talzzoft.reflejarte", icon: "fab fa-google-play" }
                    ]
                }
            ]
        },
        awards: {
            sectionTitle: "Awards & Accelerators",
            items: [
                {
                    title: "PotencIA MX Accelerator (2025–2026)",
                    entity: "Meta & Tecnológico de Monterrey",
                    description: "Selected among the top tech startups in Mexico for the intensive AI accelerator program driven by Meta and Tec de Monterrey."
                },
                {
                    title: "Top 20 Posible Mexico (2022)",
                    entity: "Fundación Televisa",
                    description: "Recognized as one of the 20 most promising high-impact entrepreneurship and logistics tech initiatives across the country."
                },
                {
                    title: "2nd Place InnovaHack (2019)",
                    entity: "InnovaHack",
                    description: "Silver medal in national tech hackathon, rapid prototyping, and engineering challenges."
                },
                {
                    title: "Top 11 Campus Party Hackathon (2017)",
                    entity: "Campus Party Mexico",
                    description: "Finalist in Mexico's largest technology hackathon delivering software solutions under tight deadlines."
                }
            ]
        },
        education: {
            sectionTitle: "Education",
            items: [
                {
                    title: "B.S. in Computer Systems Engineering",
                    school: "National Polytechnic Institute (IPN) — UPIIZ",
                    period: "2019 — 2026 (Degree in progress)",
                    description: "Comprehensive education in computer science, enterprise software development, system architecture, and tech leadership at one of Latin America's top engineering universities.",
                    imageText: "IPN UPIIZ"
                },
                {
                    title: "Technical Degree in IT Support and Maintenance",
                    school: "CECYTEZ",
                    period: "2014 — 2017",
                    description: "Solid foundations in computer architecture, network infrastructure, hardware maintenance, and operating system management.",
                    imageText: "CECYTEZ"
                },
                {
                    title: "Language Studies — English B1/B2",
                    school: "UAZ Language Center",
                    period: "Continuous Certification",
                    description: "Certified B1 in active transition to B2. Fluent technical communication for documentation, software architecture, and international team collaboration.",
                    imageText: "English B1/B2"
                }
            ]
        },
        skills: {
            sectionTitle: "Tech Stack",
            categories: [
                {
                    name: "Frontend & UI/UX",
                    icon: "fas fa-laptop-code",
                    skills: [
                        "JavaScript (ES6+) & TypeScript",
                        "Semantic HTML5 & Modular CSS3",
                        "Figma to Code (Pixel-Perfect UI)",
                        "React & Responsive Design",
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
                        "Whisper ASR (Voice-to-Text)",
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
                        "Linux Server Administration (Ubuntu)"
                    ]
                }
            ]
        },
        contact: {
            sectionTitle: "Contact",
            description: "Have a project in mind, looking for a strong full-stack engineer, or interested in AI solutions? Let's connect.",
            buttonText: "Send me an Email",
            footerText: `&copy; ${new Date().getFullYear()} Mauricio Juanes — Designed and built modularly. Clean code and high performance.`
        }
    }
};

// Exportar para entorno navegador o Node si se requiere
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
