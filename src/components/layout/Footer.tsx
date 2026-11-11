export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-sm text-muted">
      <div className="w-full max-w-250 mx-auto min-h-30 py-4 px-5 flex flex-col items-center justify-center gap-4 lg:gap-0 lg:flex-row lg:justify-between ">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <p>© 2026 CineMetrics. Desenvolvido por Jean Lima.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>API Conectada</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <span>Dados fornecidos por TMDB</span>
          <ul className="flex gap-4">
            <li>
              <a
                target="_blank"
                className="underline font-bold hover:text-foreground transition-colors hover:cursor-pointer"
                href="https://www.linkedin.com/in/jean-carlos-oliveira-lima-454460281/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="underline font-bold hover:text-foreground transition-colors hover:cursor-pointer"
                href="https://github.com/jeancarloslima/site-filmes"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
