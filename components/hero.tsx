import {
  ArrowRight,
  Server,
  ShoppingCart,
  BarChart2,
  Wifi,
  Users,
  Clock,
  Zap,
} from 'lucide-react'

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">

          {/* Left column */}
          <div className="space-y-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2 flex-wrap">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                Modelado Orientado a Objetos
              </span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-sm font-medium text-muted-foreground">
                Trabajo Final — Grupo 14
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-black leading-[1.0] tracking-tight text-foreground text-balance">
              Sistema de Gestion Unificado para Supermercado
            </h1>

            {/* Description */}
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Automatizacion integral para cadena mayorista con 4 sedes — control de stock en tiempo real, puntos de venta y gestion centralizada.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#intro"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background hover:bg-foreground/85 transition-colors"
              >
                Ver Propuesta <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#members"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Ver Integrantes
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex gap-6 pt-2">
              {[
                { val: '1 año', label: 'Plazo', icon: Clock },
                { val: '4 sedes', label: 'Alcance', icon: Wifi },
                { val: '<5 seg', label: 'Respuesta', icon: Zap },
              ].map(({ val, label, icon: Icon }, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-none text-foreground">{val}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — minimal bento */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: ShoppingCart,
                title: 'Punto de Venta',
                desc: '16 TPV con lector de código de barras',
                num: '16',
                accent: true,
              },
              {
                icon: Server,
                title: 'Servidor Central',
                desc: 'LENOVO SR650 V4 Intel Xeon',
                num: '01',
                accent: false,
              },
              {
                icon: BarChart2,
                title: 'Stock en Tiempo Real',
                desc: 'Sincronizacion entre todas las sedes',
                num: '∞',
                accent: false,
              },
              {
                icon: Users,
                title: 'Profesionales',
                desc: 'Equipo técnico especializado',
                num: '10',
                accent: false,
              },
            ].map(({ icon: Icon, title, desc, num, accent }, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between rounded-2xl border border-border p-5 ${accent ? 'bg-primary text-primary-foreground' : 'bg-card'}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent ? 'bg-primary-foreground/15' : 'bg-muted'}`}>
                    <Icon className={`h-4 w-4 ${accent ? 'text-primary-foreground' : 'text-foreground'}`} />
                  </div>
                  <span className={`text-3xl font-black leading-none select-none ${accent ? 'text-primary-foreground/20' : 'text-foreground/10'}`}>
                    {num}
                  </span>
                </div>
                <div>
                  <h3 className={`text-sm font-semibold ${accent ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {title}
                  </h3>
                  <p className={`mt-1 text-xs leading-relaxed ${accent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
