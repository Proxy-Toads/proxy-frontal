import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, MessageSquare, Workflow, BrainCircuit, Settings2 } from "lucide-react"
import { RobotFrogIcon } from "@/components/robot-frog-icon"

const services = [
  {
    icon: RobotFrogIcon,
    title: "Chatbots Inteligentes",
    description: "Asistentes virtuales que entienden y responden como humanos, disponibles 24/7 para tus clientes."
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description: "Optimiza tareas repetitivas y libera a tu equipo para trabajos de mayor valor."
  },
  {
    icon: BrainCircuit,
    title: "IA Personalizada",
    description: "Soluciones de inteligencia artificial adaptadas específicamente a las necesidades de tu negocio."
  },
  {
    icon: MessageSquare,
    title: "Atención Multicanal",
    description: "Integración perfecta con WhatsApp, Telegram, Web y más plataformas."
  },
  {
    icon: Zap,
    title: "Respuestas Instantáneas",
    description: "Reduce tiempos de espera y mejora la satisfacción del cliente con respuestas inmediatas."
  },
  {
    icon: Settings2,
    title: "Integración Total",
    description: "Conectamos con tu CRM, ERP y herramientas existentes sin fricción."
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Soluciones que transforman tu negocio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos un ecosistema completo de automatizaciones inteligentes diseñadas para escalar contigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
