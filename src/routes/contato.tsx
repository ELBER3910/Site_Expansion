import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { SectionHeading } from "../components/section-heading";

const SITE_URL = "https://www.expansionsolucoeslogistica.com.br";

/**
 * SEO DA PÁGINA DE CONTATO
 */
export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      {
        title: "Contato | Expansion Soluções Logísticas - Extrema MG",
      },
      {
        name: "description",
        content:
          "Fale com a Expansion Soluções Logísticas em Extrema-MG e solicite um orçamento para mão de obra, carga e descarga, separação, inventários e embalagens.",
      },

      {
        property: "og:title",
        content: "Contato | Expansion Soluções Logísticas - Extrema MG",
      },
      {
        property: "og:description",
        content:
          "Solicite um orçamento para serviços logísticos e mão de obra em Extrema-MG. Fale com a equipe da Expansion.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/contato`,
      },

      {
        name: "twitter:title",
        content: "Contato | Expansion Soluções Logísticas - Extrema MG",
      },
      {
        name: "twitter:description",
        content:
          "Entre em contato com a Expansion para serviços logísticos e mão de obra em Extrema-MG.",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: `${SITE_URL}/contato`,
      },
    ],
  }),

  component: ContactPage,
});

/**
 * INFORMAÇÕES DE CONTATO
 */
const contactInfo = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(35) 99952-3303",
    href: "https://wa.me/5535999523303",
    external: true,
  },
  {
    icon: Mail,
    label: "Comercial",
    value: "comercial@expansionsolucoeslogistica.com.br",
    href: "mailto:comercial@expansionsolucoeslogistica.com.br",
  },
  {
    icon: Mail,
    label: "Vendas",
    value: "vendas@expansionsolucoeslogistica.com.br",
    href: "mailto:vendas@expansionsolucoeslogistica.com.br",
  },
  {
    icon: Mail,
    label: "Financeiro",
    value: "financeiro@expansionsolucoeslogistica.com.br",
    href: "mailto:financeiro@expansionsolucoeslogistica.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Extrema-MG e região",
    href: null,
  },
  {
    icon: Clock,
    label: "Atendimento",
    value: "24 horas, 7 dias por semana",
    href: null,
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  /**
   * ENVIO DO FORMULÁRIO
   *
   * Mantém o webhook original utilizado pelo projeto.
   */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(
        "https://api.techintelligency.com.br/webhook/site_form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            source: "site-expansion",
            submittedAt: new Date().toISOString(),
          }),
        },
      );

      if (!res.ok) {
        throw new Error("Falha no envio");
      }

      setSent(true);
    } catch (err) {
      console.error(err);

      setError(
        "Não foi possível enviar sua mensagem. Tente novamente ou fale conosco pelo WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Fale com a Expansion"
            title="Solicite um orçamento para sua operação logística"
            description="Conte para nossa equipe sobre a necessidade da sua empresa. Atendemos demandas de mão de obra e serviços logísticos em Extrema-MG e região."
          />
        </div>
      </section>

      {/* CONTATO + FORMULÁRIO */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* COLUNA DE CONTATO */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Canais de atendimento
              </h2>

              <p className="mt-3 text-muted-foreground">
                Estamos prontos para entender sua demanda e encontrar uma
                solução adequada para sua operação.
              </p>

              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => {
                  const content = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <item.icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </div>

                        <div className="mt-1 text-sm font-semibold text-foreground">
                          {item.value}
                        </div>
                      </div>
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={`${item.label}-${item.value}`}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={`${item.label}-${item.value}`}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* WHATSAPP */}
              <div className="mt-8 rounded-2xl bg-navy p-6 text-primary-foreground">
                <h3 className="font-display text-lg font-bold">
                  Precisa falar com nossa equipe?
                </h3>

                <p className="mt-2 text-sm text-cream/80">
                  Entre em contato pelo WhatsApp e informe sua necessidade,
                  quantidade de profissionais, local e período da operação.
                </p>

                <a
                  href="https://wa.me/5535999523303"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-tangerine px-6 py-2.5 text-sm font-bold text-cream transition-all hover:bg-tangerine-light"
                >
                  <Phone className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tangerine/10 text-tangerine">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <h2 className="mt-5 font-display text-2xl font-bold text-card-foreground">
                    Mensagem enviada!
                  </h2>

                  <p className="mt-2 max-w-md text-muted-foreground">
                    Agradecemos o contato. Nossa equipe vai analisar sua
                    solicitação e retornar para conversar sobre sua demanda.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);

                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Enviar nova mensagem
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
                >
                  <div>
                    <h2 className="font-display text-2xl font-bold text-card-foreground">
                      Conte sobre sua necessidade
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Preencha os dados abaixo para que nossa equipe possa
                      entender melhor sua operação.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {/* NOME */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-foreground"
                      >
                        Nome completo
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            name: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="Seu nome"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-foreground"
                      >
                        E-mail
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="seu@email.com"
                      />
                    </div>

                    {/* EMPRESA */}
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-semibold text-foreground"
                      >
                        Empresa
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            company: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="Nome da empresa"
                      />
                    </div>

                    {/* TELEFONE */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-foreground"
                      >
                        Telefone / WhatsApp
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            phone: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="(35) 99999-9999"
                      />
                    </div>

                    {/* SERVIÇO */}
                    <div className="space-y-2 sm:col-span-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-semibold text-foreground"
                      >
                        Serviço de interesse
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            service: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus:border-ring focus:ring-2 focus:ring-ring"
                      >
                        <option value="">
                          Selecione um serviço
                        </option>

                        <option value="mao-de-obra">
                          Mão de Obra para Operações Logísticas
                        </option>

                        <option value="carga-descarga">
                          Carga e Descarga
                        </option>

                        <option value="separacao">
                          Separação de Pedidos e Picking
                        </option>

                        <option value="embalagens">
                          Embalagens e Etiquetagem
                        </option>

                        <option value="inventarios">
                          Inventários e Contagem de Estoque
                        </option>

                        <option value="equipe-24h">
                          Equipe para Operações 24 Horas
                        </option>

                        <option value="outro">
                          Outro
                        </option>
                      </select>
                    </div>

                    {/* MENSAGEM */}
                    <div className="space-y-2 sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold text-foreground"
                      >
                        Mensagem
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            message: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="Conte sobre sua demanda: quantidade de profissionais, local, turnos, período e tipo de operação."
                      />
                    </div>
                  </div>

                  {/* ERRO */}
                  {error && (
                    <div
                      role="alert"
                      className="mt-4 rounded-xl border border-destructive/20 bg-destructive/5 p-4"
                    >
                      <p className="text-sm font-semibold text-destructive">
                        {error}
                      </p>
                    </div>
                  )}

                  {/* BOTÃO */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {submitting
                      ? "Enviando..."
                      : "Solicitar orçamento"}

                    <Send className="h-5 w-5" />
                  </button>

                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    Ao enviar o formulário, você concorda em receber nosso
                    contato por telefone, WhatsApp ou e-mail relacionado à
                    sua solicitação.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO LOCAL / ÁREA DE ATENDIMENTO */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <MapPin className="mx-auto h-8 w-8 text-tangerine" />

            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Soluções logísticas em Extrema-MG
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A Expansion atende empresas que precisam de apoio em operações
              logísticas, carga e descarga, separação de pedidos, inventários,
              embalagens e mão de obra para diferentes demandas operacionais
              em Extrema-MG e região.
            </p>

            <a
              href="https://wa.me/5535999523303"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-tangerine px-7 py-3.5 text-base font-bold text-cream shadow-lg shadow-tangerine/25 transition-all hover:bg-tangerine-light"
            >
              <Phone className="h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
