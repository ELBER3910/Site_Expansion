import { createFileRoute, Link } from "@tanstack/react-router";
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

const SITE_URL = "https://www.expansionsolucoeslogistica.com.br";

/**
 * SEO DA PÁGINA DE SERVIÇOS
 */
export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      {
        title: "Serviços Logísticos em Extrema MG | Expansion",
      },
      {
        name: "description",
        content:
          "Serviços logísticos em Extrema-MG: mão de obra, carga e descarga, separação de pedidos, embalagens, inventários e equipes disponíveis 24 horas.",
      },

      {
        property: "og:title",
        content: "Serviços Logísticos em Extrema MG | Expansion",
      },
      {
        property: "og:description",
        content:
          "Conheça as soluções da Expansion para operações logísticas: mão de obra, carga e descarga, separação, embalagens, inventários e equipes 24 horas.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/servicos`,
      },

      {
        name: "twitter:title",
        content: "Serviços Logísticos em Extrema MG | Expansion",
      },
      {
        name: "twitter:description",
        content:
          "Soluções e mão de obra para operações logísticas em Extrema-MG e região.",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: `${SITE_URL}/servicos`,
      },
    ],
  }),

  component: ServicesPage,
});

/**
 * SERVIÇOS
 */
const serviceDetails = [
  {
    icon: Users,
    title: "Mão de Obra para Operações Logísticas",
    description:
      "Disponibilizamos colaboradores qualificados para reforçar sua equipe em momentos de pico, sazonalidade, férias coletivas, ausências ou projetos pontuais. Sua empresa conta com a quantidade adequada de profissionais no momento necessário.",
    benefits: [
      "Substituição rápida de ausências",
      "Escalabilidade conforme a demanda",
      "Apoio em picos operacionais",
    ],
  },

  {
    icon: Truck,
    title: "Carga e Descarga",
    description:
      "Profissionais treinados para movimentação interna e externa de mercadorias, contribuindo para uma operação mais segura, organizada e ágil durante o recebimento e a expedição.",
    benefits: [
      "Operação segura e padronizada",
      "Uso correto de EPIs e equipamentos",
      "Mais agilidade no recebimento e expedição",
    ],
  },

  {
    icon: ClipboardList,
    title: "Separação de Pedidos e Picking",
    description:
      "Equipes preparadas para picking, conferência, organização e preparação de pedidos em operações de e-commerce, varejo, atacado, armazenagem e distribuição.",
    benefits: [
      "Agilidade na preparação de pedidos",
      "Conferência e organização",
      "Adaptação aos processos da empresa",
    ],
  },

  {
    icon: Package,
    title: "Embalagens e Etiquetagem",
    description:
      "Colaboradores para montagem, embalagem, etiquetagem e preparação de produtos, auxiliando sua empresa a manter organização, padronização e eficiência na expedição.",
    benefits: [
      "Padronização de embalagens",
      "Etiquetagem e preparação",
      "Redução de retrabalho na expedição",
    ],
  },

  {
    icon: Warehouse,
    title: "Inventários e Contagem de Estoque",
    description:
      "Equipes dedicadas para contagens físicas, inventários e apoio na conferência de estoque, proporcionando maior organização e precisão para sua operação.",
    benefits: [
      "Contagem física de estoque",
      "Apoio em inventários",
      "Disponibilidade em horários estratégicos",
    ],
  },

  {
    icon: Clock,
    title: "Equipe para Operações 24 Horas",
    description:
      "Disponibilizamos profissionais para diferentes turnos, incluindo períodos noturnos, finais de semana e feriados, conforme a necessidade da operação.",
    benefits: [
      "Cobertura de turnos",
      "Atendimento em finais de semana e feriados",
      "Resposta rápida para demandas operacionais",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO / INTRODUÇÃO */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="O que fazemos"
            title="Serviços logísticos e mão de obra em Extrema-MG"
            description="Soluções para empresas que precisam reforçar suas operações com profissionais preparados para carga e descarga, separação de pedidos, embalagens, inventários e diferentes turnos de trabalho."
          />
        </div>
      </section>

      {/* LISTA DE SERVIÇOS */}
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

                <h2 className="font-display text-xl font-bold tracking-tight text-card-foreground">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-5 flex-1 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
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

      {/* DESAFIOS OPERACIONAIS */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Desafios da operação"
            title="Sua empresa enfrenta algum destes problemas?"
            description="Operações logísticas precisam de flexibilidade para lidar com aumento de demanda, faltas, férias, novos projetos e necessidades emergenciais."
          />

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              "Tem pico de demanda e precisa aumentar a equipe rapidamente?",
              "Sua operação é impactada quando algum profissional falta?",
              "Precisa de mão de obra para carga e descarga?",
              "Tem dificuldade para reforçar a equipe em períodos de maior movimento?",
              "Precisa realizar inventários ou contagens de estoque?",
              "Sua operação precisa de profissionais em finais de semana, feriados ou outros turnos?",
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

      {/* SEGURANÇA */}
      <section className="bg-navy py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                light
                align="left"
                eyebrow="Segurança e operação"
                title="Profissionais preparados para sua operação"
                description="A segurança e a organização fazem parte do trabalho da Expansion. Buscamos disponibilizar profissionais preparados para seguir os processos e as exigências de cada operação."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Orientação operacional",
                  "Uso de EPIs",
                  "Organização das equipes",
                  "Acompanhamento operacional",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Shield className="h-5 w-5 text-tangerine" />

                    <span className="text-sm font-medium text-cream/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-cream/5 p-8 text-center sm:p-12">
              <h2 className="font-display text-2xl font-bold text-cream">
                Cada operação tem uma necessidade diferente
              </h2>

              <p className="mt-4 text-lg text-cream/80">
                Conte para a Expansion como funciona sua operação e quais são
                suas necessidades. Nossa equipe poderá avaliar a demanda e
                apresentar uma solução adequada para sua empresa.
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
