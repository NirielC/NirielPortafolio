"use client";

import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";

/* =========================================================
   DATOS
   Todo el contenido está aquí arriba para que sea fácil
   de actualizar sin tocar el diseño.
========================================================= */

const PORTFOLIO_URL = "https://niriel-portafolio-demo.vercel.app/";
const EMAIL = "elsnirielc@gmail.com";
const GITHUB_URL = "https://github.com/NirielC";
const LINKEDIN_URL = "https://www.linkedin.com/in/eniriel";

/* Iconos SVG simples (trazos de 24x24) para no depender de librerías */
const icons = {
  home: "M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 9a8 8 0 0 1 16 0",
  briefcase: "M3 7h18v13H3zM8 7V4h8v3M3 13h18",
  folder: "M3 6h7l2 2h9v12H3z",
  code: "M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16",
  school: "M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5",
  file: "M6 2h9l5 5v15H6zM14 2v6h6M9 13h7M9 17h7",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  github:
    "M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
  linkedin: "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM8 10v7M8 7v.01M12 17v-7M12 13.5a3 3 0 0 1 6 0V17",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H4c0 3 1.5 4.5 4 4.5M16 6h4c0 3-1.5 4.5-4 4.5M12 13v4M8 21h8M9 17h6v4H9z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  panel: "M3 4h18v16H3zM9 4v16",
  sun: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
};

type IconName = keyof typeof icons;

function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={icons[name]} />
    </svg>
  );
}

const menu: { name: string; href: string; icon: IconName }[] = [
  { name: "Inicio", href: "#inicio", icon: "home" },
  { name: "Sobre mí", href: "#sobre-mi", icon: "user" },
  { name: "Experiencia", href: "#experiencia", icon: "briefcase" },
  { name: "Proyectos", href: "#proyectos", icon: "folder" },
  { name: "Habilidades", href: "#habilidades", icon: "code" },
  { name: "Educación", href: "#educacion", icon: "school" },
  { name: "CV", href: "#cv", icon: "file" },
  { name: "Contacto", href: "#contacto", icon: "mail" },
];

const achievements = [
  {
    year: "2026",
    title: "Proyecto ganador — CIMAT 2026",
    detail:
      "Togo: app móvil que traduce Lengua de Señas Salvadoreña (LESSA) a voz, sin internet.",
  },
  {
    year: "2026",
    title: "Proyecto ganador — Eureka 2026",
    detail:
      "LESSAI: reconocimiento de lengua de señas (LESSA) con inteligencia artificial.",
  },
];

type Project = {
  title: string;
  subtitle: string;
  year: string;
  badge?: string;
  description: string;
  features: string[];
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Togo",
    subtitle: "Traductor de LESSA a voz, sin internet",
    year: "2026",
    badge: "Ganador CIMAT 2026",
    description:
      "Aplicación móvil que reconoce señas y letras de la Lengua de Señas Salvadoreña directamente en el celular y las convierte en voz, sin necesidad de conexión a internet.",
    features: [
      "Seña a voz y voz a texto",
      "Deletreo y diccionario LESSA",
      "IA ejecutada en el dispositivo",
      "Plataforma web Togo Colabora",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Kotlin",
      "CameraX",
      "MediaPipe",
      "TensorFlow Lite",
      "Python",
      "scikit-learn",
      "React + Vite",
      "Supabase",
    ],
  },
  {
    title: "LESSAI",
    subtitle: "Reconocimiento de LESSA con IA",
    year: "2026",
    badge: "Ganador Eureka 2026",
    description:
      "Sistema de tres partes: un pin con cámara (ESP32-CAM) captura las señas, un servidor en Python las procesa con MediaPipe y un modelo LSTM, y una app móvil muestra el resultado en texto y voz.",
    features: [
      "Dataset propio de ~4,000 videos",
      "Modelo LSTM para secuencias",
      "Pin inteligente magnético",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "TensorFlow / Keras",
      "ESP32-CAM",
      "React Native",
    ],
  },
  {
    title: "Sistema procesador de DTE",
    subtitle: "Proyecto laboral · SIC, taller mecánico",
    year: "2026",
    description:
      "Sistema para procesar y organizar documentos tributarios electrónicos. Descarga los adjuntos con la API de Gmail, identifica los DTE y los clasifica para su posterior envío.",
    features: [
      "Integración con Gmail API",
      "Descarga y organización automática",
      "Filtrado y clasificación",
    ],
    technologies: ["Python", "Gmail API"],
  },
  {
    title: "Aula Innova",
    subtitle: "Monitoreo académico y control de asistencia",
    year: "2026",
    description:
      "Sistema con API REST en arquitectura por capas, consumida por una aplicación móvil, una de escritorio y una web.",
    features: [
      "CRUD, validaciones y manejo de errores",
      "Apps móvil, escritorio y web",
    ],
    technologies: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Swagger",
      "Kotlin",
      ".NET",
      "React",
    ],
  },
  {
    title: "Skill Swap",
    subtitle: "Intercambio de habilidades",
    year: "2025",
    description:
      "API REST para una aplicación de intercambio de habilidades entre usuarios, con arquitectura por capas y documentación en Swagger.",
    features: [
      "CRUD, validaciones y manejo de errores",
      "Documentación con Swagger / OpenAPI",
    ],
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Swagger"],
  },
];

const skills = [
  {
    title: "Lenguajes",
    items: ["Java", "Kotlin", "Python", "C#", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: [
      "Spring Boot",
      "ASP.NET Core",
      "React",
      "React Native",
      "Next.js",
      "JSF",
      "Flet",
      "Android",
    ],
  },
  {
    title: "Backend y APIs",
    items: ["APIs REST", "JSON", "Swagger / OpenAPI", "Postman"],
  },
  {
    title: "Bases de datos",
    items: ["SQL Server", "MySQL", "MariaDB", "Supabase", "Modelado relacional"],
  },
  {
    title: "Inteligencia artificial",
    items: ["TensorFlow", "TensorFlow Lite", "MediaPipe", "OpenCV", "scikit-learn"],
  },
  {
    title: "Herramientas",
    items: ["Git y GitHub", "Docker", "n8n", "Linux", "Cisco Packet Tracer"],
  },
  {
    title: "Arquitectura",
    items: ["POO", "Arquitectura en capas", "MVC", "SOLID", "UML"],
  },
  {
    title: "Metodologías",
    items: ["Scrum", "Kanban", "Extreme Programming (XP)"],
  },
];

/* =========================================================
   COMPONENTES PEQUEÑOS
========================================================= */

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-[var(--border)] bg-[var(--surface-alt)] px-2.5 py-1 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="section-label flex items-center gap-3">
        <span className="h-0.5 w-8 rounded-full bg-[var(--gold)]" />
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          {description}
        </p>
      )}
    </div>
  );
}

const sectionClass =
  "border-t border-[var(--border)] px-6 py-20 sm:px-10 md:px-14 md:py-28 lg:px-16 xl:px-20";

const THEME_KEY = "niriel-theme";

function subscribeToTheme(callback: () => void) {
  window.addEventListener(THEME_KEY, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_KEY, callback);
    window.removeEventListener("storage", callback);
  };
}

/* =========================================================
   PÁGINA
========================================================= */

export default function Home() {
  // El tema se guarda en localStorage. useSyncExternalStore lo lee
  // sin errores de hidratación: en el servidor siempre es claro.
  const darkMode = useSyncExternalStore(
    subscribeToTheme,
    () => localStorage.getItem(THEME_KEY) === "dark",
    () => false
  );
  const [menuOpen, setMenuOpen] = useState(false);
  // Menú lateral de escritorio: abierto (con textos) o cerrado (solo iconos)
  const [collapsed, setCollapsed] = useState(false);

  // El fondo del <body> también cambia con el tema, así no se ven
  // franjas de otro color al hacer scroll en los bordes.
  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleTheme = () => {
    localStorage.setItem(THEME_KEY, darkMode ? "light" : "dark");
    window.dispatchEvent(new Event(THEME_KEY));
  };

  return (
    <main
      className={`${
        darkMode ? "theme-dark" : "theme-light"
      } min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)] transition-colors duration-300`}
    >
      {/* ===================== HEADER MÓVIL ===================== */}

      <header className="fixed left-0 top-0 z-[70] flex w-full items-center justify-between border-b border-[var(--border)] bg-[var(--bg)]/90 px-5 py-3 backdrop-blur-md md:hidden">
        <a
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          className="font-semibold tracking-tight"
        >
          Elías Niriel López
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-sm"
          >
            {darkMode ? "☼" : "☾"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className="relative flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)]"
          >
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </header>

      {/* ===================== MENÚ MÓVIL ===================== */}

      <div
        className={`fixed inset-0 z-[60] bg-[var(--bg)] transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-5 px-8">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium transition-colors hover:text-[var(--accent)]"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* ===================== SIDEBAR ESCRITORIO ===================== */}

      <aside
        className={`sidebar fixed left-0 top-0 z-50 hidden h-screen flex-col overflow-y-auto overflow-x-hidden py-6 transition-[width] duration-300 md:flex ${
          collapsed ? "w-[4.5rem] px-3" : "w-64 px-5"
        }`}
      >
        <div className={`flex items-center ${collapsed ? "flex-col gap-4" : "justify-between"}`}>
          <div className="flex items-center gap-3">
            <img
              src="/profile.jpg"
              alt=""
              className="h-11 w-11 shrink-0 rounded-full object-cover object-top ring-2 ring-[var(--gold)]"
            />
            {!collapsed && (
              <div className="whitespace-nowrap">
                <p className="text-sm font-semibold leading-tight text-white">
                  Elías Niriel López
                </p>
                <p className="text-xs text-[var(--side-muted)]">
                  Desarrollador de Software
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Abrir menú lateral" : "Cerrar menú lateral"}
            title={collapsed ? "Abrir menú" : "Cerrar menú"}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[var(--side-muted)] transition-colors hover:bg-white/10 hover:text-white"
          >
            <Icon name="panel" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-1">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              title={collapsed ? item.name : undefined}
              className={`flex items-center gap-3 rounded-md py-2 text-sm text-[var(--side-muted)] transition-colors hover:bg-white/10 hover:text-white ${
                collapsed ? "justify-center px-0" : "px-3"
              }`}
            >
              <Icon name={item.icon} className="h-[18px] w-[18px] shrink-0" />
              {!collapsed && <span className="whitespace-nowrap">{item.name}</span>}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <button
            onClick={toggleTheme}
            title={darkMode ? "Modo claro" : "Modo oscuro"}
            className={`mb-5 flex w-full items-center gap-3 rounded-md border border-white/15 py-2 text-sm text-[var(--side-muted)] transition-colors hover:bg-white/10 hover:text-white ${
              collapsed ? "justify-center px-0" : "px-3"
            }`}
          >
            <Icon name={darkMode ? "sun" : "moon"} />
            {!collapsed && (darkMode ? "Modo claro" : "Modo oscuro")}
          </button>

          <div
            className={`flex border-t border-white/15 pt-5 text-[var(--side-muted)] ${
              collapsed ? "flex-col items-center gap-4" : "gap-4"
            }`}
          >
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" title="GitHub" className="hover:text-white">
              <Icon name="github" className="h-5 w-5" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" title="LinkedIn" className="hover:text-white">
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
            <a href={`mailto:${EMAIL}`} title="Correo" className="hover:text-white">
              <Icon name="mail" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </aside>

      {/* ===================== CONTENIDO ===================== */}

      <div
        className={`pt-14 transition-[margin] duration-300 md:pt-0 ${
          collapsed ? "md:ml-[4.5rem]" : "md:ml-64"
        }`}
      >
        {/* ---------- INICIO ---------- */}

        <section
          id="inicio"
          className="hero-bg relative flex min-h-[calc(100vh-3.5rem)] items-center px-6 py-16 sm:px-10 md:min-h-screen md:px-14 lg:px-16 xl:px-20"
        >
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="fade-in order-2 lg:order-1">
              <p className="section-label flex items-center gap-3">
                <span className="h-0.5 w-8 rounded-full bg-[var(--gold)]" />
                Portafolio
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Elías Niriel
                <br />
                López Casoverde
              </h1>

              <p className="mt-4 text-xl font-medium text-[var(--accent)]">
                Desarrollador de Software Junior
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
                Egresado del Bachillerato Técnico Vocacional en
                Desarrollo de Software del{" "}
                <span className="font-medium text-[var(--text)]">
                  Colegio Español Padre Arrupe
                </span>
                . Desarrollo APIs REST, aplicaciones web y móviles, y
                soluciones con inteligencia artificial, como Togo y
                LESSAI, proyectos ganadores en CIMAT y Eureka 2026.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#proyectos"
                  className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Ver proyectos
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Descargar CV
                </a>
              </div>

              <div className="mt-8 flex items-center gap-5 text-[var(--muted)]">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-[var(--accent)]">
                  <Icon name="github" className="h-5 w-5" />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[var(--accent)]">
                  <Icon name="linkedin" className="h-5 w-5" />
                </a>
                <a href={`mailto:${EMAIL}`} aria-label="Correo" className="transition-colors hover:text-[var(--accent)]">
                  <Icon name="mail" className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="fade-in-delay order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-56 sm:w-72 lg:w-80">
                {/* Bloque de color detrás de la foto */}
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-[var(--accent)]" />
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-black/10">
                  <img
                    src="/profile.jpg"
                    alt="Elías Niriel López Casoverde"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SOBRE MÍ ---------- */}

        <section id="sobre-mi" className={sectionClass}>
          <div className="mx-auto max-w-6xl">
            <SectionHeader label="Sobre mí" title="Perfil profesional" />

            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div className="space-y-5 text-base leading-7 text-[var(--muted)]">
                <p>
                  Soy desarrollador de software junior, egresado del
                  Bachillerato Técnico en Desarrollo de Software del
                  Colegio Español Padre Arrupe (a la espera del título)
                  y próximo a iniciar estudios universitarios.
                </p>
                <p>
                  Tengo experiencia en proyectos que abarcan
                  programación, bases de datos, desarrollo web y
                  móvil, APIs REST e inteligencia artificial. Me
                  interesa construir soluciones con impacto real,
                  como herramientas de inclusión para la comunidad
                  sorda salvadoreña.
                </p>
                <p>
                  Soy responsable, con facilidad para trabajar en
                  equipo y atender personas.
                </p>
              </div>

              <dl className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] text-sm">
                {[
                  ["Ubicación", "El Salvador"],
                  ["Modalidad", "Presencial / Remoto"],
                  ["Idiomas", "Español (nativo) · Inglés (B1)"],
                  ["Correo", EMAIL],
                ].map(([term, value]) => (
                  <div key={term} className="flex flex-col gap-1 bg-[var(--surface)] px-5 py-4 sm:flex-row sm:justify-between">
                    <dt className="text-[var(--subtle)]">{term}</dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- EXPERIENCIA ---------- */}

        <section id="experiencia" className={sectionClass}>
          <div className="mx-auto max-w-6xl">
            <SectionHeader label="Experiencia" title="Experiencia y logros" />

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--subtle)]">
                  Experiencia laboral · 03/2026
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Desarrollador de Software Junior
                </h3>
                <p className="mt-1 text-sm text-[var(--accent)]">
                  SIC – Servicios Industriales Cisneros (taller mecánico)
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  <li>
                    • Desarrollé un sistema para procesar y organizar
                    documentos tributarios electrónicos (DTE).
                  </li>
                  <li>
                    • Integré la API de Gmail para descargar los
                    archivos adjuntos, identificarlos y organizarlos
                    para su posterior envío.
                  </li>
                </ul>
              </article>

              <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--subtle)]">
                  Logros y reconocimientos
                </p>
                <ul className="mt-3 divide-y divide-[var(--border)]">
                  {achievements.map((item) => (
                    <li key={item.title} className="py-4 first:pt-2 last:pb-0">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- PROYECTOS ---------- */}

        <section id="proyectos" className={sectionClass}>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              label="Proyectos"
              title="Proyectos destacados"
              description="Proyectos reales en los que he participado: desde inteligencia artificial para la inclusión hasta sistemas para empresas."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`project-card relative flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 ${
                    project.badge ? "is-winner" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {project.badge && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--gold-text)]">
                        <Icon name="trophy" className="h-3.5 w-3.5" />
                        {project.badge}
                      </span>
                    )}
                    <span className="text-xs text-[var(--subtle)]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1 text-sm text-[var(--muted)]">
                    {project.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </article>
              ))}

              {/* Tarjeta extra: el resto de proyectos está en GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-[var(--accent)] p-7 text-[var(--on-accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
              >
                <Icon
                  name="github"
                  className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 opacity-10"
                />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider opacity-70">
                    Y muchos más
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Más proyectos en GitHub
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 opacity-80">
                    Estos son solo los más representativos. En mi GitHub
                    puedes revisar prácticas, proyectos académicos y
                    experimentos con distintas tecnologías.
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                  github.com/NirielC
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- HABILIDADES ---------- */}

        <section id="habilidades" className={sectionClass}>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              label="Habilidades"
              title="Habilidades técnicas"
              description="Tecnologías que he usado en mi formación y en los proyectos que he desarrollado."
            />

            <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((group) => (
                <div key={group.title} className="bg-[var(--surface)] p-6">
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- EDUCACIÓN ---------- */}

        <section id="educacion" className={sectionClass}>
          <div className="mx-auto max-w-6xl">
            <SectionHeader label="Educación" title="Formación académica" />

            <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--subtle)]">
                2024 — 2026
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Bachillerato Técnico Vocacional en Desarrollo de Software
              </h3>
              <p className="mt-1 text-sm text-[var(--accent)]">
                Colegio Español Padre Arrupe · Finalizado, a la espera del título
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--muted)]">
                Formación en programación, bases de datos, desarrollo
                web y móvil, análisis y diseño de sistemas, redes y
                metodologías ágiles.
              </p>
            </article>
          </div>
        </section>

        {/* ---------- CV ---------- */}

        <section id="cv" className={sectionClass}>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              label="Documentos"
              title="Currículum y hoja de vida"
              description="Puedes ver o descargar mis documentos en formato PDF."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/cv.pdf",
                  title: "Currículum Vitae",
                  detail: "Versión formal de una página",
                },
                {
                  href: "/hoja-de-vida.pdf",
                  title: "Hoja de vida",
                  detail: "Versión visual con proyectos",
                },
              ].map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
                >
                  <div>
                    <h3 className="font-semibold">{doc.title}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {doc.detail} · PDF
                    </p>
                  </div>
                  <span className="text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CONTACTO ---------- */}

        <section id="contacto" className={sectionClass}>
          <div className="mx-auto max-w-6xl">
            <div className="contact-band relative overflow-hidden rounded-2xl px-8 py-12 text-white md:px-12 md:py-16">
              <p className="section-label flex items-center gap-3 !text-[var(--gold)]">
                <span className="h-0.5 w-8 rounded-full bg-[var(--gold)]" />
                Contacto
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                ¿Trabajamos juntos?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                Estoy buscando oportunidades para seguir creciendo como
                desarrollador. Escríbeme y con gusto te respondo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[#1f3864] transition-colors hover:bg-white/90"
                >
                  <Icon name="mail" />
                  {EMAIL}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  <Icon name="linkedin" />
                  LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  <Icon name="github" />
                  GitHub
                </a>
              </div>
            </div>

            <footer className="mt-20 flex flex-col justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--subtle)] sm:flex-row">
              <span>© 2026 Elías Niriel López Casoverde</span>
              <a href={PORTFOLIO_URL} className="hover:text-[var(--accent)]">
                niriel-portafolio-demo.vercel.app
              </a>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
