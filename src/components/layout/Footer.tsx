export default function Footer() {
  return (
    <footer className="h-30 flex justify-between items-center py-3 px-6 border-t border-border bg-surface text-sm text-muted">
      <div className="flex gap-4">
        <p>© 2026 CineMetrics. Desenvolvido por Jean Lima.</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>API Conectada</span>
        </div>
      </div>

      <div className="flex gap-4">
        <span>Dados fornecidos por TMDB</span>
        <ul className="flex gap-4">
          <li>
            <a
              target="_blank"
              className="hover:text-foreground transition-colors hover:cursor-pointer"
              href="https://www.linkedin.com/in/jean-carlos-oliveira-lima-454460281/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="hover:text-foreground transition-colors hover:cursor-pointer"
              href="https://github.com/jeancarloslima/site-filmes"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
