"use client";

import { useEffect, useState, type CSSProperties } from "react";

const menu = [
  { number: "01", name: "Inicio", href: "#inicio" },
  { number: "02", name: "Sobre mí", href: "#sobre-mi" },
  { number: "03", name: "Habilidades", href: "#habilidades" },
  { number: "04", name: "Proyectos", href: "#proyectos" },
  { number: "05", name: "Educación", href: "#educacion" },
  { number: "06", name: "CV", href: "#cv" },
  { number: "07", name: "Contacto", href: "#contacto" },
];

const skills = [
  {
    title: "Desarrollo",
    number: "01",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "C#",
      "Python",
      "PHP",
    ],
  },
  {
    title: "Datos",
    number: "02",
    items: ["SQL Server", "MariaDB", "MySQL", "Bases de datos"],
  },
  {
    title: "IoT & Hardware",
    number: "03",
    items: ["Arduino", "ESP32-CAM", "Sensores", "IoT"],
  },
  {
    title: "Redes & TI",
    number: "04",
    items: ["Cisco Packet Tracer", "Redes", "TI"],
  },
  {
    title: "Herramientas",
    number: "05",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Visual Studio",
      "NetBeans",
    ],
  },
];

const projects = [
  {
    number: "01",
    category: "Desarrollo de software",
    title: "Game Vault",
    description:
      "Sistema para la gestión de una tienda física de videojuegos, desarrollado como proyecto académico.",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "REST API"],
    size: "large",
  },
  {
    number: "02",
    category: "Desarrollo web",
    title: "SkillSwap",
    description:
      "Aplicación web académica orientada al intercambio de conocimientos y habilidades.",
    technologies: ["ASP.NET MVC", "C#", "SQL"],
    size: "normal",
  },
  {
    number: "03",
    category: "IoT",
    title: "Aula Innova",
    description:
      "Proyecto tecnológico relacionado con automatización, hardware y soluciones IoT.",
    technologies: ["Arduino", "Sensores", "IoT"],
    size: "normal",
  },
  {
    number: "04",
    category: "Proyecto académico",
    title: "Proyecto de tesis",
    description:
      "Proyecto académico que formará parte de mi etapa final de formación.",
    technologies: ["Próximamente"],
    size: "wide",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("niriel-theme");

    if (savedTheme === "light") {
      setDarkMode(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "niriel-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const theme = darkMode
    ? {
        background: "#202925",
        surface: "#29332F",
        surfaceAlt: "#303A36",
        cream: "#F3E7D3",
        creamSoft: "#E7D8C0",
        green: "#4F9A8F",
        greenLight: "#76B7AA",
        taupe: "#B0A493",
        burgundy: "#8A2933",
        text: "#F3E7D3",
        muted: "#C5BDAF",
        border: "#46504B",
      }
    : {
        background: "#F3E7D3",
        surface: "#FFF8ED",
        surfaceAlt: "#E9DDCA",
        cream: "#F3E7D3",
        creamSoft: "#E7D8C0",
        green: "#013E37",
        greenLight: "#0F3D3A",
        taupe: "#6F665A",
        burgundy: "#6C151E",
        text: "#222831",
        muted: "#665F55",
        border: "#D2C4AF",
      };

  const themeStyles = {
    "--bg": theme.background,
    "--surface": theme.surface,
    "--surface-alt": theme.surfaceAlt,
    "--cream": theme.cream,
    "--cream-soft": theme.creamSoft,
    "--green": theme.green,
    "--green-light": theme.greenLight,
    "--taupe": theme.taupe,
    "--burgundy": theme.burgundy,
    "--text": theme.text,
    "--muted": theme.muted,
    "--border": theme.border,
  } as CSSProperties;

  return (
    <main
      style={themeStyles}
      className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-700"
    >
      {/* =====================================================
          MOBILE HEADER
      ====================================================== */}

      <header
        className={`fixed left-0 top-0 z-[70] flex w-full items-center justify-between border-b px-5 py-4 backdrop-blur-xl transition-all duration-500 md:hidden ${
          scrolled
            ? "bg-[var(--bg)]/95 shadow-lg"
            : "bg-[var(--bg)]/80"
        }`}
        style={{ borderColor: "var(--border)" }}
      >
        <a
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold tracking-tight"
        >
          Niriel<span className="text-[var(--green)]">.</span>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar tema"
            className="flex h-10 w-10 items-center justify-center border text-sm transition-all duration-300 hover:bg-[var(--green)] hover:text-[var(--cream)]"
            style={{ borderColor: "var(--border)" }}
          >
            {darkMode ? "☼" : "☾"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className="relative flex h-10 w-10 items-center justify-center border transition-all duration-300 hover:bg-[var(--green)] hover:text-[var(--cream)]"
            style={{ borderColor: "var(--border)" }}
          >
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                menuOpen
                  ? "rotate-45"
                  : "-translate-y-1.5"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                menuOpen
                  ? "-rotate-45"
                  : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[var(--bg)]" />

        <nav className="relative flex h-full flex-col justify-center gap-6 px-8">
          {menu.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: menuOpen
                  ? `${index * 40}ms`
                  : "0ms",
              }}
              className={`group flex items-center gap-5 text-2xl transition-all duration-500 ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-5 opacity-0"
              }`}
            >
              <span className="text-xs text-[var(--taupe)]">
                {item.number}
              </span>

              <span className="transition-colors duration-300 group-hover:text-[var(--green)]">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* =====================================================
          DESKTOP SIDEBAR
      ====================================================== */}

      <aside
        className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col overflow-y-auto border-r bg-[var(--bg)] px-7 py-8 md:flex"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Marca */}

        <div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--taupe)]">
                Portfolio
              </p>

              <h1 className="mt-2 text-2xl font-semibold tracking-tight">
                Niriel
                <span className="text-[var(--green)]">.</span>
              </h1>
            </div>

            <div className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rotate-45 border border-[var(--border)] transition-transform duration-500 hover:rotate-90" />

              <img
                src="/trifuerza.png"
                alt=""
                className="h-7 w-7 object-contain opacity-70 transition-all duration-500 hover:scale-110 hover:rotate-6"
              />
            </div>
          </div>

          <div
            className="mt-5 h-px w-full"
            style={{ backgroundColor: "var(--border)" }}
          />

          <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-[var(--taupe)]">
            Developer · Student
          </p>
        </div>

        {/* Navegación */}

        <nav className="mt-14 flex flex-col gap-2">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative flex items-center gap-4 overflow-hidden px-3 py-3 text-sm text-[var(--taupe)] transition-all duration-300 hover:translate-x-1 hover:text-[var(--text)]"
            >
              <span className="absolute left-0 h-5 w-0.5 -translate-x-2 bg-[var(--green)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />

              <span className="text-[9px] tracking-widest opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                {item.number}
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Parte inferior */}

        <div className="mt-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mb-8 flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--taupe)] transition-colors duration-300 hover:text-[var(--text)]"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border text-sm"
              style={{ borderColor: "var(--border)" }}
            >
              {darkMode ? "☼" : "☾"}
            </span>

            {darkMode ? "Modo claro" : "Modo oscuro"}
          </button>

          <div
            className="border-t pt-5 text-[10px] leading-5 text-[var(--taupe)]"
            style={{ borderColor: "var(--border)" }}
          >
            <p>Elías Niriel López Casoverde</p>
            <p>Software Development</p>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="pt-16 md:ml-64 md:pt-0">

        {/* ===================================================
            HERO
        ==================================================== */}

        <section
          id="inicio"
          className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 md:px-14 lg:px-16 xl:px-20"
        >
          {/* Glow */}

          <div className="hero-glow pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[var(--green)] opacity-20 blur-[100px]" />

          <div className="pointer-events-none absolute bottom-10 right-[8%] hidden h-24 w-24 border border-[var(--taupe)]/20 lg:block" />

          <div className="pointer-events-none absolute left-[10%] top-[15%] hidden h-2 w-2 rounded-full bg-[var(--burgundy)] lg:block" />

          <div className="relative mx-auto grid w-full max-w-[90rem] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Texto */}

            <div className="hero-content">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--green)]" />

                <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--taupe)]">
                  Estudiante · Desarrollo de Software
                </p>
              </div>

              <h2 className="hero-title text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.87] tracking-[-0.055em]">
                Elías
                <br />

                <span className="relative inline-block text-[var(--green)]">
                  Niriel

                  <span className="absolute -bottom-2 left-0 h-1 w-1/2 bg-[var(--burgundy)]" />
                </span>

                <span className="text-[var(--taupe)]">.</span>
              </h2>

              <p className="mt-9 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                Bachillerato Técnico Vocacional en Desarrollo de
                Software. Construyendo experiencias digitales,
                explorando tecnología y aprendiendo a convertir
                ideas en proyectos reales.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="group relative overflow-hidden bg-[var(--green)] px-7 py-3.5 text-sm font-medium text-[var(--cream)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(15,61,58,0.25)]"
                >
                  <span className="relative z-10">
                    Ver proyectos
                  </span>

                  <span className="absolute inset-0 translate-y-full bg-[var(--burgundy)] transition-transform duration-500 group-hover:translate-y-0" />
                </a>

                <a
                  href="#sobre-mi"
                  className="group flex items-center gap-3 border px-7 py-3.5 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green)] hover:text-[var(--green)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  Sobre mí

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Redes */}

              <div className="mt-12 flex items-center gap-5 text-xs text-[var(--taupe)]">
                <a
                  href="https://github.com/NirielC"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  GitHub
                </a>

                <span
                  className="h-3 w-px"
                  style={{ backgroundColor: "var(--border)" }}
                />

                <a
                  href="https://www.linkedin.com/in/eniriel"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Fotografía */}

            <div className="flex justify-center lg:justify-end">
              <div className="photo-wrapper relative h-[25rem] w-[19rem] sm:h-[30rem] sm:w-[22rem]">

                {/* Capa verde */}

                <div className="photo-back absolute inset-0 rotate-6 bg-[var(--green)] transition-transform duration-700" />

                {/* Borgoña */}

                <div className="absolute -right-5 -top-5 z-0 h-20 w-20 bg-[var(--burgundy)] opacity-90 transition-transform duration-700 hover:rotate-12" />

                {/* Marco */}

                <div
                  className="photo-frame absolute inset-0 -rotate-3 overflow-hidden border bg-[var(--surface)] shadow-2xl transition-transform duration-700 hover:-rotate-1"
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* REEMPLAZAR POSTERIORMENTE POR TU FOTO */}

                  <div className="relative h-full w-full bg-[var(--surface)]">
                    <img
                      src="/profile.png"
                      alt="Elías Niriel"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-20">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-white/80">
                        Elías Niriel
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        Software Development
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detalle geométrico */}

                <div className="absolute -bottom-6 -left-7 z-20 grid h-16 w-16 grid-cols-2 grid-rows-2 overflow-hidden border border-[var(--taupe)]">
                  <span className="bg-[var(--green)]" />
                  <span className="bg-[var(--cream-soft)]" />
                  <span className="bg-[var(--cream-soft)]" />
                  <span className="bg-[var(--surface-alt)]" />
                </div>

                {/* Zelda */}

                <span className="absolute -bottom-7 right-0 z-20 text-xl text-[var(--green)]">
                  ▲
                </span>
              </div>
            </div>
          </div>

          {/* Scroll */}

          <a
            href="#sobre-mi"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-[var(--taupe)] transition-all duration-300 hover:-translate-y-1 sm:flex"
          >
            Scroll

            <span className="scroll-line h-10 w-px bg-[var(--taupe)]" />
          </a>
        </section>

        {/* ===================================================
            SOBRE MÍ
        ==================================================== */}

        <section
          id="sobre-mi"
          className="border-t px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-16 xl:px-20"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[0.22fr_0.78fr]">

            <div>
              <p className="section-label">
                02 · Sobre mí
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Aprender.
                <br />
                Crear.
                <br />
                <span className="text-[var(--green)]">
                  Mejorar.
                </span>
              </h2>

              <p className="mt-10 max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
                Soy estudiante de Desarrollo de Software y
                actualmente estoy fortaleciendo mis conocimientos
                en programación, desarrollo web, bases de datos,
                redes, tecnología e Internet de las cosas.
              </p>

              <p className="mt-6 max-w-4xl text-base leading-8 text-[var(--muted)]">
                Me interesa entender cómo funcionan las cosas,
                experimentar con distintas tecnologías y
                transformar lo aprendido en proyectos que
                realmente pueda mostrar.
              </p>

              <div className="mt-12 grid gap-px overflow-hidden border bg-[var(--border)] sm:grid-cols-3">
                {[
                  ["01", "Desarrollo", "Software"],
                  ["02", "Tecnología", "IoT · TI"],
                  ["03", "Aprendizaje", "Constante"],
                ].map(([number, title, subtitle]) => (
                  <div
                    key={number}
                    className="bg-[var(--bg)] p-6 transition-colors duration-500 hover:bg-[var(--green)] hover:text-[var(--cream)]"
                  >
                    <span className="text-[10px] text-[var(--taupe)]">
                      {number}
                    </span>

                    <p className="mt-8 font-medium">
                      {title}
                    </p>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      {subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            HABILIDADES
        ==================================================== */}

        <section
          id="habilidades"
          className="border-t px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-16 xl:px-20"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="mx-auto max-w-[90rem]">

            <p className="section-label">
              03 · Habilidades
            </p>

            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Tecnologías con
                <br />
                las que he trabajado.
              </h2>

              <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
                Herramientas y tecnologías que forman parte de
                mi formación y de los proyectos en los que he
                trabajado.
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden border bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className={`group relative bg-[var(--bg)] p-8 transition-all duration-500 hover:bg-[var(--green)] hover:text-[var(--cream)] ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] text-[var(--taupe)]">
                      {skill.number}
                    </span>

                    <span className="text-lg text-[var(--taupe)] transition-transform duration-500 group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-14 text-2xl font-medium">
                    {skill.title}
                  </h3>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="border border-current/20 px-3 py-1.5 text-xs text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--cream-soft)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            PROYECTOS
        ==================================================== */}

        <section
          id="proyectos"
          className="border-t px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-16 xl:px-20"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="mx-auto max-w-[90rem]">

            <p className="section-label">
              04 · Proyectos
            </p>

            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Cosas que
                <br />
                <span className="text-[var(--green)]">
                  he construido.
                </span>
              </h2>

              <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
                Proyectos académicos y personales que representan
                mi proceso de aprendizaje.
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2">

              {projects.map((project, index) => (
                <article
                  key={project.number}
                  className={`project-card group relative overflow-hidden border bg-[var(--surface)] p-7 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl md:p-9 ${
                    index === 0 ? "md:row-span-2" : ""
                  } ${
                    project.size === "wide"
                      ? "md:col-span-2"
                      : ""
                  }`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="absolute -right-4 -top-8 text-[8rem] font-semibold leading-none text-[var(--green)] opacity-[0.06] transition-all duration-700 group-hover:opacity-[0.12]">
                    {project.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--taupe)]">
                        {project.category}
                      </span>

                      <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </div>

                    <div
                      className={`flex flex-col ${
                        index === 0
                          ? "min-h-[27rem]"
                          : "min-h-[17rem]"
                      } justify-between`}
                    >
                      <div>
                        <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-10 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="border border-[var(--border)] px-3 py-1.5 text-[10px] text-[var(--taupe)]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--burgundy)] transition-all duration-700 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            EDUCACIÓN
        ==================================================== */}

        <section
          id="educacion"
          className="border-t px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-16 xl:px-20"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[0.22fr_0.78fr]">

            <div>
              <p className="section-label">
                05 · Educación
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Formación
                <br />
                <span className="text-[var(--green)]">
                  académica.
                </span>
              </h2>

              <div className="mt-14 border-l-2 border-[var(--green)] pl-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--taupe)]">
                  2024 — 2026
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Bachillerato Técnico Vocacional
                  <br />
                  en Desarrollo de Software
                </h3>

                <p className="mt-3 text-sm text-[var(--muted)]">
                  Colegio Español Padre Arrupe
                </p>

                <p className="mt-7 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                  Formación orientada al desarrollo de software,
                  programación, bases de datos, desarrollo web,
                  tecnologías de información y proyectos
                  tecnológicos.
                </p>
              </div>

              <div className="mt-12 grid gap-px overflow-hidden border bg-[var(--border)] sm:grid-cols-2">
                <div className="bg-[var(--bg)] p-7">
                  <span className="text-[10px] text-[var(--taupe)]">
                    ENFOQUE
                  </span>

                  <p className="mt-7 text-lg">
                    Desarrollo de software
                  </p>
                </div>

                <div className="bg-[var(--bg)] p-7">
                  <span className="text-[10px] text-[var(--taupe)]">
                    INTERESES
                  </span>

                  <p className="mt-7 text-lg">
                    Web · IoT · TI · Redes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            CV
        ==================================================== */}

        <section
          id="cv"
          className="border-t px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-16 xl:px-20"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="mx-auto max-w-[90rem]">

            <p className="section-label">
              06 · CV
            </p>

            <div className="mt-5 grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

              <div>
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  Mi trayectoria,
                  <br />
                  <span className="text-[var(--green)]">
                    en papel.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)]">
                  Aquí podrás consultar mi curriculum vitae y
                  mi hoja de vida. Los documentos estarán
                  disponibles para visualizar y descargar.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="document-card group border bg-[var(--surface)] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-[var(--green)] hover:text-[var(--cream)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] text-[var(--taupe)]">
                      DOCUMENTO 01
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-medium">
                    Curriculum Vitae
                  </h3>

                  <p className="mt-2 text-xs text-[var(--muted)]">
                    Abrir documento
                  </p>
                </a>

                <a
                  href="/hoja-de-vida.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="document-card group border bg-[var(--surface)] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-[var(--green)] hover:text-[var(--cream)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] text-[var(--taupe)]">
                      DOCUMENTO 02
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-medium">
                    Hoja de vida
                  </h3>

                  <p className="mt-2 text-xs text-[var(--muted)]">
                    Abrir documento
                  </p>
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            CONTACTO
        ==================================================== */}

        <section
          id="contacto"
          className="relative overflow-hidden border-t px-6 py-32 sm:px-10 md:px-14 md:py-40 lg:px-16 xl:px-20"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--green)] opacity-20 blur-[100px]" />

          <div className="relative mx-auto max-w-[90rem]">

            <p className="section-label">
              07 · Contacto
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Hagamos algo
              <br />
              <span className="text-[var(--green)]">
                interesante.
              </span>
            </h2>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="https://github.com/NirielC"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 border px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green)]"
                style={{ borderColor: "var(--border)" }}
              >
                GitHub

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/eniriel"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 border px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green)]"
                style={{ borderColor: "var(--border)" }}
              >
                LinkedIn

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

            </div>

            <div
              className="mt-24 flex flex-col justify-between gap-6 border-t pt-7 text-[10px] uppercase tracking-[0.25em] text-[var(--taupe)] sm:flex-row"
              style={{ borderColor: "var(--border)" }}
            >
              <span>
                Elías Niriel López Casoverde
              </span>

              <span>
                2026 · Portfolio
              </span>
            </div>

            {/* Easter egg Zelda */}

            <img
              src="/trifuerza.png"
              alt=""
              className="h-5 w-5 object-contain opacity-40 transition-all duration-500 hover:scale-150 hover:opacity-100"
            />
          </div>
        </section>
      </div>
    </main>
  );
}