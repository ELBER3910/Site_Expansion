import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { WhatsAppButton } from "../components/whatsapp-button";

const SITE_URL = "https://www.expansionsolucoeslogistica.com.br";

/**
 * DADOS ESTRUTURADOS - SCHEMA.ORG
 *
 * Ajuda mecanismos de busca a entenderem que este site
 * pertence à Expansion Soluções em Logística.
 *
 * Foram utilizados apenas dados conhecidos da empresa.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Expansion Soluções em Logística",

  alternateName: "Expansion Soluções Logísticas",

  url: `${SITE_URL}/`,

  logo: `${SITE_URL}/expansion-logo-vps.png`,

  description:
    "Empresa de soluções logísticas e mão de obra para carga e descarga, separação de pedidos, inventários, embalagens e operações logísticas.",

  telephone: "+55 35 99952-3303",

  email: "comercial@expansionsolucoeslogistica.com.br",

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55 35 99952-3303",
      contactType: "customer service",
      email: "comercial@expansionsolucoeslogistica.com.br",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],

  areaServed: {
    "@type": "City",
    name: "Extrema",
    containedInPlace: {
      "@type": "State",
      name: "Minas Gerais",
    },
  },
};

/**
 * PÁGINA 404
 */
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">
          404
        </h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * PÁGINA DE ERRO
 */
function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar atualizar ou voltar
          ao início.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * CONFIGURAÇÃO PRINCIPAL DA APLICAÇÃO
 */
export const Route =
  createRootRouteWithContext<{
    queryClient: QueryClient;
  }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title:
            "Expansion Soluções Logísticas | Logística em Extrema MG",
        },

        {
          name: "description",
          content:
            "Mão de obra e soluções logísticas em Extrema-MG. Carga e descarga, separação de pedidos, inventários, embalagens e equipes para operações logísticas.",
        },

        {
          name: "author",
          content: "Expansion Soluções em Logística",
        },

        /**
         * INDEXAÇÃO
         */
        {
          name: "robots",
          content: "index, follow",
        },

        {
          name: "googlebot",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },

        /**
         * OPEN GRAPH
         */
        {
          property: "og:title",
          content: "Expansion Soluções Logísticas | Extrema MG",
        },

        {
          property: "og:description",
          content:
            "Soluções logísticas e mão de obra para empresas em Extrema-MG e região.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:site_name",
          content: "Expansion Soluções em Logística",
        },

        {
          property: "og:locale",
          content: "pt_BR",
        },

        {
          property: "og:url",
          content: `${SITE_URL}/`,
        },

        /**
         * TWITTER / X
         */
        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content: "Expansion Soluções Logísticas | Extrema MG",
        },

        {
          name: "twitter:description",
          content:
            "Soluções logísticas e mão de obra para empresas em Extrema-MG e região.",
        },
      ],

      links: [
        /**
         * CSS
         */
        {
          rel: "stylesheet",
          href: appCss,
        },

        /**
         * FAVICON
         */
        {
          rel: "icon",
          href: "/favicon.jpg",
          type: "image/jpg",
        },

        /**
         * FONTES
         */
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,

    component: RootComponent,

    notFoundComponent: NotFoundComponent,

    errorComponent: ErrorComponent,
  });

/**
 * HTML PRINCIPAL
 */
function RootShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />

        {/*
          Dados estruturados Schema.org.
          O JSON-LD não aparece visualmente no site.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}

/**
 * ESTRUTURA VISUAL PRINCIPAL
 */
function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          <Outlet />
        </main>

        <SiteFooter />

        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
