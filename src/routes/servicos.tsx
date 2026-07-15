import { createFileRoute } from "@tanstack/react-router";
import {
  Package,
  Users,
  CheckCircle,
  Warehouse,
  ClipboardList,
  Clock,
  ArrowRight,
  Shield,
  Truck,
  HelpCircle,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Expansion Soluções em Logística" },
      {
        name: "description",
        content:
          "Conheça os serviços da Expansion: mão de obra temporária, carga e descarga, separação de pedidos, embalagens, inventários e equipe 24h.",
      },
      { property: "og:title", content: "Serviços — Expansion Soluções em Logística" },
      {
        property: "og:description",
        content:
          "Mão de obra temporária, carga e descarga, separação, embalagens, inventários e equipe disponível 24 horas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicesPage,
});

const serviceDetails = [
  {
    icon: Users,
    title: "Mão de Obra Temporária",
    description:
      "Disponibilizamos colaboradores qualificados para reforçar sua equipe em momentos de pico, sazonalidade, férias coletivas ou projetos pontuais. Você tem a quantidade certa de pessoas no momento certo.",
    benefits: [
      "Substituição rápida de ausências",
      "Escalabilidade por projeto",
      "Redução de turnover e custos de recrutamento",
    ],
  },
  {
    icon: Truck,
    title: "Carga e Descarga",
    description:
      "Operários treinados para movimentação interna e externa de mercadorias, garantindo segurança, agilidade e integridade dos produtos durante o recebimento e a expedição.",
    benefits: [
      "Operação segura e padronizada",
      "Uso correto de EPIs e equipamentos",
      "Redução de avarias e acidentes",
    ],
  },
  {
    icon: ClipboardList,
    title: "Separação de Pedidos",
    description:
      "Equipes especializadas em picking, conferência, organização e preparação de pedidos para operações de e-commerce, varejo, atacado e distribuição.",
    benefits: [
      "Agilidade na preparação de pedidos",
      "Conferência e rastreabilidade",
      "Adaptação ao WMS da empresa",
    ],
  },
  {
    icon: Package,
    title: "Embalagens",
    description:
      "Colaboradores para montagem, embalagem, etiquetagem e finalização de produtos, assegurando que cada item saia pronto para entrega com qualidade e aparência profissional.",
    benefits: [
      "Padronização de embalagens",
      "Etiquetagem correta",
      "Redução de retrabalho na expedição",
    ],
  },
  {
    icon: Warehouse,
    title: "Inventários",
    description:
      "Realizamos contagens físicas, auditorias e ajustes de estoque com equipe dedicada e organizada, minimizando discrepâncias e garantindo maior precisão no controle patrimonial.",
    benefits: [
      "Contagem física e cega",
      "Auditoria e relatórios",
      "Disponibilidade em horários estratégicos",
    ],
  },
  {
    icon: Clock,
    title: "Equipe 24 Horas",
    description:
      "Atendemos em todos os turnos, 7 dias por semana, incluindo finais de semana e feriados. Sua operação ganha continuidade total, sem preocupações com escala de pessoal.",
    benefits: [
      "Cobertura de turnos noturnos",
      "Atendimento em feriados",
      "Resposta rápida para emergências",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="O que fazemos"
            title="Serviços de mão de obra para logística"
            description="Soluções sob medida para cada etapa da cadeia de suprimentos, com profissionais treinados e disponíveis quando você precisar."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-tangerine" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reflexão"
            title="Perguntas que fazem diferença na sua operação"
            description="Muitos gestores de logística enfrentam esses desafios todos os dias. A Expansion oferece a resposta prática: mão de obra qualificada, sem burocracia e disponível quando você precisa."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              "Sabe quanto custa manter um funcionário CLT?",
              "Tem pico de demanda e não consegue escalar a equipe a tempo?",
              "Sua operação para quando alguém falta ou entra de férias?",
              "Perde produtividade por falta de mão de obra especializada?",
              "Quer reduzir turnover, encargos e processos trabalhistas?",
              "Precisa de equipe disponível em finais de semana e feriados?",
            ].map((question) => (
              <div
                key={question}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-tangerine-light"
            >
              Solicitar uma proposta
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                light
                align="left"
                eyebrow="Segurança e conformidade"
                title="Operação dentro das normas, sempre"
                description="Investimos em treinamento, EPIs e na cultura de segurança do trabalho. Nossos colaboradores chegam preparados para atuar dentro das normas da sua empresa."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Treinamento contínuo",
                  "EPIs completos",
                  "Gestão de riscos",
                  "Processos auditados",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-tangerine" />
                    <span className="text-sm font-medium text-cream/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-cream/5 p-8 text-center sm:p-12">
              <p className="text-lg text-cream/80">
                Cada operação é única. Conte-nos o que você precisa e montamos a equipe ideal.
              </p>
              <Link
                to="/contato"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-tangerine px-7 py-3.5 text-base font-bold text-cream shadow-lg shadow-tangerine/25 transition-all hover:bg-tangerine-light"
              >
                Solicitar proposta
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
