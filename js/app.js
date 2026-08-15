/**
 * Portafolio Mauricio Juanes — Lógica de Aplicación
 * Manejo de estado, renderizado modular, efectos visuales de partículas,
 * scroll reveal, internacionalización y cambio de temas.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Selectores Principales ---
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    const navbar = document.getElementById('navbar');
    const typedTextSpan = document.getElementById('typed');
    const canvas = document.getElementById('bg-canvas');

    // --- Estado de la Aplicación ---
    let currentLang = localStorage.getItem('portfolio_lang') || 'es';
    let typingTimer = null;
    let erasingTimer = null;
    let textArray = [];
    let textArrayIndex = 0;
    let charIndex = 0;
    const typingDelay = 85;
    const erasingDelay = 40;
    const newTextDelay = 2000;

    // =========================================================================
    // 1. Motor de Renderizado Modular
    // =========================================================================
    function renderContent(lang) {
        const data = portfolioData[lang] || portfolioData.es;
        if (!data) return;

        // --- Navegación ---
        const navMap = {
            'nav-experience': data.nav.experience,
            'nav-projects': data.nav.projects,
            'nav-awards': data.nav.awards,
            'nav-education': data.nav.education,
            'nav-skills': data.nav.skills,
            'nav-contact': data.nav.contact
        };
        Object.entries(navMap).forEach(([id, text]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        });

        // --- Hero Section ---
        const heroLocation = document.getElementById('hero-location');
        if (heroLocation) heroLocation.textContent = data.hero.location;

        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) heroTitle.textContent = data.hero.title;

        const heroBio = document.getElementById('hero-bio');
        if (heroBio) heroBio.innerHTML = data.hero.bio;

        const heroCta = document.getElementById('hero-cta');
        if (heroCta) heroCta.innerHTML = `<i class="fas fa-paper-plane"></i> ${data.hero.cta}`;

        const heroProjectsCta = document.getElementById('hero-projects-cta');
        if (heroProjectsCta) heroProjectsCta.innerHTML = `<i class="fas fa-layer-group"></i> ${data.hero.projectsCta}`;

        // --- 1. Experiencia Profesional (Prioridad: INFOTEC -> MasFast -> IA/Chatbots) ---
        const expSectionTitle = document.getElementById('experience-section-title');
        if (expSectionTitle) expSectionTitle.textContent = data.experience.sectionTitle;

        const expContainer = document.getElementById('experience-list');
        if (expContainer) {
            expContainer.innerHTML = data.experience.items.map(item => `
                <article class="card reveal" id="exp-${item.id}">
                    <div class="card-header-flex">
                        <div class="card-title-group">
                            <h4>${item.title}</h4>
                            ${item.badge ? `<span class="priority-badge"><i class="fas fa-star"></i> ${item.badge}</span>` : ''}
                        </div>
                        <span class="card-date-badge"><i class="far fa-calendar-alt"></i> ${item.period}</span>
                    </div>

                    <div class="company-tag">
                        <i class="fas fa-building"></i>
                        <span><strong>${item.company}</strong> — ${item.companyType} · <em>${item.location}</em></span>
                    </div>

                    ${item.intro ? `<p class="card-intro">${item.intro}</p>` : ''}

                    <ul class="highlights">
                        ${item.highlights.map(hl => `<li>${hl}</li>`).join('')}
                    </ul>

                    <div class="card-stack">
                        ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>

                    ${item.links && item.links.length > 0 ? `
                        <div class="card-links">
                            ${item.links.map(link => `
                                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="button secondary">
                                    <i class="${link.icon}"></i> ${link.label}
                                </a>
                            `).join('')}
                        </div>
                    ` : ''}
                </article>
            `).join('');
        }

        // --- 2. Proyectos Destacados ---
        const projSectionTitle = document.getElementById('projects-section-title');
        if (projSectionTitle) projSectionTitle.textContent = data.projects.sectionTitle;

        const projContainer = document.getElementById('projects-list');
        if (projContainer) {
            projContainer.innerHTML = data.projects.items.map(proj => `
                <article class="project-card reveal">
                    <div>
                        <span class="project-badge">${proj.category}</span>
                        <h4>${proj.title}</h4>
                        <p>${proj.description}</p>
                    </div>
                    <div>
                        <div class="card-stack">
                            ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                        ${proj.links && proj.links.length > 0 ? `
                            <div class="card-links" style="margin-top: 14px;">
                                ${proj.links.map(link => `
                                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="button secondary" style="padding: 6px 14px; font-size: 0.85rem;">
                                        <i class="${link.icon}"></i> ${link.label}
                                    </a>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </article>
            `).join('');
        }

        // --- 3. Reconocimientos & Aceleración ---
        const awardsSectionTitle = document.getElementById('awards-section-title');
        if (awardsSectionTitle) awardsSectionTitle.textContent = data.awards.sectionTitle;

        const awardsContainer = document.getElementById('awards-list');
        if (awardsContainer) {
            awardsContainer.innerHTML = data.awards.items.map(award => `
                <div class="award-card reveal">
                    <div class="award-icon"><i class="${award.icon}"></i></div>
                    <div class="award-info">
                        <h5>${award.title}</h5>
                        <p class="award-entity">${award.entity}</p>
                        <p>${award.description}</p>
                    </div>
                </div>
            `).join('');
        }

        // --- 4. Educación & Formación ---
        const eduSectionTitle = document.getElementById('education-section-title');
        if (eduSectionTitle) eduSectionTitle.textContent = data.education.sectionTitle;

        const eduContainer = document.getElementById('education-list');
        if (eduContainer) {
            eduContainer.innerHTML = data.education.items.map(edu => `
                <article class="edu-card reveal">
                    <div>
                        <h4>${edu.title}</h4>
                        <div class="school"><i class="fas fa-university"></i> ${edu.school} (${edu.period})</div>
                        <p>${edu.description}</p>
                    </div>
                    <span class="edu-tag">${edu.tag}</span>
                </article>
            `).join('');
        }

        // --- 5. Stack Tecnológico (Habilidades) ---
        const skillsSectionTitle = document.getElementById('skills-section-title');
        if (skillsSectionTitle) skillsSectionTitle.textContent = data.skills.sectionTitle;

        const skillsContainer = document.getElementById('skills-list');
        if (skillsContainer) {
            skillsContainer.innerHTML = data.skills.categories.map(cat => `
                <div class="skill-category reveal">
                    <h4><i class="${cat.icon}"></i> ${cat.name}</h4>
                    <ul>
                        ${cat.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }

        // --- 6. Contacto y Footer ---
        const contactSectionTitle = document.getElementById('contact-section-title');
        if (contactSectionTitle) contactSectionTitle.textContent = data.contact.sectionTitle;

        const contactDesc = document.getElementById('contact-description');
        if (contactDesc) contactDesc.textContent = data.contact.description;

        const contactBtn = document.getElementById('contact-email-btn');
        if (contactBtn) contactBtn.innerHTML = `<i class="fas fa-envelope"></i> ${data.contact.buttonText}`;

        const footerEl = document.getElementById('footer-text');
        if (footerEl) footerEl.innerHTML = data.contact.footerText;

        // Atributo lang en html y botón selector
        document.documentElement.lang = lang;
        if (langToggle) langToggle.textContent = lang === 'es' ? 'EN' : 'ES';

        // Re-enganchar observador de scroll para nuevos elementos
        initScrollObserver();
    }

    // =========================================================================
    // 2. Máquina de Escribir (Typewriter)
    // =========================================================================
    function startTypewriter(lang) {
        clearTimeout(typingTimer);
        clearTimeout(erasingTimer);
        const data = portfolioData[lang] || portfolioData.es;
        textArray = data.hero.typedStrings;
        textArrayIndex = 0;
        charIndex = 0;
        if (typedTextSpan) typedTextSpan.textContent = '';
        type();
    }

    function type() {
        if (!typedTextSpan || !textArray.length) return;
        const currentString = textArray[textArrayIndex];
        if (charIndex < currentString.length) {
            typedTextSpan.textContent += currentString.charAt(charIndex);
            charIndex++;
            typingTimer = setTimeout(type, typingDelay);
        } else {
            erasingTimer = setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (!typedTextSpan || !textArray.length) return;
        const currentString = textArray[textArrayIndex];
        if (charIndex > 0) {
            typedTextSpan.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            erasingTimer = setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            typingTimer = setTimeout(type, typingDelay + 300);
        }
    }

    // =========================================================================
    // 3. Internacionalización (Cambio de Idioma)
    // =========================================================================
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        renderContent(lang);
        startTypewriter(lang);
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const nextLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(nextLang);
        });
    }

    // =========================================================================
    // 4. Modo Oscuro / Claro
    // =========================================================================
    function applyTheme(theme) {
        body.className = '';
        if (theme) body.classList.add(theme);
    }

    let savedTheme = localStorage.getItem('portfolio_theme');
    if (!savedTheme) {
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : '';
    }
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode');
            const newTheme = isDark ? '' : 'dark-mode';
            localStorage.setItem('portfolio_theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // =========================================================================
    // 5. Barra de Navegación con Scroll Suave
    // =========================================================================
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }
    }, { passive: true });

    // =========================================================================
    // 6. Scroll Reveal Observer
    // =========================================================================
    function initScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // =========================================================================
    // 7. Partículas Sutiles de Fondo (Ultra Liviano & Optimizado a 60fps)
    // =========================================================================
    function initBackgroundParticles() {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let animationFrameId = null;
        let isTabActive = true;

        // Configuración de Partículas
        const particleCount = Math.min(32, Math.max(18, Math.floor(width / 50)));
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                radius: Math.random() * 1.8 + 1,
                alpha: Math.random() * 0.5 + 0.2
            });
        }

        // Posición del Cursor para Interactividad Sutil
        const mouse = { x: -1000, y: -1000 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }, { passive: true });

        window.addEventListener('mouseleave', () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }, { passive: true });

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }, { passive: true });

        // Pausar animación si la pestaña no está visible para ahorrar 100% de CPU
        document.addEventListener('visibilitychange', () => {
            isTabActive = !document.hidden;
            if (isTabActive && !animationFrameId) {
                render();
            }
        });

        function render() {
            if (!isTabActive) {
                animationFrameId = null;
                return;
            }

            ctx.clearRect(0, 0, width, height);

            const isDark = body.classList.contains('dark-mode');
            const nodeColor = isDark ? '56, 189, 248' : '14, 165, 233';

            // Dibujar Conexiones y Nodos
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Movimiento
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Reacción suave al mouse
                const dxMouse = mouse.x - p.x;
                const dyMouse = mouse.y - p.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                if (distMouse < 120) {
                    p.x -= (dxMouse / distMouse) * 0.6;
                    p.y -= (dyMouse / distMouse) * 0.6;
                }

                // Dibujar Nodo
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${nodeColor}, ${p.alpha * (isDark ? 0.7 : 0.4)})`;
                ctx.fill();

                // Conectar nodos cercanos
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const lineAlpha = (1 - dist / 140) * (isDark ? 0.22 : 0.12);
                        ctx.strokeStyle = `rgba(${nodeColor}, ${lineAlpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        }

        render();
    }

    // =========================================================================
    // 8. Inicialización General
    // =========================================================================
    renderContent(currentLang);
    startTypewriter(currentLang);
    initBackgroundParticles();
});
