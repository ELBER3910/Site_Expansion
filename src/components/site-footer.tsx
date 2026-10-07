import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const currentYear = new Date().getFullYear();

const services = [
  "Carga e Descarga",
  "Mão de Obra para Operações Logísticas",
  "Separação de Pedidos e Picking",
  "Inventários e Contagem de Estoque",
  "Embalagens e Etiquetagem",
  "Equipe para Operações 24 Horas",
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-cream">
      {/* CONTEÚDO PRINCIPAL */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* EMPRESA */}
          <div>
            <Link
              to="/"
              aria-label="Expansion Soluções em Logística - Página inicial"
              className="inline-flex items-center"
            >
              <img
                src="/expansion-logo-vps.png"
                alt="Expansion Soluções em Logística"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              A Expansion Soluções em Logística oferece mão de obra e apoio
              para operações logísticas, industriais e serviços em Extrema-MG
              e região.
            </p>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
              Profissionais preparados para carga e descarga, separação de
              pedidos, inventários, embalagens e diferentes demandas
              operacionais.
            </p>
          </div>

          {/* SERVIÇOS */}
          <div>
            <h2 className="font-display text-base font-bold text-cream">
              Serviços
            </h2>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/servicos"
                    className="text-sm text-cream/70 transition-colors hover:text-tangerine"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h2 className="font-display text-base font-bold text-cream">
              Navegação
            </h2>

            <nav
              className="mt-5"
              aria-label="Navegação do rodapé"
            >
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-cream/70 transition-colors hover:text-tangerine"
                  >
                    Início
                  </Link>
                </li>

                <li>
                  <Link
                    to="/servicos"
                    className="text-sm text-cream/70 transition-colors hover:text-tangerine"
                  >
                    Serviços
                  </Link>
                </li>

                <li>
                  <Link
                    to="/sobre"
                    className="text-sm text-cream/70 transition-colors hover:text-tangerine"
                  >
                    Sobre a Expansion
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contato"
                    className="text-sm text-cream/70 transition-colors hover:text-tangerine"
                  >
                    Contato
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contato"
                    className="font-semibold text-tangerine transition-colors hover:text-tangerine-light"
                  >
                    Solicitar Orçamento
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* CONTATO */}
          <div>
            <h2 className="font-display text-base font-bold text-cream">
              Fale com a Expansion
            </h2>

            <div className="mt-5 space-y-4">

              {/* TELEFONE / WHATSAPP */}
              <a
                href="https://wa.me/5535999523303"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
                aria-label="Falar com a Expansion pelo WhatsApp"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-tangerine" />

                <div>
                  <span className="block text-xs text-cream/50">
                    Telefone / WhatsApp
                  </span>

                  <span className="text-sm font-medium text-cream/80 transition-colors group-hover:text-tangerine">
                    (35) 99952-3303
                  </span>
                </div>
              </a>

              {/* COMERCIAL */}
              <a
                href="mailto:comercial@expansionsolucoeslogistica.com.br"
                className="group flex items-start gap-3"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-tangerine" />

                <div className="min-w-0">
                  <span className="block text-xs text-cream/50">
                    Comercial
                  </span>

                  <span className="break-all text-sm font-medium text-cream/80 transition-colors group-hover:text-tangerine">
                    comercial@expansionsolucoeslogistica.com.br
                  </span>
                </div>
              </a>

              {/* VENDAS */}
              <a
                href="mailto:vendas@expansionsolucoeslogistica.com.br"
                className="group flex items-start gap-3"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-tangerine" />

                <div className="min-w-0">
                  <span className="block text-xs text-cream/50">
                    Vendas
                  </span>

                  <span className="break-all text-sm font-medium text-cream/80 transition-colors group-hover:text-tangerine">
                    vendas@expansionsolucoeslogistica.com.br
                  </span>
                </div>
              </a>

              {/* FINANCEIRO */}
              <a
                href="mailto:financeiro@expansionsolucoeslogistica.com.br"
                className="group flex items-start gap-3"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-tangerine" />

                <div className="min-w-0">
                  <span className="block text-xs text-cream/50">
                    Financeiro
                  </span>

                  <span className="break-all text-sm font-medium text-cream/80 transition-colors group-hover:text-tangerine">
                    financeiro@expansionsolucoeslogistica.com.br
                  </span>
                </div>
              </a>

              {/* LOCALIZAÇÃO */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-tangerine" />

                <div>
                  <span className="block text-xs text-cream/50">
                    Localização
                  </span>

                  <span className="text-sm font-medium text-cream/80">
                    Extrema-MG e região
                  </span>
                </div>
              </div>

              {/* HORÁRIO */}
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-tangerine" />

                <div>
                  <span className="block text-xs text-cream/50">
                    Atendimento
                  </span>

                  <span className="text-sm font-medium text-cream/80">
                    24 horas, 7 dias por semana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-xs text-cream/50">
            © {currentYear} Expansion Soluções em Logística. Todos os direitos
            reservados.
          </p>

          <p className="text-xs text-cream/50">
            Soluções logísticas e mão de obra em Extrema-MG.
          </p>
        </div>
      </div>
    </footer>
  );
}
