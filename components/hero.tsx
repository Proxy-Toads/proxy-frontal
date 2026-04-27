"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { RobotFrogIcon } from "@/components/robot-frog-icon"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Automatización inteligente para tu negocio</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          Potencia tu empresa con{" "}
          <span className="text-primary">IA y Chatbots</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Creamos soluciones de automatización personalizadas que transforman la manera en que interactúas con tus clientes. Innovación, seguridad y eficiencia en cada interacción.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8 gap-2 group">
            Solicitar Demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 gap-2">
            <RobotFrogIcon className="w-4 h-4" />
            Ver Soluciones
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">+500</p>
            <p className="text-sm text-muted-foreground mt-1">Automatizaciones activas</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">99.9%</p>
            <p className="text-sm text-muted-foreground mt-1">Uptime garantizado</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">24/7</p>
            <p className="text-sm text-muted-foreground mt-1">Soporte disponible</p>
          </div>
        </div>
      </div>
    </section>
  )
}
