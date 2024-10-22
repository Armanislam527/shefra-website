"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData(prevState => ({ ...prevState, service: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Select onValueChange={handleServiceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Website Development</SelectItem>
              <SelectItem value="webapp">Web Application</SelectItem>
              <SelectItem value="enterprise">Enterprise Software</SelectItem>
              <SelectItem value="custom">Custom Software</SelectItem>
              <SelectItem value="business">Business Solution</SelectItem>
              <SelectItem value="deployment">Deployment Solution</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  )
}

export default ContactForm