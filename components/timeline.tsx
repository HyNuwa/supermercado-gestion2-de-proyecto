import { CalendarDays, Flag } from 'lucide-react'

export function Timeline() {
  const phases = [
    { number: 1, title: 'Modelado de Negocio', description: 'Comprensión de la dinámica de ventas e identificación de cuellos de botella', weeks: 4 },
    { number: 2, title: 'Relevamiento de Requisitos', description: 'Identificación de necesidades y expectativas con los gerentes de sedes', weeks: 5 },
    { number: 3, title: 'Análisis & Diseño', description: 'Modelado de base de datos, diagramas UML y arquitectura de red VPN', weeks: 14 },
    { number: 4, title: 'Codificación e Implementación', description: 'Desarrollo de interfaz gráfica y módulos de validación de transacciones', weeks: 7 },
    { number: 5, title: 'Pruebas', description: 'Pruebas de estrés, verificación de sincronización y corrección de errores', weeks: 14 },
    { number: 6, title: 'Implementación en Sedes', description: 'Instalación física del hardware, capacitación del personal y documentación', weeks: 4 },
    { number: 7, title: 'Mantenimiento Post-Lanzamiento', description: 'Soporte técnico continuo y ajustes después del lanzamiento oficial', weeks: 8 },
  ]

  const total = 56
  let cumulative = 0

  return (
    <section id="timeline" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-medium text-primary">04 / Cronograma</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
              Plan de Trabajo
            </h2>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-primary/10 px-6 py-4">
              <CalendarDays className="h-4 w-4 text-primary mb-1" />
              <p className="text-2xl font-black text-primary leading-none">52</p>
              <p className="text-xs text-primary/60 mt-1">Semanas</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-muted px-6 py-4">
              <Flag className="h-4 w-4 text-foreground mb-1" />
              <p className="text-2xl font-black text-foreground leading-none">7</p>
              <p className="text-xs text-muted-foreground mt-1">Fases</p>
            </div>
          </div>
        </div>

        {/* Gantt bar */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-5 overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex gap-1.5 items-stretch h-10 mb-3">
              {phases.map((phase, idx) => {
                const width = (phase.weeks / total) * 100
                const isEven = idx % 2 === 0
                return (
                  <div
                    key={idx}
                    className={`group relative flex items-center justify-center rounded-lg overflow-hidden cursor-default ${isEven ? 'bg-primary' : 'bg-primary/30'}`}
                    style={{ width: `${width}%` }}
                    title={`${phase.title} — ${phase.weeks} semanas`}
                  >
                    <span className="text-[10px] font-semibold text-primary-foreground/80">{phase.number}</span>
                  </div>
                )
              })}
            </div>
            <div className="flex text-xs text-muted-foreground px-0.5">
              <span>Semana 1</span>
              <div className="flex-1" />
              <span>Semana 52</span>
            </div>
          </div>
        </div>

        {/* Phase list */}
        <div className="rounded-2xl border border-border overflow-hidden">
          {phases.map((phase, idx) => {
            const start = cumulative
            cumulative += phase.weeks
            const pct = Math.round((phase.weeks / 52) * 100)

            return (
              <div
                key={idx}
                className={`grid md:grid-cols-[72px_1fr_100px] items-stretch ${idx < phases.length - 1 ? 'border-b border-border' : ''} bg-card hover:bg-muted/30 transition-colors`}
              >
                {/* Phase number */}
                <div className="flex items-center justify-center p-4 border-r border-border">
                  <span className="text-lg font-black text-foreground/30 leading-none">
                    {String(phase.number).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 border-r border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-1">{phase.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground w-8 text-right">{pct}%</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex flex-col items-center justify-center p-5 text-center">
                  <span className="text-2xl font-black text-foreground leading-none">{phase.weeks}</span>
                  <span className="text-xs text-muted-foreground mt-1">semanas</span>
                  <span className="text-[10px] text-muted-foreground/50 mt-0.5">
                    s{start + 1}–s{cumulative}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
