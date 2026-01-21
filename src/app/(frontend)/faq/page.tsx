import SmallHero from '@/components/blocks/small-hero'
import Faq from '@/components/blocks/faq'
import CallToAction from '@/components/blocks/call-to-action'
import FaqSection from '@/components/blocks/faq-section'

export default function FaqPage() {
  return (
    <>
      <SmallHero title="FAQ" />
      <Faq />
      <CallToAction />
      <FaqSection />
    </>
  )
}
