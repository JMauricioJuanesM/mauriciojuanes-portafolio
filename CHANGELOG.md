# Changelog

Todas las modificaciones notables del portafolio profesional `mauriciojuanes.com` se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2026-08-15

### Added
- **Estandarización de Ramas de Desarrollo Autónomo (`feature/asistente-autonomo`):**
  - Unificación de la rama de trabajo para despliegues continuos y refinamiento de interfaces.
- **Micro-interacciones y Efectos Ambientales de Lujo:**
  - Canvas de partículas ambientales ligeras (`ambient particle canvas`) con aceleración por GPU y cero impacto en rendimiento móvil.
  - Efecto interactivo de máquina de escribir reactiva (`typewriter`) con rotación de roles técnicos (Ingeniero en Sistemas, Full-Stack Developer, AI Agent Architect).
  - Efectos de resplandor perimetral y desenfoque de fondo (`glassmorphism`, `backdrop-filter`).

### Changed
- **Jerarquía y Reordenamiento de Experiencia Profesional:**
  - Jerarquía estructurada: 1) INFOTEC (plataformas gubernamentales PNC/RPP, optimización PDF y frontend accesible), 2) MasFast (CTO & Fundador, +35k entregas, NestJS/Flutter/WebSockets), 3) IA & Chatbots (arquitectura multi-agente, whitelist de seguridad de tokens).
  - Refinamiento de avatar estilizado con iniciales *MJ*, paleta oscura nocturna (`#070b14`), acentos dorados/cyan sutiles y micro-animación al hover.
  - Corrección de fechas académicas y alineación de hero en dispositivos móviles.

## [2.0.0] - 2026-08-14

### Changed
- **Refactor Modular Completo:**
  - Desacoplamiento de datos multilingües (Español / Inglés) en `js/data.js`.
  - Separación de lógica de interfaz y observadores de intersección en `js/app.js`.
  - Consolidación del sistema de diseño en `css/styles.css` con variables CSS de tokens de color, espaciado y tipografía moderna (Inter / Space Grotesk).
  - Actualización dinámica del año de copyright en pie de página (`new Date().getFullYear()`).
  - Renovación de certificado SSL Let's Encrypt para `mauriciojuanes.com`.
