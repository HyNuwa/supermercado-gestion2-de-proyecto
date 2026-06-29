import {
  UserCog, Search, Code, Layout, Shield, Database,
  Network, GraduationCap, Building2, Store, Users,
} from 'lucide-react'

export function TeamStructure() {
  const roles = [
    { icon: UserCog, role: 'Líder de Proyectos', qty: 1, weeks: 48, salary: '$2.749.621', responsibility: 'Liderar, coordinar y gestionar todas las facetas del proyecto' },
    { icon: Search, role: 'Analista Funcional Senior', qty: 2, weeks: 16, salary: '$1.991.623', responsibility: 'Relevar requisitos y traducirlos en Casos de Uso técnicos' },
    { icon: Code, role: 'Desarrollador Backend', qty: 2, weeks: 8, salary: '$2.987.070', responsibility: 'Lógica del servidor y base de datos robusta' },
    { icon: Layout, role: 'Desarrollador Full Stack', qty: 2, weeks: 8, salary: '$3.187.721', responsibility: 'Interfaz del sistema y comunicación frontend-backend' },
    { icon: Network, role: 'Admin. de Redes & SO', qty: 1, weeks: 3, salary: '$2.553.756', responsibility: 'Diseño de infraestructura de red VPN' },
    { icon: Database, role: 'Admin. de Bases de Datos', qty: 1, weeks: 2, salary: '$2.553.756', responsibility: 'Estructura de datos centralizada y optimización' },
    { icon: Shield, role: 'Seguridad Informática', qty: 1, weeks: 1, salary: '$3.163.471', responsibility: 'Configurar perfiles de acceso y seguridad del sistema' },
    { icon: GraduationCap, role: 'Capacitador Informático', qty: 1, weeks: 2, salary: '$1.228.650', responsibility: 'Capacitación de personal en nueva plataforma' },
  ]

  const org = [
    {
      title: 'Casa Central',
      icon: Building2,
      roles: [
        { name: 'Gerente General', count: 1 },
        { name: 'Tesorero', count: 1 },
        { name: 'Cajeros', count: 10 },
        { name: 'Repositores', count: 4 },
        { name: 'Supervisores', count: 2 },
      ],
    },
    {
      title: 'Sucursal × 3',
      icon: Store,
      roles: [
        { name: 'Gerente de Ventas', count: 1 },
        { name: 'Cajeros', count: 2 },
        { name: 'Repositor', count: 1 },
        { name: 'Supervisor', count: 1 },
      ],
    },
  ]

  return (
    <section id="team" className="border-b border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium text-primary">03 / Equipo</p>
          <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
            Division del Trabajo
          </h2>
        </div>

        {/* Roles table */}
        <div className="mb-20 rounded-2xl border border-border overflow-hidden">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[2.2fr_0.7fr_0.7fr_1fr] bg-foreground px-5 py-3.5">
            {['Rol / Responsabilidad', 'Cant.', 'Semanas', 'Costo / Mes'].map((h) => (
              <div key={h} className="text-xs font-semibold text-background/70">{h}</div>
            ))}
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {roles.map((role, idx) => {
              const Icon = role.icon
              return (
                <div
                  key={idx}
                  className="grid md:grid-cols-[2.2fr_0.7fr_0.7fr_1fr] items-center bg-card hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-center gap-3 px-5 py-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{role.role}</p>
                      <p className="text-xs text-muted-foreground hidden md:block leading-relaxed">
                        {role.responsibility}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                      {role.qty}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 px-5 py-4">
                    <span className="text-xl font-black text-foreground">{role.weeks}</span>
                    <span className="text-xs text-muted-foreground">sem</span>
                  </div>
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold text-foreground">{role.salary}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
