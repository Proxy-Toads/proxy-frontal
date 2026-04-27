import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-secondary to-primary/5 p-8 md:p-16 text-center overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-pretty">
              Agenda una demo gratuita y descubre cómo nuestras soluciones de IA pueden transformar la eficiencia de tu empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 gap-2 group">
                Agendar Demo Gratuita
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Contactar Ventas
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-6">
              Sin compromiso · Respuesta en menos de 24h · Soporte en español
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
