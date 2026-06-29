import { Scan, Lock, Database, Clock, Zap, Monitor, Users, ClipboardPlus, UserRoundCheck, CreditCard } from 'lucide-react'

export function Introduction() {
  const objectives = [
    {
      icon: Scan,
      title: 'Automatizacion del Punto de Venta',
      description: 'Lectura de codigos de barras y facturacion automatizada en todas las cajas.',
      num: '01',
    },
    {
      icon: Database,
      title: 'Gestion de Stock Centralizada',
      description: 'Resta automatica de inventario y sincronizacion en tiempo real entre sedes.',
      num: '02',
    },
    {
      icon: Lock,
      title: 'Control de Acceso Seguro',
      description: 'Sistema de usuarios y contrasenas con perfiles de acceso especificos.',
      num: '03',
    },
    {
      icon: ClipboardPlus,
      title: 'Generación de Reportes',
      description: 'Automatizar la emisión del parte de caja por cajero, listados de stock mínimo para compras y resúmenes de ventas diarios a las 22:00 hs.',
      num: '04'
    },
    {
      icon: UserRoundCheck,
      title: 'Fidelización',
      description: 'Digitalizar el registro de datos de clientes (DNI, ticket, etc.) para la gestión de cupones de sorteos.',
      num: '05'
    }
  ]

  const restrictions = [
    { label: 'Tiempo', description: 'Entrega en 1 año calendario', value: '12 meses', icon: Clock },
    { label: 'Rendimiento', description: 'Tiempo de respuesta por venta', value: '< 5 seg', icon: Zap },
    { label: 'Infraestructura', description: 'Reemplazo total de hardware obsoleto', value: '4 sedes', icon: Monitor },
    { label: 'Cobro', description: 'Ingreso de pago con lectoras de codigo de barras (sin PosNET)', value: 'Sin PosNET', icon: CreditCard },
    { label: 'Seguridad', description: 'Anulación de la venta requiere supervisor presencial', value: 'Supervisor', icon: Lock },
    { label: 'Usabilidad', description: 'Interfaces de fácil aprendizaje para el personal', value: 'Fácil Uso', icon: Users },
  ]

  return (
    <section id="intro" className="border-b border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-medium text-primary">01 / Introduccion</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
              Objetivos del Proyecto
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sistema informatico centralizado que automatice las actividades de la casa central y
            3 sucursales del supermercado mayorista.
          </p>
        </div>

        {/* Objectives */}
        <div className="mb-20 grid md:grid-cols-3 gap-4">
          {objectives.map((obj, idx) => {
            const Icon = obj.icon
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-4xl font-black text-foreground/8 leading-none select-none">
                    {obj.num}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {obj.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {obj.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Restrictions header */}
        <div className="mb-8 flex items-center gap-4">
          <p className="text-sm font-medium text-primary whitespace-nowrap">Restricciones</p>
          <div className="flex-1 border-t border-border" />
        </div>

        {/* Restrictions grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {restrictions.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xl font-black text-foreground leading-none mb-1.5">
                  {item.value}
                </p>
                <p className="text-xs font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
