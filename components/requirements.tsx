import {
  Monitor,
  Scan,
  Server,
  Network,
  Printer,
  Battery,
  ExternalLink,
  Code2,
  Terminal,
  BrainCircuit,
  CircuitBoard,
  Cpu,
  UserCog,
  Search,
  Code,
  Layout,
  Shield,
  Database,
  GraduationCap,
  ClipboardCheck,
} from 'lucide-react'

export function Requirements() {
  const hardware = [
    { icon: Monitor, name: 'Puestos de Cobro (TPV)', specs: 'Ryzen 3, 8GB RAM, 240GB SSD', qty: 16, price: '$467.000 c/u', link: 'https://www.maximus.com.ar/Producto/Monitor-LED-19-PERFORMANCE-PF185R---HDMIVGA-60hz/ITEM=19705/maximus.aspx?PN=PF185R'},
    { icon: Scan, name: 'Lectores Código de Barras', specs: '23 escáneres laser 2D/QR inalámbricos', qty: 23, price: '$38.400 c/u', link: 'https://casaschettini-shop.com/productos/nitcom-6200-lector-de-codigos-de-barras-2d-qr-dni-usb-scaner-con-base-de-apoyo/' },
    { icon: Server, name: 'Servidor Centralizado', specs: 'LENOVO THINKSYSTEM SR650 V4 Intel Xeon', qty: 1, price: '$19.288.692',link: 'https://tienda.datahaus.com.ar/products/servidor-lenovo-thinksystem-sr650-v4-intel-xeon-performance-6515p-16c-72mb-128gb-truddr5-6400mhz-raid-9350-8i-2gb-m-2-b340i-2i-nvme-2x480gb-ri-nvme-10gbase-t-2-port-ocp-2x-800w-xclarity-xcc3-premier-3yr-on-site'},
    { icon: Network, name: 'Routers VPN', specs: 'TP-Link Omada ER605 Gigabit Ethernet', qty: 4, price: '$100.000 c/u', link: 'https://www.mercadolibre.com.ar/router-vpn-gigabit-tp-link-omada-er605-gris/p/MLA18371309?pdp_filters=item_id%3AMLA2847637510&from=gshop&matt_tool=73566853&matt_word=&matt_source=google&matt_campaign_id=23390549168&matt_ad_group_id=199229762308&matt_match_type=&matt_network=g&matt_device=c&matt_creative=790066494602&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735113679&matt_product_id=MLA18371309-product&matt_product_partition_id=2454528869414&matt_target_id=aud-2418879895625:pla-2454528869414&cq_src=google_ads&cq_cmp=23390549168&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23390549168&gbraid=0AAAAAD01zQbfPkB7sE3mb2WJe7tpsYlgp&gclid=CjwKCAjw6f3RBhApEiwAMaCqWdToIxPzgouIAaL0D8SCDvXLhCTnA3hVdR3iiV8jX1N4WUtl_9c9cxoCIUcQAvD_BwE'},
    { icon: Printer, name: 'Ticketeras Térmicas', specs: 'Nictom IT04 — impresión 250 mm/s', qty: 16, price: '$100.000 c/u', link: 'https://www.mercadolibre.com.ar/impresora-termica-100-mm-comandera-it04-negra-nictom-color-negro/p/MLA44611931?product_trigger_id=MLA44605513&pdp_filters=item_id%3AMLA2134063096&applied_product_filters=MLA44605513&picker=true&quantity=1'},
    { icon: Battery, name: 'Sistemas UPS', specs: '3000VA con regulación automática', qty: 5, price: '$324.000 c/u', link: 'https://www.todoseguridad.ar/productos/hikvision-ds-ups3000-3000va-1t6fs/'},
  ]

  const software = [
    { name: 'MySQL Enterprise', type: 'Base de Datos', purpose: 'Motor relacional para transacciones simultáneas de 4 sedes', price: '$7.5 — $22.7 M', icon: CircuitBoard, link: 'https://shop.oracle.com/apex/f?p=DSTORE:PRODUCT::::6:P6_LPI,P6_PROD_HIER_ID:60720318189220530576677,58095029061520477171389' },
    { name: 'Debian Linux', type: 'Sistema Operativo', purpose: 'Plataforma estándar con soporte para periféricos de cobro', price: 'Libre', icon: Terminal },
    { name: 'Super Mayorista App', type: 'Desarrollo a Medida', purpose: 'Backend + Frontend bajo Proceso Unificado', price: 'A cotizar', icon: Code2 },
    { name: 'Google AI Ultra', type: 'Suscripción IA', purpose: 'Automatización de tareas y productividad del equipo', price: '$195.000', icon: BrainCircuit, link: 'https://one.google.com/ai?utm_source=antigravity&utm_campaign=argon_limit_reached&pli=1&g1_landing_page=75' },
  ]

  const humanResources = [
    { icon: UserCog, role: 'Líder de Proyecto', rate: '$2.749.621,12', time: '10,5 meses', qty: 1, total: '$28.870.021,76' },
    { icon: Search, role: 'Analista Funcional Senior', rate: '$1.991.622,80', time: '5 meses', qty: 2, total: '$19.916.228,00' },
    { icon: Layout, role: 'Desarrollador Full Stack', rate: '$3.187.720,75', time: '3 meses', qty: 2, note: 'Implementación y mantenimiento', total: '$19.126.324,50' },
    { icon: Code, role: 'Desarrollador Backend', rate: '$2.987.069,64', time: '2 meses', qty: 2, total: '$11.948.278,56' },
    { icon: ClipboardCheck, role: 'Analista de Testing de Aplicaciones', rate: '$2.477.103,94', time: '3,5 meses', qty: 1, total: '$8.669.863,79' },
    { icon: Network, role: 'Administrador de Redes y SO', rate: '$2.553.756,38', time: '1,75 meses', qty: 1, total: '$4.469.073,67' },
    { icon: Database, role: 'Administrador de Bases de Datos (DBA)', rate: '$2.553.756,38', time: '3 meses', qty: 1, total: '$7.661.269,14' },
    { icon: Shield, role: 'Especialista en Seguridad Informática', rate: '$3.163.471,39', time: '3 meses', qty: 1, total: '$9.490.414,17' },
    { icon: GraduationCap, role: 'Capacitador Informático', rate: '$1.228.649,95', time: '0,75 meses', qty: 1, total: '$921.487,46' },
  ]

  return (
    <section id="requirements" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── HARDWARE ── */}
        <div className="mb-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">02 / Hardware</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
                Requerimientos de Hardware
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
              <p className="text-xs text-muted-foreground mb-1">Total Hardware</p>
              <p className="text-2xl font-black text-foreground">$31.263.892</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hardware.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="rounded-full bg-foreground px-2.5 py-0.5 text-xs font-semibold text-background">
                      ×{item.qty}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                    {item.specs}
                  </p>
                  <a href={item.link}>
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <p className="text-sm font-semibold text-foreground">{item.price}</p>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    
                  </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── SOFTWARE ── */}
        <div className="mb-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">02 / Software</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
                Requerimientos de Software
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
              <p className="text-xs text-muted-foreground mb-1">Total Software</p>
              <p className="text-2xl font-black text-foreground">$8.4 — $22.7 M</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {software.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                          {item.type}
                        </span>
                      </div>
                      {!item.link && (
                        <p className="text-sm font-semibold text-foreground">{item.price}</p>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.purpose}
                    </p>
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block mt-6">
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <p className="text-sm font-semibold text-foreground">{item.price}</p>
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* ── REQUERIMIENTO HUMANO ── */}
        <div className="border-t border-border pt-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">02 / Recursos Humanos</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.0] tracking-tight text-foreground">
                Requerimiento Humano
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
              <p className="text-xs text-muted-foreground mb-1">Costo Estimado Desarrollo</p>
              <p className="text-2xl font-black text-foreground">$111.072.961,05</p>
            </div>
          </div>

          <div className="mb-10 max-w-4xl">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Considerando que el proyecto tiene una duración de <strong>46 semanas de desarrollo</strong>, más un margen de contingencia de <strong>2 semanas</strong> para la atención de imprevistos, el costo de mano de obra representa el componente más significativo del presupuesto. Tomando como referencia las remuneraciones establecidas por el <strong>CPCI (febrero de 2026)</strong> y el tiempo de participación de cada perfil dentro del proyecto, se obtiene la siguiente estimación:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {humanResources.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {item.qty && item.qty > 1 && (
                        <span className="rounded-full bg-foreground px-2.5 py-0.5 text-xs font-semibold text-background">
                          ×{item.qty}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      {item.role}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {item.rate} × {item.time}{item.qty && item.qty > 1 ? ` × ${item.qty}` : ''}
                    </p>
                    {item.note && (
                      <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground mb-2">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <div className="border-t border-border pt-3 mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Subtotal</span>
                    <p className="text-sm font-bold text-foreground">{item.total}</p>
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
