import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shefra</h3>
            <p className="text-muted-foreground">Empowering Your Digital Transformation</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Rajapur</p>
            <p>Pabna Sadar, Pabna, Bangladesh 6600</p>
            <p>Email: info@shefra.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary"><Facebook /></a>
              <a href="#" className="text-foreground hover:text-primary"><Twitter /></a>
              <a href="#" className="text-foreground hover:text-primary"><Linkedin /></a>
              <a href="#" className="text-foreground hover:text-primary"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p>&copy; 2023 Shefra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer