import { Check } from "lucide-react"

const benefits = [
  "Reducción del 70% en tiempos de respuesta",
  "Disponibilidad 24 horas, 7 días a la semana",
  "Escalabilidad sin límites de usuarios",
  "Análisis y métricas en tiempo real",
  "Personalización completa de la experiencia",
  "Integración con más de 100 plataformas"
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Beneficios</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Por qué elegir ProxyToads
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Nos diferenciamos por nuestra capacidad de entender tu negocio y crear soluciones que realmente generan impacto. No vendemos productos genéricos, diseñamos herramientas a tu medida.
            </p>
            
            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Abstract tech visualization */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-secondary to-primary/5 border border-border p-8 relative overflow-hidden">
              {/* Circuit-like pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              {/* Floating elements */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-pulse">
                  <span className="text-4xl font-bold text-primary">AI</span>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Bot</span>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Auto</span>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">ML</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Tecnología de vanguardia<br />para tu negocio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
