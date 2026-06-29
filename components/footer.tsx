import { Store, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const navLinks = [
    { label: 'Introduccion', href: '#intro' },
    { label: 'Requisitos', href: '#requirements' },
    { label: 'Equipo', href: '#members' },
    { label: 'Cronograma', href: '#calendar' },
    { label: 'Presupuesto', href: '#budget' },
  ]

  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Top row */}
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Store className="h-4 w-4 text-primary-foreground" />
              </div>
              <p className="text-sm font-semibold text-background/90">Super Mayorista</p>
            </div>
            <p className="text-sm text-background/40 leading-relaxed max-w-xs">
              Proyecto final — automatizacion integral de punto de venta y control de stock para cadena mayorista con 4 sedes.
            </p>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs text-background/40">Informatica — 2026</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs text-background/30 mb-4">Secciones</p>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-background/50 hover:text-background/80 transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + total */}
          <div className="space-y-5">
            <p className="text-xs text-background/30">Contacto</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-3.5 w-3.5 text-background/30" />
                <span className="text-sm text-background/50">info@supermayorista.ar</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-3.5 w-3.5 text-background/30" />
                <span className="text-sm text-background/50">Buenos Aires, Argentina</span>
              </li>
            </ul>
            <div className="rounded-2xl border border-background/10 p-4 text-center">
              <p className="text-xs text-background/30 mb-1">Inversion Total</p>
              <p className="text-xl font-black text-primary">$29.6 — $44 M</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-background/10 pt-8">
          <p className="text-xs text-background/25">
            &copy; 2026 Grupo 14 — Proyecto Final Informatica
          </p>
          <div className="flex items-center gap-2">
            {['Hardware', 'Software', 'RRHH'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-background/10 px-3 py-1 text-xs text-background/25"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
