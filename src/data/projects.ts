import { Bot, BriefcaseBusiness, Boxes, HeartHandshake, MonitorCog, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  screenshots: {
    title: string;
    image?: string;
  }[];
  status: string;
  github: string;
  highlight?: string;
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    name: "Gestao e Controle de Estoque",
    kind: "Corporate Inventory System",
    description:
      "Sistema web corporativo para controle de estoque de TI, patrimonio em uso, movimentacoes, usuarios, localizacoes e exportacoes para BI. Projeto real de operacao interna com regras de negocio, auditoria, notificacoes por e-mail, filtros, KPIs e controle por perfil.",
    stack: ["PHP 8.x", "MariaDB", "MySQL", "Composer", "PHPMailer", "JavaScript", "CSS3"],
    screenshots: [
      { title: "Dashboard de estoque" },
      { title: "Movimentacoes" },
      { title: "Exportacoes BI" },
    ],
    status: "Projeto real",
    github: "https://github.com/felipe-mammana/projeto-gestao-estoque/",
    highlight: "Principal",
    icon: Boxes,
  },
  {
    name: "MVP Marmoraria",
    kind: "AI Business Platform",
    description:
      "Plataforma fullstack para gestao comercial de marmorarias, transformando pedidos por audio ou texto em orcamentos estruturados. Integra OpenAI para transcricao e interpretacao, painel administrativo, catalogo de materiais, relatorios comerciais e geracao de PDF.",
    stack: ["PHP 8.2", "Python 3.11", "FastAPI", "MySQL 8.4", "Docker Compose", "OpenAI API", "ReportLab"],
    screenshots: [
      { title: "Painel de orcamentos", image: "/prints/marmoraria-orcamento.jpeg" },
      { title: "Revisao assistida", image: "/prints/marmoraria-edit.jpeg" },
      { title: "Dashboard comercial", image: "/prints/marmoraria-dashboard.jpeg" },
    ],
    status: "MVP funcional",
    github: "https://github.com/felipe-mammana/orca-marmoraria",
    highlight: "IA aplicada",
    icon: Workflow,
  },
  {
    name: "ALTUS - Plataforma de Ajuda TEA",
    kind: "Clinical Support Platform",
    description:
      "Plataforma web para acompanhamento de pacientes com TEA, conectando familias, pacientes e profissionais de saude. Inclui exercicios terapeuticos, consultas, progresso, feedbacks, chat privado, comunidade, pagamentos PIX e paineis responsivos para pacientes e medicos.",
    stack: ["PHP 8", "MySQL/MariaDB", "JavaScript ES6", "HTML5", "CSS3", "Composer", "PHPMailer"],
    screenshots: [
      { title: "Dashboard paciente" },
      { title: "Painel medico" },
      { title: "Chat e comunidade" },
    ],
    status: "TCC / Web Platform",
    github: "https://github.com/felipe-mammana/plataforma-de-ajuda-TEA",
    highlight: "Paciente + Medico",
    icon: HeartHandshake,
  },
  {
    name: "ALTUS Admin",
    kind: "Desktop Admin System",
    description:
      "Aplicacao desktop administrativa para operar dados centrais do ALTUS, incluindo usuarios, responsaveis, medicos, exercicios, progresso, relatorios e pagamentos. Usa interface PyQt5 com telas do Qt Designer e acesso direto ao banco MySQL/MariaDB.",
    stack: ["Python", "PyQt5", "Qt Designer", "MySQL", "MariaDB", "Matplotlib", "SMTP"],
    screenshots: [
      { title: "Menu administrativo" },
      { title: "Gestao de exercicios" },
      { title: "Relatorios mensais" },
    ],
    status: "Admin Desktop",
    github: "https://github.com/felipe-mammana/plataforma-de-ajuda-TEA-adm",
    highlight: "Modulo administrativo",
    icon: MonitorCog,
  },
  {
    name: "Empregameto",
    kind: "Opportunity System",
    description:
      "Projeto relacionado a empregabilidade, vagas e organizacao de oportunidades, estruturado para facilitar acompanhamento e tomada de decisao.",
    stack: ["JavaScript", "CSS", "HTML"],
    screenshots: [
      { title: "Painel de vagas" },
      { title: "Organizacao" },
    ],
    status: "Concept",
    github: "https://github.com/felipe-mammana/empregameto",
    icon: BriefcaseBusiness,
  },
  {
    name: "Projeto Chat de Treinamento",
    kind: "AI Interaction",
    description:
      "Projeto com foco em chat, treinamento, explorando automacao, interacao inteligente e fluxos conversacionais aplicados a sistemas.",
    stack: ["IA", "Automacao", "Chat"],
    screenshots: [
      { title: "Chat inteligente" },
      { title: "Fluxo de treino" },
    ],
    status: "Lab",
    github: "https://github.com/felipe-mammana/projeto-chat/",
    icon: Bot,
  },
];
