'use client'

import { useState } from 'react'
import { CalendarDays, ZoomIn, Info, ListTodo } from 'lucide-react'

export function CalendarSection() {
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

  const schedule = [
    { activity: 'Plan del Proyecto', duration: '1 Semana', highlight: false },
    { activity: 'Requisitos', duration: '5 Semanas', highlight: false },
    { activity: 'Análisis', duration: '7 Semanas', highlight: false },
    { activity: 'Diseño', duration: '8 Semanas', highlight: false },
    { activity: 'Implementación', duration: '8 Semanas', highlight: false },
    { activity: 'Pruebas', duration: '14 Semanas', highlight: false },
    { 
      activity: 'Implantación', 
      duration: '3 Semanas', 
      detail: 'Manual de Usuario (10 Días) + Capacitación (4 Días) + Transición (1 Semana)',
      highlight: false 
    },
    { activity: 'Mantenimiento', duration: '4 Semanas', detail: 'Soporte post-lanzamiento (no se suma al tiempo total)', highlight: false, italic: true },
  ]

  return (
    <section id="calendar" className="border-b border-border bg-background py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-primary">03 / Cronograma del Proyecto</p>
          <h2 className="text-3xl sm:text-4xl font-black leading-[1.0] tracking-tight text-foreground">
            Calendarización y Plan de Trabajo
          </h2>
        </div>

        {/* Table & Details (Plan de Trabajo / División del Trabajo) */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 mb-10 items-start">
          
          {/* Info Details (Left Column) */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <ListTodo className="h-4 w-4 text-primary" />
              División del Trabajo y Plazos
            </h3>
            
            <div className="rounded-xl border border-border bg-card p-4 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Duración total estimada:</span> 12 meses de desarrollo activo.
                  <br />
                  <span className="font-semibold text-foreground">Equivalencias:</span> 1 mes = 4 semanas | 12 meses = 48 semanas.
                </div>
              </div>
              <div className="text-xs leading-relaxed text-muted-foreground border-t border-border pt-4">
                El plan de trabajo consta de <span className="font-semibold text-foreground">46 semanas de desarrollo</span> activo, sumado a un margen de contingencia de <span className="font-semibold text-foreground">2 semanas</span> para imprevistos, completando el cronograma de <span className="font-semibold text-foreground">48 semanas</span> totales (10 meses).
              </div>
            </div>
          </div>

          {/* Table (Right Column) */}
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="grid grid-cols-[1.5fr_1fr] bg-foreground px-4 py-2.5">
              {['Actividad', 'Duración'].map((h) => (
                <div key={h} className="text-[10px] font-semibold text-background/70">{h}</div>
              ))}
            </div>

            <div className="divide-y divide-border">
              {schedule.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-[1.5fr_1fr] items-center bg-card hover:bg-muted/30 transition-colors px-4 py-2.5 ${item.italic ? 'italic text-muted-foreground' : ''}`}
                >
                  <div>
                    <p className="text-xs font-medium text-foreground">{item.activity}</p>
                    {item.detail && (
                      <p className="text-[9px] text-muted-foreground leading-normal mt-0.5">{item.detail}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-foreground">{item.duration}</span>
                  </div>
                </div>
              ))}

              {/* Sum Total Rows */}
              <div className="grid grid-cols-[1.5fr_1fr] items-center bg-muted/40 px-4 py-2 border-t border-border">
                <span className="text-xs font-bold text-foreground">Suma de Desarrollo</span>
                <span className="text-xs font-bold text-foreground">46 Semanas</span>
              </div>
              <div className="grid grid-cols-[1.5fr_1fr] items-center bg-muted/40 px-4 py-2">
                <span className="text-xs font-semibold text-muted-foreground">Margen para imprevistos</span>
                <span className="text-xs font-semibold text-foreground">2 Semanas</span>
              </div>
              <div className="grid grid-cols-[1.5fr_1fr] items-center bg-primary/10 px-4 py-2.5 border-t border-primary/20">
                <span className="text-xs font-black text-primary">DURACIÓN TOTAL</span>
                <span className="text-xs font-black text-primary">48 Semanas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gantt Diagram (Full Width below the table) */}
        <div className="rounded-2xl border border-border bg-muted/20 p-5 w-full">
          <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            Diagrama de Gantt del Proyecto (Programa del Proyecto)
          </h3>
          <div className="relative overflow-hidden rounded-xl border border-border bg-card p-4 flex items-center justify-center">
            <div 
              className={`relative overflow-hidden rounded-lg w-full flex justify-center bg-card select-none ${zoom.active ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={handleImageClick}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoom(prev => ({ ...prev, active: false }))}
            >
              <img
                src="/diagrama-gantt.png"
                alt="Diagrama de Gantt"
                className="w-full max-h-[550px] object-contain transition-transform duration-200"
                style={{
                  transform: zoom.active ? 'scale(2.5)' : 'scale(1)',
                  transformOrigin: `${zoom.x}% ${zoom.y}%`,
                  transition: zoom.active ? 'transform 0.05s ease-out' : 'transform 0.2s ease',
                }}
              />
              {!zoom.active && (
                <div className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 shadow-sm text-foreground flex items-center gap-1.5 text-[10px] font-semibold border border-border pointer-events-none">
                  <ZoomIn className="h-3 w-3 text-primary" />
                  Hacer clic en la imagen para ampliar
                </div>
              )}
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 text-center leading-relaxed">
            Planificación temporal detallada en semanas de cada actividad y los perfiles asignados. (Haz clic y mueve el cursor para explorar en detalle)
          </p>
        </div>

      </div>
    </section>
  )
}
