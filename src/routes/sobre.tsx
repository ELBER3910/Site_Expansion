import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Eye,
  Heart,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { SectionHeading } from "../components/section-heading";

const SITE_URL = "https://www.expansionsolucoeslogistica.com.br";

/**
 * SEO DA PÁGINA SOBRE
 */
export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      {
        title: "Sobre a Expansion | Soluções Logísticas em Extrema MG",
      },
      {
        name: "description",
        content:
          "Conheça a Expansion Soluções em Logística, empresa de Extrema-MG especializada em mão de obra e apoio para operações logísticas, industriais e serviços.",
      },

      {
        property: "og:title",
        content: "Sobre a Expansion | Soluções Logísticas em Extrema MG",
      },
      {
        property: "og:description",
        content:
          "Conheça a Expansion e nossas soluções em mão de obra para operações logísticas, industriais e serviços de apoio.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/sobre`,
      },

      {
        name: "twitter:title",
        content: "Sobre a Expansion | Soluções Logísticas em Extrema MG",
      },
      {
        name: "twitter:description",
        content:
          "Conheça a Expansion e nossas soluções para operações logísticas em Extrema-MG e região.",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: `${SITE_URL}/sobre`,
      },
    ],
  }),

  component: AboutPage,
});

/**
 * VALORES DA EMPRESA
 */
const values = [
  {
    icon: Target,
    title: "Compromisso",
    description:
      "Trabalhamos com seriedade e organização para atender às necessidades de cada operação e cumprir os acordos estabelecidos com nossos clientes.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Mantemos uma comunicação clara e próxima com nossos clientes durante todas as etapas da prestação dos serviços.",
  },
  {
    icon: Heart,
    title: "Valorização das pessoas",
    description:
      "Valorizamos os profissionais que fazem parte das nossas operações, incentivando responsabilidade, respeito e desenvolvimento.",
  },
  {
    icon: Award,
    title: "Excelência operacional",
    description:
      "Buscamos melhorar continuamente nossos processos para oferecer operações mais organizadas, eficientes e seguras.",
  },
];

function AboutPage() {
  return (
    <>
      {/* APRESENTAÇÃO */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quem somos"
            title="Expansion Soluções em Logística"
            description="Somos uma empresa de Extrema-MG especializada em fornecer profissionais e soluções para operações logísticas, industriais e serviços de apoio, com foco em agilidade, organização e continuidade operacional."
          />
        </div>
      </section>

      {/* SOBRE A EXPANSION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Uma parceira para sua operação logística
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground">
                A Expansion nasceu com o propósito de conectar empresas aos
                profissionais certos, oferecendo agilidade, organização e
                suporte para diferentes necessidades operacionais.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Atuamos como parceiros de nossos clientes, apoiando operações
                que exigem rapidez, flexibilidade e profissionais preparados
                para atividades como carga e descarga, separação de pedidos,
                embalagens, inventários e serviços de apoio.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Com atuação a partir de Extrema-MG, buscamos entender as
                características de cada empresa para disponibilizar equipes
                de acordo com a necessidade de cada operação.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Nosso compromisso é contribuir para a continuidade e a
                produtividade das operações por meio de pessoas qualificadas
                e de um atendimento próximo, transparente e eficiente.
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Atendimento 24 horas",
                  "Profissionais preparados",
                  "Flexibilidade operacional",
                  "Acompanhamento das operações",
                  "Atendimento personalizado",
                  "Suporte dedicado",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <CheckCircle className="h-5 w-5 text-tangerine" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* INDICADORES */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-tangerine/10 blur-2xl" />

              <div className="relative space-y-6">
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="font-display text-4xl font-bold text-primary">
                    +200
                  </div>

                  <div className="mt-1 text-muted-foreground">
                    Colaboradores ativos
                  </div>
                </div>

                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="font-display text-4xl font-bold text-primary">
                    +10
                  </div>

                  <div className="mt-1 text-muted-foreground">
                    Empresas atendidas
                  </div>
                </div>

                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="font-display text-4xl font-bold text-primary">
                    24/7
                  </div>

                  <div className="mt-1 text-muted-foreground">
                    Atendimento contínuo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nossos valores"
            title="O que nos guia no dia a dia"
            description="Compromisso, transparência, respeito às pessoas e melhoria contínua fazem parte da forma como conduzimos nossas operações."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>

                <h2 className="font-display text-lg font-bold text-card-foreground">
                  {value.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREA DE ATUAÇÃO */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              eyebrow="Nossa atuação"
              title="Soluções logísticas em Extrema-MG"
              description="A Expansion está preparada para apoiar empresas que precisam reforçar suas operações com profissionais para diferentes atividades e períodos de demanda."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Centros de distribuição",
                "Operações industriais",
                "Armazéns e estoques",
                "Carga e descarga",
                "Separação de pedidos",
                "Inventários e embalagens",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <CheckCircle className="mx-auto h-6 w-6 text-tangerine" />

                  <p className="mt-3 font-display font-semibold text-card-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-16 sm:py-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-tangerine/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-tangerine/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Vamos expandir sua operação?
              </h2>

              <p className="mt-4 text-lg text-primary-foreground/80">
                Entre em contato com a Expansion e descubra como podemos
                apoiar sua empresa com profissionais e soluções para sua
                operação logística.
              </p>

              <Link
                to="/contato"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-tangerine px-7 py-3.5 text-base font-bold text-cream shadow-lg shadow-tangerine/25 transition-all hover:bg-tangerine-light"
              >
                Fale conosco
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
