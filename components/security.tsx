import { Shield, Lock, Eye, Server } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Cifrado de Extremo a Extremo",
    description: "Toda la comunicación está protegida con cifrado AES-256."
  },
  {
    icon: Lock,
    title: "Cumplimiento GDPR",
    description: "Cumplimos con todas las normativas de protección de datos."
  },
  {
    icon: Eye,
    title: "Privacidad Total",
    description: "Tus datos nunca se comparten con terceros sin tu consentimiento."
  },
  {
    icon: Server,
    title: "Servidores Seguros",
    description: "Infraestructura alojada en centros de datos certificados ISO 27001."
  }
]

export function Security() {
  return (
    <section id="seguridad" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Seguridad</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Tu tranquilidad es nuestra prioridad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Implementamos los más altos estándares de seguridad para proteger tu información y la de tus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
