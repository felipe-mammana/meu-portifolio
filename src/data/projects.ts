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
    name: "Gestão e Controle de Estoque",
    kind: "Corporate Inventory System",
    description:
      "Sistema web corporativo para controle de estoque de TI, patrimônio em uso, movimentações, usuários, localizações e exportações para BI. Projeto real de operação interna com regras de negócio, auditoria, notificações por e-mail, filtros, KPIs e controle por perfil.",
    stack: ["PHP 8.x", "MariaDB", "MySQL", "Composer", "PHPMailer", "JavaScript", "CSS3"],
    screenshots: [
      { title: "Em uso", image: "/prints/estoque-emuso.jpeg" },
      { title: "Principal", image: "/prints/estoque-principal.jpeg" },
      { title: "Exportações BI", image: "/prints/estoque-dashboard.jpeg" },
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
      "Plataforma fullstack para gestão comercial de marmorarias, transformando pedidos por áudio ou texto em orçamentos estruturados. Integra OpenAI para transcrição e interpretação, painel administrativo, catálogo de materiais, relatórios comerciais e geração de PDF.",
    stack: ["PHP 8.2", "Python 3.11", "FastAPI", "MySQL 8.4", "OpenAI API", "ReportLab"],
    screenshots: [
      { title: "Painel de orçamentos", image: "/prints/marmoraria-orcamento.jpeg" },
      { title: "Revisão assistida", image: "/prints/marmoraria-edit.jpeg" },
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
      "Plataforma web para acompanhamento de pacientes com TEA, conectando famílias, pacientes e profissionais de saúde. Inclui exercícios terapêuticos, consultas, progresso, feedbacks, chat privado, comunidade, pagamentos PIX e painéis responsivos para pacientes e médicos.",
    stack: ["PHP 8", "MySQL/MariaDB", "JavaScript ES6", "HTML5", "CSS3", "Composer", "PHPMailer"],
    screenshots: [
      { title: "Dashboard paciente" },
      { title: "Painel médico" },
      { title: "Chat e comunidade" },
    ],
    status: "TCC / Web Platform",
    github: "https://github.com/felipe-mammana/plataforma-de-ajuda-TEA",
    highlight: "Paciente + Médico",
    icon: HeartHandshake,
  },
  {
    name: "ALTUS Admin",
    kind: "Desktop Admin System",
    description:
      "Aplicação desktop administrativa para operar dados centrais do ALTUS, incluindo usuários, responsáveis, médicos, exercícios, progresso, relatórios e pagamentos. Usa interface PyQt5 com telas do Qt Designer e acesso direto ao banco MySQL/MariaDB.",
    stack: ["Python", "PyQt5", "Qt Designer", "MySQL", "MariaDB", "Matplotlib", "SMTP"],
    screenshots: [
      { title: "Menu administrativo" },
      { title: "Gestão de exercícios" },
      { title: "Relatórios mensais" },
    ],
    status: "Admin Desktop",
    github: "https://github.com/felipe-mammana/plataforma-de-ajuda-TEA-adm",
    highlight: "Módulo administrativo",
    icon: MonitorCog,
  },
  {
    name: "Empregamento",
    kind: "Opportunity System",
    description:
      "Projeto relacionado a empregabilidade, vagas e organização de oportunidades, estruturado para facilitar acompanhamento e tomada de decisão.",
    stack: ["JavaScript", "CSS", "HTML"],
    screenshots: [
      { title: "Painel de vagas" },
      { title: "Organização" },
    ],
    status: "Concept",
    github: "https://github.com/felipe-mammana/empregameto",
    icon: BriefcaseBusiness,
  },
  {
    name: "Projeto Chat de Treinamento",
    kind: "AI Interaction",
    description:
      "Projeto com foco em chat, treinamento, explorando automação, interação inteligente e fluxos conversacionais aplicados a sistemas.",
    stack: ["IA", "Automação", "Chat"],
    screenshots: [
      { title: "Chat inteligente" },
      { title: "Fluxo de treino" },
    ],
    status: "Lab",
    github: "https://github.com/felipe-mammana/projeto-chat/",
    icon: Bot,
  },
];
