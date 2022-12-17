import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'

import { benefitOne, benefitTwo } from '../components/Data'
import Video from '../components/Video'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import PopupWidget from '../components/PopupWidget'

export default function Home() {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Nextly Benefits" title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups and indie projects. Its built with
        Next.js & TailwindCSS. And its completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="Watch a video" title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has
        3% more conversion rate. So, don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="Testimonials" title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your
        popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the conversion rate as well as support or chat
        requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  )
}
