import SmallHero from '@/components/blocks/small-hero'
import Organizers from '@/components/blocks/organizers'
import Statistics from '@/components/blocks/statistics'
import CallToAction from '@/components/blocks/call-to-action'
import FaqSection from '@/components/blocks/faq-section'

export default function OrganisatorenPage() {
  return (
    <>
      <SmallHero title="Organisatoren" />
      <Statistics />
      <Organizers />
      <CallToAction />
      <FaqSection />
    </>
  )
}
