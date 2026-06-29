import { GraduationCap, Mail, User } from 'lucide-react'

export function GroupMembers() {
  const members = [
    {
      name: 'Mamaní, Luis Carlos Manuel',
      career: 'Ingeniería Informática',
      email: '46891956@fi.unju.edu.ar',
    },
    {
      name: 'Gaspar, Gimena Victoria',
      career: 'Ingeniería Informática',
      email: '45559781@fi.unju.edu.ar',
    },
    {
      name: 'Armella, Jorge Agustin',
      career: 'Ingeniería Informática',
      email: 'jorgearmella2004@gmail.com',
    },
    {
      name: 'Calatayud, Alex Gabriel',
      career: 'Ingeniería Informática',
      email: 'alexxe@fi.unju.edu.ar',
    },
    {
      name: 'Guerra, Facundo Maximiliano',
      career: 'Licenciatura en Sistemas',
      email: 'fmaximiliano.guerra@gmail.com',
    },
    {
      name: 'Llampa, Abel Ismael',
      career: 'Licenciatura en Sistemas',
      email: 'illampa050@gmail.com',
    },
  ]

  return (
    <section id="members" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
              Miembros del Grupo
            </h2>
          </div>
          <div className="max-w-md text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground mb-1">
              Modelado Orientado a Objetos (MOO)
            </p>
            <p>
              Trabajo Final de Cátedra — Presentación del diseño y planificación del sistema
              de gestión para la cadena de supermercados.
            </p>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top gradient/hover glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-base font-black text-foreground mb-1.5 tracking-tight group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <GraduationCap className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{member.career}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mt-2">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors break-all"
                >
                  <Mail className="h-3.5 w-3.5 flex-shrink-0 text-primary/70" />
                  <span>{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
