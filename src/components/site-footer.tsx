import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const logoAsset = "/expansion-logo-vps.png";

const footerLinks = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

const services = [
  "Mão de Obra Temporária",
  "Carga e Descarga",
  "Separação de Pedidos",
  "Embalagens",
  "Inventários",
  "Equipe 24 Horas",
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/60 bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-xl bg-white p-4">
              <img
                src={logoAsset}
                alt="Expansion Soluções em Logística"
                loading="eager"
                className="h-16 w-auto"
              />
            </div>

            <p className="text-sm leading-relaxed text-cream/80">
              Mão de obra especializada para operações logísticas, com equipe disponível 24 horas
              para atender sua empresa com agilidade e segurança.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-cream/90">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/70 transition-colors hover:text-tangerine-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-cream/90">
              Serviços
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/servicos"
                    className="text-sm text-cream/70 transition-colors hover:text-tangerine-light"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-cream/90">
              Contato
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-tangerine" />
                <span>(35) 99952-3303</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-tangerine" />
                <span>expansionex@hotmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tangerine" />
                <span>Extrema, MG — atendemos em região</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-tangerine" />
                <span>Atendimento 24 horas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-sm text-cream/60">
          © {new Date().getFullYear()} Expansion Soluções em Logística. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
