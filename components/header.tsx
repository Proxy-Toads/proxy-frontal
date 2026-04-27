"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { RobotFrogIcon } from "@/components/robot-frog-icon"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <RobotFrogIcon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ProxyToads</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Beneficios
            </a>
            <a href="#seguridad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Seguridad
            </a>
            <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Empezar Ahora</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </a>
              <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Beneficios
              </a>
              <a href="#seguridad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Seguridad
              </a>
              <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
              <Button className="w-full mt-2">Empezar Ahora</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
