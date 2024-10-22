import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Your Digital Transformation</h1>
      <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
        Shefra is your partner in innovation, providing cutting-edge solutions in website development, web applications, enterprise software, and more.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/services">Our Services</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero