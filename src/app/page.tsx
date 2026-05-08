"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Clipboard,
  Code2,
  Cpu,
  Database,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MonitorCog,
  Rocket,
  ServerCog,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { projects } from "@/data/projects";

const navItems = ["Sobre", "Systems", "Stack", "Lab", "Contato"];

const stackGroups = [
  {
    title: "Backend & Systems",
    icon: ServerCog,
    items: ["PHP", "Python", "FastAPI", "MySQL", "MariaDB", "APIs", "Regras de negocio"],
  },
  {
    title: "Desktop",
    icon: MonitorCog,
    items: ["PyQt5", "Qt Designer", "Matplotlib", "Interfaces desktop", "Sistemas internos"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    items: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Tools",
    icon: Cpu,
    items: ["Git", "GitHub", "VS Code", "MySQL Workbench", "Composer", "OpenAI API"],
  },
];

const labCards = [
  { title: "IA Experiments", icon: BrainCircuit, text: "Testes com chat, fluxos inteligentes e assistentes aplicados a sistemas." },
  { title: "Automation Ideas", icon: Zap, text: "Ideias para reduzir tarefas repetitivas e organizar informacoes internas." },
  { title: "Interface Concepts", icon: Sparkles, text: "Prototipos de interfaces modernas para produtos e paineis tecnicos." },
  { title: "Backend Studies", icon: Database, text: "Estudos de arquitetura, dados, regras de negocio e integracoes." },
  { title: "Mini Tools", icon: Bot, text: "Ferramentas pequenas para resolver problemas especificos com velocidade." },
];

const buildingItems = [
  "Aprofundando backend",
  "Estudando arquitetura de software",
  "Evoluindo em PHP, Python, MySQL e JavaScript",
  "Explorando IA aplicada a sistemas",
  "Melhorando projetos reais",
  "Construindo portfolio profissional",
];

function BootScreen() {
  const lines = [
    "INITIALIZING FELIPE_OS...",
    "Loading projects...",
    "Loading systems...",
    "Loading architecture...",
    "Loading creativity...",
    "SYSTEM READY.",
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[#030306]"
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="boot-panel">
        <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-cyan-200/70">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)]" />
          Boot sequence
        </div>
        <div className="space-y-3 font-mono text-sm text-zinc-200 sm:text-base">
          {lines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.22, duration: 0.28 }}
              className={index === lines.length - 1 ? "text-violet-200" : ""}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TypedName() {
  return (
    <h1 className="typing text-balance text-5xl font-semibold leading-[0.95] text-ice sm:text-7xl lg:text-8xl">
      Felipe Mammana
    </h1>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/70">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold text-ice sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-pretty text-base leading-7 text-zinc-400">{text}</p> : null}
    </motion.div>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "contatofelipewmammana@gmail.com";

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="button-secondary" onClick={copyEmail} type="button">
      {copied ? <CheckCircle2 size={18} /> : <Clipboard size={18} />}
      {copied ? "Email copiado" : "Copiar email"}
    </button>
  );
}

function ProjectScreenshots({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const activeScreenshot = project.screenshots[activeIndex] ?? project.screenshots[0];
  const hasMultipleScreenshots = project.screenshots.length > 1;
  const shouldShowImage =
    Boolean(activeScreenshot?.image) && !failedImages[activeScreenshot.image ?? ""];

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? project.screenshots.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === project.screenshots.length - 1 ? 0 : current + 1,
    );
  }

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded]);

  if (!activeScreenshot) {
    return null;
  }

  const lightbox =
    expanded && shouldShowImage ? (
        <div className="image-lightbox" onClick={() => setExpanded(false)}>
          <button aria-label="Fechar imagem expandida" className="lightbox-close" onClick={() => setExpanded(false)} type="button">
            <X size={20} />
          </button>
          {hasMultipleScreenshots ? (
            <button aria-label="Print anterior" className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); goToPrevious(); }} type="button">
              <ChevronLeft size={24} />
            </button>
          ) : null}
          <div className="lightbox-image-wrap" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeScreenshot.image ?? ""}
              alt={`Print expandido do projeto ${project.name}: ${activeScreenshot.title}`}
              width={1920}
              height={1080}
              sizes="96vw"
              unoptimized
            />
            <div className="lightbox-caption">
              <span>{project.name}</span>
              <p>{activeScreenshot.title}</p>
            </div>
          </div>
          {hasMultipleScreenshots ? (
            <button aria-label="Proximo print" className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); goToNext(); }} type="button">
              <ChevronRight size={24} />
            </button>
          ) : null}
        </div>
    ) : null;

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">Prints</p>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <div className="screenshot-carousel">
        <div
          aria-label={`Expandir print ${activeScreenshot.title}`}
          className="screenshot-main"
          onKeyDown={(event) => {
            if ((event.key === "Enter" || event.key === " ") && shouldShowImage) {
              event.preventDefault();
              setExpanded(true);
            }
          }}
          onClick={() => shouldShowImage && setExpanded(true)}
          role="button"
          tabIndex={shouldShowImage ? 0 : -1}
        >
          {shouldShowImage ? (
            <Image
              src={activeScreenshot.image ?? ""}
              alt={`Print do projeto ${project.name}: ${activeScreenshot.title}`}
              width={1440}
              height={900}
              sizes="(max-width: 1024px) 90vw, 560px"
              unoptimized
              onError={() =>
                setFailedImages((current) => ({
                  ...current,
                  [activeScreenshot.image ?? ""]: true,
                }))
              }
            />
          ) : (
            <div className="screenshot-placeholder screenshot-placeholder-large">
              <project.icon size={34} />
              <span>Adicione este print em public/prints</span>
            </div>
          )}
          {hasMultipleScreenshots ? (
            <div className="carousel-controls">
              <button aria-label="Print anterior" onClick={(event) => { event.stopPropagation(); goToPrevious(); }} type="button">
                <ChevronLeft size={18} />
              </button>
              <button aria-label="Proximo print" onClick={(event) => { event.stopPropagation(); goToNext(); }} type="button">
                <ChevronRight size={18} />
              </button>
            </div>
          ) : null}
        </div>
        <div className="screenshot-caption">
          <span>{activeScreenshot.title}</span>
          <p>
            {activeIndex + 1}/{project.screenshots.length}
          </p>
        </div>
        {hasMultipleScreenshots ? (
          <div className="screenshot-thumbs">
            {project.screenshots.map((screenshot, index) => (
              <button
                aria-label={`Abrir print ${screenshot.title}`}
                className={index === activeIndex ? "is-active" : ""}
                key={screenshot.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {screenshot.image && !failedImages[screenshot.image] ? (
                  <Image
                    src={screenshot.image}
                    alt=""
                    width={360}
                    height={225}
                    sizes="96px"
                    unoptimized
                    onError={() =>
                      setFailedImages((current) => ({
                        ...current,
                        [screenshot.image ?? ""]: true,
                      }))
                    }
                  />
                ) : (
                  <project.icon size={16} />
                )}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {lightbox && typeof document !== "undefined" ? createPortal(lightbox, document.body) : null}
    </div>
  );
}

export default function Home() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-matte text-zinc-200">
      <AnimatePresence>{booting ? <BootScreen /> : null}</AnimatePresence>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="ambient-grid" />
        <div className="mouse-glow" />
        <div className="particle-field" />
      </div>

      <nav className="fixed left-1/2 top-4 z-40 hidden w-[min(92vw,760px)] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-xl md:flex">
        <a className="flex items-center gap-2 px-3 font-mono text-xs uppercase tracking-[0.24em] text-ice" href="#hero">
          <Terminal size={16} className="text-violet-300" />
          Felipe_OS
        </a>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a key={item} className="nav-link" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="relative z-10 flex min-h-screen items-center px-5 pb-20 pt-24 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: booting ? 0 : 1, y: booting ? 28 : 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              Bem-vindo ao meu portfolio
            </p>
            <TypedName />
            <div className="mt-8 max-w-2xl space-y-3 text-xl leading-8 text-zinc-300 sm:text-2xl">
              <p>Backend-focused developer building real systems for real problems.</p>
              <p className="text-violet-200">Transforming ideas into intelligent systems.</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button-primary" href="https://github.com/felipe-mammana" target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
              <a className="button-secondary" href="https://www.linkedin.com/in/felipe-w-mammana/" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a className="button-secondary" href="/curriculo.pdf" download>
                <Download size={18} />
                Curriculo
              </a>
              <a className="button-secondary" href="#systems">
                <ArrowRight size={18} />
                Projetos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: booting ? 0 : 1, scale: booting ? 0.96 : 1, y: booting ? 24 : 0 }}
            transition={{ delay: 0.35, duration: 0.75 }}
            className="terminal-shell"
          >
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-900" />
                <span className="h-3 w-3 rounded-full bg-violet-500" />
                <span className="h-3 w-3 rounded-full bg-cyan-300" />
              </div>
              <span className="font-mono text-xs text-zinc-500">system.profile</span>
            </div>
            <div className="space-y-5 font-mono text-sm leading-7">
              <p><span className="text-cyan-300">&gt; whoami</span><br />Felipe Mammana</p>
              <p><span className="text-cyan-300">&gt; focus</span><br />Backend - Systems - Automation - AI</p>
              <p><span className="text-cyan-300">&gt; status</span><br />Building real systems for real problems</p>
              <div className="status-grid">
                <span>Python</span>
                <span>MySQL</span>
                <span>PyQt5</span>
                <span>PHP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="section-wrap">
        <SectionHeader
          eyebrow="About"
          title="Tecnico, criativo e orientado a sistemas reais."
          text="Tecnico em Desenvolvimento de Sistemas, cursa Analise e Desenvolvimento de Sistemas e vem construindo uma base solida para atuar como desenvolvedor backend/fullstack."
        />
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {[
            ["Backend focus", "Foco em logica, banco de dados, regras de negocio e sistemas internos bem estruturados."],
            ["Fullstack practice", "Tambem cria interfaces modernas com JavaScript, CSS e experiencias digitais responsivas."],
            ["Real impact", "Desenvolve projetos reais para a empresa atual, aplicando programacao para resolver problemas do dia a dia."],
          ].map(([title, text]) => (
            <motion.article key={title} className="premium-card" whileHover={{ y: -6 }}>
              <Code2 className="mb-5 text-violet-300" />
              <h3 className="mb-3 text-xl font-semibold text-ice">{title}</h3>
              <p className="leading-7 text-zinc-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="systems" className="section-wrap">
        <SectionHeader
          eyebrow="Systems Built"
          title="Projetos com cara de produto, regra de negocio e utilidade real."
          text="Uma selecao de sistemas, plataformas e experimentos em evolucao, com foco em resolver problemas concretos."
        />
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article key={project.name} className="project-card" whileHover={{ y: -7 }}>
              <div className="project-visual">
                <div className="visual-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-content">
                  <project.icon size={44} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/70">{project.kind}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-ice">{project.name}</h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="status-pill">{project.status}</span>
                  {project.highlight ? <span className="detail-pill">{project.highlight}</span> : null}
                </div>
                <p className="leading-7 text-zinc-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ProjectScreenshots project={project} />
                <a className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white" href={project.github} target="_blank" rel="noreferrer">
                  Ver no GitHub <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="stack" className="section-wrap">
        <SectionHeader eyebrow="Stack" title="Painel tecnico para construir, integrar e evoluir sistemas." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stackGroups.map((group) => (
            <motion.article key={group.title} className="premium-card" whileHover={{ y: -5 }}>
              <group.icon className="mb-5 text-cyan-200" />
              <h3 className="mb-5 text-xl font-semibold text-ice">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="lab" className="section-wrap">
        <SectionHeader
          eyebrow="Lab"
          title="Experimentos tecnicos, IA e pequenas ferramentas em movimento."
          text="Um espaco para testar ideias, estudar arquitetura, prototipar interfaces e transformar curiosidade em software."
        />
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-5">
          {labCards.map((card) => (
            <motion.article key={card.title} className="lab-card" whileHover={{ y: -5, scale: 1.01 }}>
              <card.icon className="mb-4 text-violet-300" />
              <h3 className="mb-3 font-semibold text-ice">{card.title}</h3>
              <p className="text-sm leading-6 text-zinc-400">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader eyebrow="Currently Building" title="Evolucao continua, com foco claro." />
        <div className="mx-auto max-w-4xl rounded-[8px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
          {buildingItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="building-row"
            >
              <span className="font-mono text-xs text-cyan-200">0{index + 1}</span>
              <p>{item}</p>
              <span className="ml-auto rounded-full bg-violet-500/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-violet-200">active</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader eyebrow="Experience" title="Programacao aplicada em ambiente profissional." />
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[.8fr_1.2fr]">
          <div className="premium-card">
            <BriefcaseBusiness className="mb-5 text-violet-300" />
            <h3 className="mb-3 text-2xl font-semibold text-ice">Experiencia atual</h3>
            <p className="leading-7 text-zinc-400">
              Atualmente atuo desenvolvendo solucoes e sistemas internos para minha empresa atual, aplicando programacao para resolver problemas reais do dia a dia, automatizar processos e melhorar a organizacao das informacoes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Tecnico em Desenvolvimento de Sistemas", "Cursando ADS", "Projetos reais em ambiente profissional", "Foco em backend e sistemas"].map((item) => (
              <div key={item} className="experience-chip">
                <CheckCircle2 size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section-wrap pb-20">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos construir algo inteligente?"
          text="Aberto para conexoes profissionais, projetos, oportunidades e conversas sobre sistemas, backend, automacao e IA."
        />
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          <a className="button-primary" href="mailto:felipe.mammana@email.com">
            <Mail size={18} />
            Email
          </a>
          <CopyEmailButton />
          <a className="button-secondary" href="https://github.com/felipe-mammana" target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a className="button-secondary" href="https://www.linkedin.com/in/felipe-w-mammana/" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
        <Rocket className="mx-auto mb-3 text-violet-300" size={18} />
        Building real systems for real problems.
      </footer>
    </main>
  );
}
