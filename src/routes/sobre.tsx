import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeading } from "../components/section-heading";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Expansion Soluções em Logística" },
      {
        name: "description",
        content:
          "Conheça a Expansion Soluções em Logística: empresa especializada em mão de obra temporária para carga, descarga, separação, embalagens e inventários.",
      },
      { property: "og:title", content: "Sobre — Expansion Soluções em Logística" },
      {
        property: "og:description",
        content:
          "Expansion: especialistas em mão de obra temporária para operações logísticas com equipe 24h.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Compromisso",
    description:
      "Cumprimos prazos e acordos com seriedade, entregando colaboradores no local e horário combinados.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Comunicação clara em todas as etapas: orçamento, escala, substituições e relatórios de operação.",
  },
  {
    icon: Heart,
    title: "Valorização das pessoas",
    description:
      "Investimos no bem-estar e no desenvolvimento dos nossos colaboradores, porque equipe motivada entrega mais.",
  },
  {
    icon: Award,
    title: "Excelência operacional",
    description:
      "Buscamos a melhoria contínua dos processos para reduzir custos, aumentar segurança e garantir qualidade.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quem somos"
            title="Expansion Soluções em Logística"
            description="Somos uma empresa especializada em fornecer mão de obra temporária qualificada para operações logísticas, com foco em agilidade, segurança e disponibilidade 24 horas."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                A Expansion nasceu para conectar empresas aos profissionais certos, oferecendo
                agilidade, segurança e excelência na prestação de serviços.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Atuamos como parceiros estratégicos de nossos clientes, apoiando operações que
                exigem rapidez, flexibilidade e qualidade na disponibilização de mão de obra.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nosso compromisso é entregar resultados por meio de pessoas qualificadas e de um
                atendimento próximo, transparente e eficiente.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Atuação nacional",
                  "Equipe 24h",
                  "Profissionais treinados",
                  "Processos auditados",
                  "Relatórios de operação",
                  "Suporte dedicado",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-tangerine" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-tangerine/10 blur-2xl" />
              <div className="relative space-y-6">
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="font-display text-4xl font-bold text-primary">+200</div>
                  <div className="mt-1 text-muted-foreground">Colaboradores ativos</div>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="font-display text-4xl font-bold text-primary">+10</div>
                  <div className="mt-1 text-muted-foreground">Empresas atendidas</div>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="font-display text-4xl font-bold text-primary">24/7</div>
                  <div className="mt-1 text-muted-foreground">Atendimento contínuo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nossos valores"
            title="O que nos guia no dia a dia"
            description="Cultura forte, processos claros e respeito às pessoas são a base de cada operação que entregamos."
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
                <h3 className="font-display text-lg font-bold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-16 sm:py-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-tangerine/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-tangerine/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Vamos expandir sua operação?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Entre em contato e descubra como podemos reforçar sua equipe com segurança e
                agilidade.
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
