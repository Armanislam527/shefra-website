"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Shefra
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-foreground hover:text-primary">Home</Link>
          <Link href="/about" className="text-foreground hover:text-primary">About</Link>
          <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
          <Link href="/blog" className="text-foreground hover:text-primary">Blog</Link>
          <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-background py-2">
          <Link href="/" className="block px-4 py-2 text-foreground hover:text-primary">Home</Link>
          <Link href="/about" className="block px-4 py-2 text-foreground hover:text-primary">About</Link>
          <Link href="/services" className="block px-4 py-2 text-foreground hover:text-primary">Services</Link>
          <Link href="/blog" className="block px-4 py-2 text-foreground hover:text-primary">Blog</Link>
          <Link href="/contact" className="block px-4 py-2 text-foreground hover:text-primary">Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Header