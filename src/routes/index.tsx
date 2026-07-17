import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Package,
  Users,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle,
  Warehouse,
  HelpCircle,
  Zap,
  Target,
  Maximize2,
  Handshake,
  Search,
  ClipboardList,
  UsersRound,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ServiceCard } from "../components/service-card";
import heroImage from "../assets/ops-loading.jpg";
import pickingImage from "../assets/ops-picking.jpg";
import teamImage from "../assets/ops-team.jpg";
import nightImage from "../assets/ops-night.jpg";
import porQueEscolherAsset from "../assets/por-que-escolher.png.asset.json";

const logoBgAsset = "/expansion-logo-vps.png";

const rhetoricalQuestions = [
  "Sabe quanto custa manter um funcionário CLT?",
  "Tem pico de demanda e não consegue escalar a equipe a tempo?",
  "Sua operação para quando alguém falta ou entra de férias?",
  "Perde produtividade por falta de mão de obra especializada?",
  "Quer reduzir turnover, encargos e processos trabalhistas?",
  "Precisa de equipe disponível em finais de semana e feriados?",
];

const deliverables = [
  { icon: Users, title: "Mão de obra diarista" },
  { icon: ShieldCheck, title: "Cobertura imediata de faltas e afastamentos" },
  { icon: Zap, title: "Atendimento em picos de demanda" },
  { icon: Warehouse, title: "Apoio para operações logísticas e industriais" },
  { icon: Clock, title: "Reposição rápida de profissionais" },
  { icon: LineChart, title: "Acompanhamento operacional" },
  { icon: Handshake, title: "Atendimento personalizado conforme a sua empresa" },
];

const whyChoose = [
  {
    icon: Zap,
    title: "Rapidez no atendimento",
    description: "Resposta ágil para minimizar impactos na operação.",
  },
  {
    icon: Target,
    title: "Compromisso com resultados",
    description:
      "Profissionais preparados para atender com responsabilidade e produtividade.",
  },
  {
    icon: Maximize2,
    title: "Flexibilidade operacional",
    description: "Soluções adaptadas à realidade e ao ritmo de cada cliente.",
  },
  {
    icon: Handshake,
    title: "Relacionamento de confiança",
    description:
      "Transparência, proximidade e acompanhamento durante toda a parceria.",
  },
];

const howWeWork = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Entendemos a necessidade da operação e os desafios do cliente.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento",
    description: "Definimos a solução mais adequada para cada cenário.",
  },
  {
    icon: UsersRound,
    title: "Execução",
    description:
      "Disponibilizamos profissionais com rapidez e organização.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento",
    description:
      "Monitoramos continuamente a operação para garantir qualidade e continuidade.",
  },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expansion — Soluções inteligentes em mão de obra 24h" },
      {
        name: "description",
        content:
          "A Expansion fornece mão de obra para operações logísticas, industriais e serviços de apoio, com rapidez, organização e compromisso para manter a produtividade dos nossos clientes.",
      },
      { property: "og:title", content: "Expansion — Soluções inteligentes em mão de obra" },
      {
        property: "og:description",
        content:
          "Mão de obra para operações que não podem parar: rapidez, flexibilidade e profissionais preparados no momento certo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Package,
    title: "Carga e Descarga",
    description:
      "Operários treinados para movimentação segura e eficiente de mercadorias, reduzindo tempo de operação e riscos no seu armazém.",
  },
  {
    icon: Users,
    title: "Mão de Obra Temporária",
    description:
      "Reforço de equipe sob demanda para picos de sazonalidade, eventos promocionais, férias coletivas e reposição imediata.",
  },
  {
    icon: CheckCircle,
    title: "Separação de Pedidos",
    description:
      "Colaboradores experientes em picking, conferência e organização de pedidos para e-commerce, varejo e atacado.",
  },
  {
    icon: Warehouse,
    title: "Inventários",
    description:
      "Equipes dedicadas para contagens físicas, auditorias e ajustes de estoque com agilidade e precisão.",
  },
  {
    icon: Package,
    title: "Embalagens",
    description:
      "Montagem, embalagem e etiquetagem de produtos para garantir integridade e padronização na expedição.",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24h",
    description:
      "Atendimento em todos os turnos, finais de semana e feriados, com equipe pronta para sua operação não parar.",
  },
];

const highlights = [
  "Equipe treinada e uniformizada",
  "Atendimento rápido em até 24h",
  "Redução de custos operacionais",
  "Escalabilidade conforme demanda",
  "Segurança do trabalho e EPIs",
  "Suporte em todo o Brasil",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <img
          src={logoBgAsset}
          alt=""
          aria-hidden="true"
          loading="eager"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 blur-2xl scale-125 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-stripes opacity-30" />
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-tangerine/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-tangerine/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-tangerine/40 bg-tangerine/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tangerine-light">
              <Clock className="h-4 w-4" />
              Soluções inteligentes em mão de obra
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Soluções inteligentes em mão de obra para{" "}
              <span className="text-tangerine">operações que não podem parar.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
              A Expansion é especializada no fornecimento de mão de obra para operações
              logísticas, industriais e serviços de apoio, atuando com rapidez, organização
              e compromisso para manter a produtividade dos nossos clientes.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70">
              <strong className="text-cream">Nosso propósito é simples:</strong> oferecer
              profissionais preparados no momento certo, reduzindo impactos operacionais e
              contribuindo para a continuidade da sua operação.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-tangerine px-7 py-3.5 text-base font-bold text-cream shadow-lg shadow-tangerine/25 transition-all hover:bg-tangerine-light hover:shadow-tangerine/40"
              >
                Solicitar Orçamento
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-3.5 text-base font-semibold text-cream backdrop-blur-sm transition-all hover:bg-cream/10"
              >
                Conhecer Serviços
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-tangerine/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-cream/10 shadow-2xl shadow-black/40">
              <img
                src={heroImage}
                alt="Equipe Expansion realizando carga e descarga em armazém"
                width={1600}
                height={1067}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-cream/10 bg-navy-dark/95 p-4 shadow-xl backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tangerine/20 text-tangerine">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold leading-none text-cream">+200</div>
                  <div className="text-xs text-cream/70">colaboradores ativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nossos Serviços"
            title="Soluções em logística para manter sua operação em movimento"
            description="Reforçamos sua operação com colaboradores treinados e disponíveis para carga e descarga, separação de pedidos, embalagens, inventários e atendimento 24 horas. Tudo sem burocracia de contratação e com escalabilidade sob demanda."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* O que a Expansion entrega */}
      <section className="bg-navy py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="O que a Expansion entrega"
            title="Suporte prático para cada desafio operacional"
            description="Da cobertura pontual à parceria contínua, entregamos as soluções que mantêm o ritmo do seu negócio."
            light
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 backdrop-blur-sm transition-colors hover:border-tangerine/40 hover:bg-cream/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tangerine/15 text-tangerine">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-display text-base font-semibold leading-snug text-cream">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher a Expansion */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Por que escolher a Expansion"
            title="Quatro compromissos que sustentam sua operação"
            description="Nosso diferencial está na forma como atendemos: rápido, próximo e sempre alinhado à realidade de cada cliente."
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              {whyChoose.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-tangerine/40 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-tangerine">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              <img
                src={porQueEscolherAsset.url}
                alt="Por que escolher a Expansion — equipe qualificada, soluções flexíveis, agilidade, foco em resultados e compromisso com qualidade"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Como trabalhamos"
            title="Um processo simples, do diagnóstico ao acompanhamento"
            description="Estruturamos cada parceria em quatro etapas para garantir resultado desde o primeiro dia."
          />
          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="relative">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-tangerine text-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-3xl font-bold text-tangerine/70">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-card-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Differentials */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Por que Expansion"
                title="Confiança, agilidade e operação sempre ativa"
                description="Entendemos que a logística não pode parar. Por isso, oferecemos colaboradores preparados, processos ágeis e flexibilidade total de horários."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tangerine/10 text-tangerine">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/sobre"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent"
              >
                Conheça nossa história
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative rounded-3xl bg-navy p-8 text-primary-foreground sm:p-12">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-tangerine/20 blur-2xl" />
              <div className="relative grid gap-8 sm:grid-cols-2">
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-tangerine">24h</div>
                  <div className="mt-2 text-sm text-cream/70">Equipe disponível</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-tangerine">+200</div>
                  <div className="mt-2 text-sm text-cream/70">Colaboradores ativos</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-tangerine">+10</div>
                  <div className="mt-2 text-sm text-cream/70">Empresas atendidas</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-tangerine">100%</div>
                  <div className="mt-2 text-sm text-cream/70">Foco em segurança</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations gallery */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nossa Operação"
            title="Equipes em ação, do amanhecer à madrugada"
            description="Cada turno é conduzido por profissionais treinados, uniformizados e prontos para manter o ritmo da sua cadeia logística."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-6 sm:grid-rows-2 sm:gap-6">
            <div className="group relative overflow-hidden rounded-3xl sm:col-span-4 sm:row-span-2 aspect-[4/3] sm:aspect-auto">
              <img
                src={pickingImage}
                alt="Colaborador realizando separação de pedidos com leitor de código de barras"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent p-6 sm:p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-tangerine-light">
                  Separação & Picking
                </div>
                <div className="mt-1 font-display text-xl font-bold text-cream sm:text-2xl">
                  Precisão em cada pedido
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl sm:col-span-2 aspect-[4/3] sm:aspect-auto">
              <img
                src={teamImage}
                alt="Equipe de operações logísticas com tablets em centro de distribuição"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-tangerine-light">
                  Inventário
                </div>
                <div className="mt-1 font-display text-lg font-bold text-cream">
                  Controle total do estoque
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl sm:col-span-2 aspect-[4/3] sm:aspect-auto">
              <img
                src={nightImage}
                alt="Operação logística durante o turno noturno em doca de carregamento"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-tangerine-light">
                  Turno Noturno
                </div>
                <div className="mt-1 font-display text-lg font-bold text-cream">
                  Operação 24 horas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rhetorical questions */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reflexão"
            title="Perguntas que fazem diferença na sua operação"
            description="Muitos gestores de logística enfrentam esses desafios todos os dias. A Expansion oferece a resposta prática: mão de obra qualificada, sem burocracia e disponível quando você precisa."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {rhetoricalQuestions.map((question) => (
              <div
                key={question}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tangerine/10 text-tangerine">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <p className="font-display text-lg font-semibold leading-snug text-card-foreground">
                  {question}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-tangerine px-7 py-3.5 text-base font-bold text-cream shadow-lg shadow-tangerine/25 transition-all hover:bg-tangerine-light"
            >
              Solicitar uma proposta
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-16 sm:py-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-tangerine/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-tangerine/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Precisa reforçar sua equipe agora?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Fale conosco e receba uma proposta personalizada em poucas horas. Atendemos
                emergências e demandas programadas com a mesma agilidade.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-tangerine px-7 py-3.5 text-base font-bold text-cream shadow-lg shadow-tangerine/25 transition-all hover:bg-tangerine-light"
                >
                  <Phone className="h-5 w-5" />
                  Falar com um consultor
                </Link>
                <a
                  href="https://wa.me/5535999523303"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
