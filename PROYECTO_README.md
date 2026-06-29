# Página de Exposición - Super Mayorista Sistema de Gestión

Una página web moderna y profesional para presentar el proyecto de automatización integral de un sistema de gestión para supermercados mayoristas.

## 📋 Contenido

La página incluye 8 secciones principales:

1. **Navegación** - Barra fija con menu de navegación
2. **Hero** - Introducción impactante con estadísticas clave
3. **Introducción** - Objetivos del proyecto y restricciones
4. **Requerimientos** - Hardware y software necesarios
5. **Equipo de Proyecto** - Roles, responsabilidades y equipo operativo
6. **Cronograma** - Timeline detallado de 7 fases (52 semanas)
7. **Presupuesto** - Análisis de costos e ROI proyectado
8. **Footer** - Información de contacto y enlaces

## 🎨 Diseño

- **Paleta de colores**: 
  - Azul oscuro profesional (#25364F) - primario
  - Blanco neutro - background
  - Amber/Naranja (#A67C52) - acentos
  
- **Tipografía**: Geist Sans y Geist Mono
- **Componentes**: Basados en shadcn/ui con Tailwind CSS v4
- **Responsive**: Mobile-first, optimizado para todos los dispositivos

## 📁 Estructura de archivos

```
/app
  ├── layout.tsx          - Layout raíz
  ├── page.tsx            - Página principal
  └── globals.css         - Estilos globales y tema

/components
  ├── navigation.tsx      - Barra de navegación
  ├── hero.tsx            - Sección hero
  ├── introduction.tsx    - Objetivos y restricciones
  ├── requirements.tsx    - Hardware y software
  ├── team-structure.tsx  - Equipo y organización
  ├── timeline.tsx        - Cronograma del proyecto
  ├── budget.tsx          - Presupuesto e inversión
  └── footer.tsx          - Footer

/public
  ├── hardware-illustration.png    - Ilustración de hardware
  └── network-illustration.png     - Ilustración de red
```

## 🚀 Cómo usar

### Instalación local
```bash
# Clonar o descargar el proyecto
cd v0-project

# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# Abrir en navegador
# http://localhost:3000
```

### Personalización

#### 1. Cambiar información del proyecto
Edita los textos en cada componente:
- `components/introduction.tsx` - Objetivos y restricciones
- `components/requirements.tsx` - Hardware y software
- `components/team-structure.tsx` - Equipo
- `components/budget.tsx` - Presupuesto

#### 2. Modificar colores
En `app/globals.css`, actualiza los colores oklch del tema:
```css
:root {
  --primary: oklch(0.25 0.08 240);      /* Azul principal */
  --accent: oklch(0.65 0.2 50);         /* Naranja/Amber */
  --background: oklch(0.98 0.001 0);    /* Blanco neutro */
}
```

#### 3. Agregar nuevas secciones
1. Crear nuevo archivo en `/components`
2. Importar en `app/page.tsx`
3. Agregar anchor `id=` para navegación

#### 4. Cambiar ilustraciones
Reemplaza las imágenes en `/public`:
- `hardware-illustration.png`
- `network-illustration.png`

## 📊 Datos incluidos

El proyecto contiene información actual del documento PDF:

### Hardware ($21.2M)
- 16 TPV All-in-One
- 23 Lectores de código de barras
- 1 Servidor LENOVO THINKSYSTEM
- 4 Routers VPN
- 16 Ticketeras térmicas
- 5 Sistemas UPS

### Software ($8.4M - $22.7M)
- MySQL Enterprise Edition
- Debian Linux
- Desarrollo custom (Backend/Frontend)
- Google AI Ultra

### Equipo (10 profesionales)
- 1 Líder de proyectos (48 semanas)
- 2 Analistas funcionales (16 semanas)
- 2 Desarrolladores Backend (8 semanas)
- 2 Desarrolladores Full Stack (8 semanas)
- Y más roles especializados

### Timeline (52 semanas)
- Modelado de negocio: 4 semanas
- Requisitos: 5 semanas
- Análisis & Diseño: 14 semanas
- Codificación: 7 semanas
- Pruebas: 14 semanas
- Implementación: 4 semanas
- Mantenimiento: 8 semanas

## 🔗 Navegación

Los usuarios pueden navegar con:
- **Desktop**: Menu en header
- **Mobile**: Burger menu (menú hamburguesa)
- **Anchor links**: Enlaces directos a secciones (#intro, #requirements, etc.)

## 📱 Responsividad

Optimizado para:
- ✅ Mobile (375px - 768px)
- ✅ Tablet (768px - 1024px)
- ✅ Desktop (1024px+)

## ♿ Accesibilidad

- Semántica HTML correcta
- Contraste de colores WCAG AA
- Navegación por teclado
- Alt text en imágenes
- Labels en formularios

## 🎯 Puntos destacados

1. **Diseño moderno** - Gradientes, animaciones y efectos visuales
2. **Datos completos** - Toda la información del proyecto en un solo lugar
3. **Interactivo** - Tarjetas con hover effects, timeline visual
4. **Profesional** - Color scheme corporativo y tipografía clara
5. **Rápido** - Optimizado para rendimiento
6. **Mobile-first** - Funciona perfectamente en cualquier dispositivo

## 📞 Contacto

Los usuarios pueden ver contacto en el footer:
- Email: info@supermayorista.ar
- Teléfono: +54 (011) XXXX-XXXX
- Ubicación: Buenos Aires, Argentina

## 🔄 Próximos pasos

Sugerencias para mejorar:

1. **Agregar formulario** - Para consultas de clientes
2. **Integrar análisis** - Google Analytics o Vercel Analytics
3. **Agregar más ilustraciones** - Para cada sección
4. **Crear PDF** - Descarga de propuesta técnica
5. **Agregar video** - Demostración del sistema
6. **Dark mode** - Opción de tema oscuro
7. **Multiidioma** - Versión en inglés

## 📦 Deploy

### Con Vercel (recomendado)
```bash
git push origin main
# El deploy será automático
```

### Con GitHub Pages
```bash
pnpm build
# Subir /out a GitHub Pages
```

---

**Última actualización**: 2026-06-27
**Versión**: 1.0
