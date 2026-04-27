import { RobotFrogIcon } from "@/components/robot-frog-icon"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <RobotFrogIcon className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">ProxyToads</span>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Términos
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Soporte
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 ProxyToads. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
