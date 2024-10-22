import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Technologies from '@/components/Technologies'
import CaseStudies from '@/components/CaseStudies'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Services />
      <Technologies />
      <CaseStudies />
      <ContactForm />
    </div>
  )
}