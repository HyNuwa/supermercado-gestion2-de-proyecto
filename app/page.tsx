import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { GroupMembers } from '@/components/group-members'
import { Introduction } from '@/components/introduction'
import { Requirements } from '@/components/requirements'
import { Budget } from '@/components/budget'
import { UseCases } from '@/components/use-cases'
import { CalendarSection } from '@/components/calendar'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <GroupMembers />
      <Introduction />
      <Requirements />
      <CalendarSection />
      <UseCases />
      <Budget />
      <Footer />
    </div>
  )
}
