import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const technologies = [
  { name: 'React', logo: '/react-logo.png', description: 'Building interactive user interfaces' },
  { name: 'Next.js', logo: '/nextjs-logo.png', description: 'Server-side rendering and static site generation' },
  { name: 'Node.js', logo: '/nodejs-logo.png', description: 'Scalable backend development' },
  { name: 'TypeScript', logo: '/typescript-logo.png', description: 'Enhanced code quality and maintainability' },
  { name: 'Python', logo: '/python-logo.png', description: 'Versatile language for various applications' },
  { name: 'Docker', logo: '/docker-logo.png', description: 'Containerization for easy deployment' },
]

const Technologies = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {technologies.map((tech, index) => (
          <Card key={index} className="flex flex-col items-center p-4">
            <Image src={tech.logo} alt={tech.name} width={64} height={64} className="mb-4" />
            <CardContent className="text-center">
              <h3 className="font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Technologies