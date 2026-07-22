import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/section-heading";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Expansion Soluções em Logística" },
      {
        name: "description",
        content:
          "Entre em contato com a Expansion Soluções em Logística. Solicite um orçamento para mão de obra temporária, carga e descarga, separação, embalagens e inventários.",
      },
      { property: "og:title", content: "Contato — Expansion Soluções em Logística" },
      {
        property: "og:description",
        content:
          "Solicite um orçamento para mão de obra temporária e serviços logísticos. Atendimento 24 horas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContactPage,
});

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(35) 99952-3303",
    href: "tel:+5535999523303",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "expansionex@hotmail.com",
    href: "mailto:expansionex@hotmail.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Extrema, MG — atendemos em região",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horário de atendimento",
    value: "24 horas, 7 dias por semana",
    href: "#",
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://api.techintelligency.com.br/webhook/site_form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "site-expansion",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setSent(true);
    } catch (err) {
      setError("Não foi possível enviar. Tente novamente ou fale por WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Fale conosco"
            title="Solicite um orçamento personalizado"
            description="Preencha o formulário abaixo ou entre em contato diretamente. Nossa equipe responde em poucas horas."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Canais de atendimento
              </h2>
              <p className="mt-3 text-muted-foreground">
                Estamos prontos para entender sua demanda e montar a equipe ideal.
              </p>
              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-navy p-6 text-primary-foreground">
                <h3 className="font-display text-lg font-bold">Resposta rápida</h3>
                <p className="mt-2 text-sm text-cream/80">
                  Orçamentos emergenciais são analisados em até 2 horas. Demandas programadas recebem
                  proposta em até 24 horas.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tangerine/10 text-tangerine">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-card-foreground">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 max-w-md text-muted-foreground">
                    Agradecemos o contato. Nossa equipe vai analisar sua demanda e retornar em breve
                    com uma proposta.
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
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground">
                        Nome completo
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-foreground">
                        Empresa
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                        Telefone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="(35) 99952-3303"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="service" className="text-sm font-semibold text-foreground">
                        Serviço de interesse
                      </label>
                      <select
                        id="service"
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus:border-ring focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="mao-de-obra">Mão de Obra Temporária</option>
                        <option value="carga-descarga">Carga e Descarga</option>
                        <option value="separacao">Separação de Pedidos</option>
                        <option value="embalagens">Embalagens</option>
                        <option value="inventarios">Inventários</option>
                        <option value="equipe-24h">Equipe 24 Horas</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring"
                        placeholder="Conte-nos sobre sua demanda: volume, local, turnos e prazo."
                      />
                    </div>
                  </div>
                  {error && (
                    <p className="mt-4 text-sm font-semibold text-destructive">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? "Enviando..." : "Enviar mensagem"}
                    <Send className="h-5 w-5" />
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Ao enviar, você concorda em receber nosso contato por e-mail ou telefone sobre
                    sua solicitação.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
