"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Hero = () => {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  // Update the theme to match system settings if the user has selected 'system'
  useEffect(() => {
    if (theme === 'system') {
      setCurrentTheme(systemTheme);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme, systemTheme]);

  return (
    <section className="min-h-screen flex items-center justify-center  text-center">
      <div>
        <div className='flex fle-col justify-center items-center'>
          {currentTheme === 'dark' ? (
            <Image src="/shefra-logo-arabic-text-removebg.png" height={100} width={250} alt="shefra-logo" />
          ) : (
            <h1 className="text-4xl font-bold">Shefra</h1>
          )}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Your Digital Transformation</h1>
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Shefra is your partner in innovation, providing cutting-edge solutions in website development, web applications, enterprise software, and more.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="#services">Our Services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
