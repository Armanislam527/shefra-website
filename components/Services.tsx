import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Globe, Code, Building2, Cog, Briefcase, Cloud } from 'lucide-react'

const services = [
  { title: 'Website Development', description: 'Create stunning, responsive websites tailored to your brand.', icon: Globe },
  { title: 'Web Applications', description: 'Build powerful, scalable web applications for your business needs.', icon: Code },
  { title: 'Enterprise Software', description: 'Develop robust enterprise solutions to streamline your operations.', icon: Building2 },
  { title: 'Custom Software', description: 'Craft bespoke software solutions to address unique challenges.', icon: Cog },
  { title: 'Business Solutions', description: 'Implement comprehensive business solutions to drive growth.', icon: Briefcase },
  { title: 'Deployment Solutions', description: 'Ensure smooth and efficient deployment of your software.', icon: Cloud },
]

const Services = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="mb-4">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services