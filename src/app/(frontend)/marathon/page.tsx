import SmallHero from '@/components/blocks/small-hero'
import CallToAction from '@/components/blocks/call-to-action'
import FaqSection from '@/components/blocks/faq-section'
import AboutTrack from '@/components/blocks/about-track'
import Timeline from '@/components/blocks/timeline'
import Details from '@/components/blocks/details'
import Directions from '@/components/blocks/directions'
import HotelOffer from '@/components/blocks/hotel-offer'

export default function MarathonPage() {
  return (
    <>
      <SmallHero title="Marathon" />
      <AboutTrack />
      <Details />
      <Timeline />
      <Directions />
      <HotelOffer />
      <CallToAction />
      <FaqSection />
    </>
  )
}
