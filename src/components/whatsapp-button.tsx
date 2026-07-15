export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5535999523303"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center rounded-full bg-whatsapp p-4 text-whatsapp-foreground shadow-xl shadow-whatsapp/30 transition-all duration-300 ease-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="pointer-events-none absolute -inset-1 rounded-full bg-whatsapp/40 animate-whatsapp-pulse" />
      <span className="relative flex h-6 w-6 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M12 2.001c5.522 0 10.001 4.478 10.001 10.001 0 5.522-4.479 10.001-10.001 10.001-1.761 0-3.401-.455-4.841-1.255l-3.818 1.252 1.252-3.818C3.455 17.401 3 15.761 3 14.002 3 8.479 7.478 2.001 12 2.001zm4.398 6.399c-.187-.095-1.108-.54-1.28-.6-.17-.06-.296-.09-.42.09-.124.18-.483.586-.593.706-.11.12-.22.134-.41.045-.19-.09-.803-.296-1.53-.944-.565-.506-.946-1.131-1.057-1.322-.11-.19-.01-.293.08-.386.09-.093.2-.23.296-.344.098-.113.13-.194.195-.323.064-.128.033-.239-.015-.335-.05-.096-.442-1.041-.607-1.418-.16-.372-.326-.322-.446-.322-.12 0-.26-.015-.398-.015-.138 0-.365.051-.558.252-.192.2-.735.686-.735 1.672 0 .986.72 1.94.82 2.075.1.135 1.41 2.15 3.414 3.016.478.206.85.329 1.14.42.48.153.916.13 1.26.08.385-.057 1.186-.486 1.353-.953.168-.468.168-.87.117-.99-.05-.12-.186-.19-.39-.333z" />
        </svg>
      </span>
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[12rem] group-hover:px-1 group-hover:opacity-100 md:inline-block">
        Fale no WhatsApp
      </span>
    </a>
  );
}
