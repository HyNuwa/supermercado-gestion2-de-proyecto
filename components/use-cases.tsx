'use client'

import { useState } from 'react'
import {
  User,
  Users,
  Package,
  UserCheck,
  Landmark,
  UserCog,
  Briefcase,
  Layers,
  ArrowRightLeft,
  ZoomIn,
} from 'lucide-react'

export function UseCases() {
  const [zoom, setZoom] = useState({ active: false, x: 50, y: 50 })

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoom(prev => ({
      active: !prev.active,
      x,
      y
    }))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoom.active) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoom(prev => ({ ...prev, x, y }))
  }

  const actors = [
    { name: 'Cliente', desc: 'Inicia el proceso de compra, realiza el pago y recibe los productos.', icon: Users },
    { name: 'Cajero', desc: 'Registra los productos, gestiona el cobro e imprime facturas y reportes de caja.', icon: User },
    { name: 'Supervisor', desc: 'Autoriza cancelaciones y anulaciones de ventas en los puntos de cobro.', icon: UserCheck },
    { name: 'Entidad bancaria', desc: 'Procesa y valida las transacciones electrónicas de pago con tarjeta.', icon: Landmark },
    { name: 'Usuario', desc: 'Perfil general con credenciales para acceder y operar el sistema.', icon: UserCog },
    { name: 'Gerente de ventas', desc: 'Administra inventarios mínimos, reportes financieros y cupones de sorteo.', icon: Briefcase },
  ]

  const cases = [
    { title: 'Registrar venta', primary: 'Cajero', secondary: 'Cliente' },
    { title: 'Emitir factura', primary: 'Cajero', secondary: 'Cliente' },
    { title: 'Anular venta', primary: 'Supervisor', secondary: null },
    { title: 'Pagar con contado', primary: 'Cajero', secondary: 'Cliente' },
    { title: 'Pagar con Tarjeta', primary: 'Cajero', secondary: 'Cliente, Entidad bancaria' },
    { title: 'Acceder al sistema', primary: 'Usuario', secondary: null },
    { title: 'Imprimir parte de caja', primary: 'Cajero', secondary: null },
    { title: 'Realizar listado de stock mínimo', primary: 'Gerente de ventas', secondary: null },
    { title: 'Imprimir resumen de ventas', primary: 'Gerente de ventas', secondary: null },
    { title: 'Emitir cupones para sorteo', primary: 'Gerente de ventas', secondary: null },
  ]

  return (
    <section id="usecases" className="border-b border-border bg-background py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-primary">04 / Modelo de Casos de Uso</p>
          <h2 className="text-3xl sm:text-4xl font-black leading-[1.0] tracking-tight text-foreground">
            Modelo de Casos de Uso
          </h2>
        </div>

        {/* Layout: Diagram & Actors */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 mb-12 items-start">
          
          {/* Diagram Column */}
          <div className="rounded-2xl border border-border bg-muted/20 p-5">
            <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              Diagrama de Casos de Uso del Sistema
            </h3>
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-3 flex items-center justify-center">
              <div 
                className={`relative overflow-hidden rounded-lg w-full flex justify-center bg-card select-none ${zoom.active ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={handleImageClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setZoom(prev => ({ ...prev, active: false }))}
              >
                <img
                  src="/modelo-cu.png"
                  alt="Modelo de Caso de Uso"
                  className="max-h-[380px] w-auto object-contain"
                  style={{
                    transform: zoom.active ? 'scale(2.5)' : 'scale(1)',
                    transformOrigin: `${zoom.x}% ${zoom.y}%`,
                    transition: zoom.active ? 'transform 0.05s ease-out' : 'transform 0.2s ease',
                  }}
                />
                {!zoom.active && (
                  <div className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 shadow-sm text-foreground flex items-center gap-1.5 text-[10px] font-semibold border border-border pointer-events-none">
                    <ZoomIn className="h-3 w-3 text-primary" />
                    Hacer clic para ampliar
                  </div>
                )}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center leading-relaxed">
              Ilustración de la interacción entre los distintos actores de negocio y el sistema mayorista centralizado. (Haz clic y mueve el cursor para explorar en detalle)
            </p>
          </div>

          {/* Actors Column */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">Actores del Negocio</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {actors.map((actor, idx) => {
                const Icon = actor.icon
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-border bg-card p-3.5 hover:border-primary/20 transition-all flex items-start gap-3"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-0.5">{actor.name}</h4>
                      <p className="text-[10px] leading-snug text-muted-foreground">{actor.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
