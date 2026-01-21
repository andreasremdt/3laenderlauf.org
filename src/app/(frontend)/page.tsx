// import type { Metadata } from 'next'
// import { getPageBySlug } from '@/lib/fetchers'
// import Page from './[slug]/page'
import Hero from '@/components/blocks/hero'
import About from '@/components/blocks/about'
import Categories from '@/components/blocks/categories'
import Timeline from '@/components/blocks/timeline'
import PriceCards from '@/components/blocks/price-cards'
import Gallery from '@/components/blocks/gallery'
import CallToAction from '@/components/blocks/call-to-action'
import FaqSection from '@/components/blocks/faq-section'
import Sponsors from '@/components/blocks/sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Timeline />
      <PriceCards />
      <Gallery />
      <Sponsors />
      <CallToAction />
      <FaqSection />
    </>
  )
}

// export default Page

// export async function generateMetadata(): Promise<Metadata> {
//   const page = await getPageBySlug('home')

//   if (!page) {
//     return {
//       title: 'Website template',
//       description: 'Website template description',
//     }
//   }

//   return {
//     title: 'Willkommen | Website template',
//     description: page.description,
//   }
// }
