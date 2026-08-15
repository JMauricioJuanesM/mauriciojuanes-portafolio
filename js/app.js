/**
 * Portafolio Mauricio Juanes - Lógica de Aplicación
 * Manejo de estado, renderizado modular, temas e internacionalización
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Selectores Principales ---
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const typedTextSpan = document.getElementById('typed');

    // --- Estado de la Aplicación ---
    let currentLang = localStorage.getItem('portfolio_lang') || 'es';
    let typingTimer = null;
    let erasingTimer = null;
    let textArray = [];
    let textArrayIndex = 0;
    let charIndex = 0;
    const typingDelay = 90;
    const erasingDelay = 45;
    const newTextDelay = 2200;

    // --- Función de Renderizado Modular de Secciones ---
    function renderContent(lang) {
        const data = portfolioData[lang];
        if (!data) return;

        // 1. Navegación
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

        // 2. Hero Section
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) heroTitle.textContent = data.hero.title;

        const heroBio = document.getElementById('hero-bio');
        if (heroBio) heroBio.innerHTML = data.hero.bio;

        const heroCta = document.getElementById('hero-cta');
        if (heroCta) heroCta.textContent = data.hero.cta;

        // 3. Experiencia (INFOTEC -> MasFast -> IA/Chatbots)
        const expSectionTitle = document.getElementById('experience-section-title');
        if (expSectionTitle) expSectionTitle.textContent = data.experience.sectionTitle;

        const expContainer = document.getElementById('experience-list');
        if (expContainer) {
            expContainer.innerHTML = data.experience.items.map(item => `
                <article class="card reveal" id="exp-${item.id}">
                    <div class="card-image">
                        <img src="https://placehold.co/600x400/0f172a/0ea5e9?text=${encodeURIComponent(item.imageText)}" alt="${item.title}">
                    </div>
                    <div class="card-info">
                        <h4>${item.title}</h4>
                        <p class="meta"><strong>${item.company}</strong> — ${item.period} | <em>${item.location}</em></p>
                        <p>${item.description}</p>
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
                    </div>
                </article>
            `).join('');
        }

        // 4. Proyectos Destacados
        const projSectionTitle = document.getElementById('projects-section-title');
        if (projSectionTitle) projSectionTitle.textContent = data.projects.sectionTitle;

        const projContainer = document.getElementById('projects-list');
        if (projContainer) {
            projContainer.innerHTML = data.projects.items.map(proj => `
                <article class="card reveal">
                    <div class="card-image">
                        <img src="https://placehold.co/600x400/0f172a/0ea5e9?text=${encodeURIComponent(proj.imageText)}" alt="${proj.title}">
                    </div>
                    <div class="card-info">
                        <h4>${proj.title}</h4>
                        <p class="meta">${proj.subtitle}</p>
                        <p>${proj.description}</p>
                        <div class="card-stack">
                            ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                        ${proj.links && proj.links.length > 0 ? `
                            <div class="card-links">
                                ${proj.links.map(link => `
                                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="button">
                                        <i class="${link.icon}"></i> ${link.label}
                                    </a>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </article>
            `).join('');
        }

        // 5. Reconocimientos & Aceleración
        const awardsSectionTitle = document.getElementById('awards-section-title');
        if (awardsSectionTitle) awardsSectionTitle.textContent = data.awards.sectionTitle;

        const awardsContainer = document.getElementById('awards-list');
        if (awardsContainer) {
            awardsContainer.innerHTML = data.awards.items.map(award => `
                <div class="skill-category reveal">
                    <h4><i class="fas fa-trophy"></i> ${award.title}</h4>
                    <p class="meta" style="color: var(--primary-color); font-weight: 600; margin-bottom: 8px;">${award.entity}</p>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">${award.description}</p>
                </div>
            `).join('');
        }

        // 6. Educación
        const eduSectionTitle = document.getElementById('education-section-title');
        if (eduSectionTitle) eduSectionTitle.textContent = data.education.sectionTitle;

        const eduContainer = document.getElementById('education-list');
        if (eduContainer) {
            eduContainer.innerHTML = data.education.items.map(edu => `
                <article class="card reveal">
                    <div class="card-image">
                        <img src="https://placehold.co/600x400/0f172a/0ea5e9?text=${encodeURIComponent(edu.imageText)}" alt="${edu.title}">
                    </div>
                    <div class="card-info">
                        <h4>${edu.title}</h4>
                        <p class="meta">${edu.school} (${edu.period})</p>
                        <p>${edu.description}</p>
                    </div>
                </article>
            `).join('');
        }

        // 7. Habilidades (Stack Tecnológico)
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

        // 8. Contacto y Footer
        const contactSectionTitle = document.getElementById('contact-section-title');
        if (contactSectionTitle) contactSectionTitle.textContent = data.contact.sectionTitle;

        const contactDesc = document.getElementById('contact-description');
        if (contactDesc) contactDesc.textContent = data.contact.description;

        const contactBtn = document.getElementById('contact-email-btn');
        if (contactBtn) contactBtn.innerHTML = `<i class="fas fa-envelope"></i> ${data.contact.buttonText}`;

        const footerEl = document.getElementById('footer-text');
        if (footerEl) footerEl.innerHTML = data.contact.footerText;

        // Actualizar botón de idioma y tag html
        document.documentElement.lang = lang;
        if (langToggle) langToggle.textContent = lang === 'es' ? 'EN' : 'ES';

        // Re-enganchar observador de scroll para nuevos elementos revelables
        initScrollObserver();
    }

    // --- Lógica de Máquina de Escribir ---
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

    // --- Cambio de Idioma ---
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        renderContent(lang);
        startTypewriter(lang);
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    // --- Modo Oscuro / Claro ---
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

    // --- Barra de Navegación con Scroll ---
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // --- Animaciones Scroll Reveal ---
    function initScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // --- Inicialización Inicial ---
    renderContent(currentLang);
    startTypewriter(currentLang);
});
