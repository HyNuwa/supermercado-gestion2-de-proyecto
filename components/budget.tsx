import { Server, Code2, Users, TrendingUp, DollarSign, BarChart2, Percent, BadgeCheck, Boxes, Gauge, LineChart, ArrowUpRight } from 'lucide-react'

export function Budget() {
  const budgetItems = [
    { category: 'Hardware', amount: '$31.263.892', percentage: 20, details: '16 TPV + Servidores + Routers + UPS + Accesorios', icon: Server },
    { category: 'Software', amount: '$8.4 — $22.7 M', percentage: 10, details: 'MySQL Enterprise + Debian + Desarrollo + Google AI', icon: Code2 },
    { category: 'Recursos Humanos', amount: '$111.072.961', percentage: 70, details: '9 perfiles especializados (12 colaboradores) durante el desarrollo', icon: Users },
  ]

  const benefits = [
    { icon: BadgeCheck, title: 'Reduccion de Errores', stat: '−90%', description: 'Automatización de lectura de códigos de barras elimina errores manuales' },
    { icon: Boxes, title: 'Control de Stock', stat: '4 sedes', description: 'Sincronización en tiempo real minimiza pérdidas por desabastecimiento' },
    { icon: Gauge, title: 'Velocidad de Proceso', stat: '<5 seg', description: 'Tiempo de respuesta mejorado en punto de venta para mayor flujo' },
    { icon: LineChart, title: 'Toma de Decisiones', stat: '+35%', description: 'Reportes consolidados en tiempo real para decisiones estratégicas' },
  ]

  return (
    <section id="budget" className="border-b border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium text-primary">05 / Presupuesto</p>
          <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
            Analisis de Presupuesto
          </h2>
        </div>

        {/* Budget cards */}
        <div className="mb-5 grid md:grid-cols-3 gap-4">
          {budgetItems.map((item, idx) => {
            const Icon = item.icon
            const circumference = 2 * Math.PI * 38
            const dash = (item.percentage / 100) * circumference
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1">
                    <Percent className="h-3 w-3 text-primary" />
                    <span className="text-sm font-semibold text-primary">{item.percentage}</span>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-1">{item.category}</h3>
                <p className="text-xs text-muted-foreground mb-5">{item.details}</p>

                {/* Donut + amount */}
                <div className="flex items-center gap-4">
                  <svg className="h-14 w-14 flex-shrink-0" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" fill="none" stroke="oklch(0.91 0.004 264)" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="oklch(0.42 0.18 264)"
                      strokeWidth="10"
                      strokeDasharray={`${dash} ${circumference}`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <p className="text-xl font-black text-foreground leading-tight">{item.amount}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Total box */}
        <div className="mb-16 rounded-2xl border border-border bg-accent-foreground p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <h3 className="text-base font-semibold text-primary">Inversion Total Estimada</h3>
            </div>
            <p className="text-sm text-primary/55 max-w-sm leading-relaxed">
              Rango de presupuesto requerido para implementacion completa del sistema en 4 sedes.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/30 p-6 text-center">
            <p className="text-4xl font-black text-primary leading-none">$150.7 — $165.0 M</p>
            <p className="text-xs text-primary/40 mt-2">Pesos Argentinos</p>
          </div>
        </div>

      </div>
    </section>
  )
}
