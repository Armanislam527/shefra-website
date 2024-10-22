import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const caseStudies = [
  {
    title: 'E-commerce Platform Overhaul',
    description: 'Redesigned and optimized a large-scale e-commerce platform, resulting in a 40% increase in conversion rates.',
    challenge: 'Slow loading times and poor user experience were causing high bounce rates.',
    solution: 'Implemented server-side rendering with Next.js and optimized database queries.',
    outcome: 'Improved page load times by 60% and increased user engagement metrics across the board.',
  },
  {
    title: 'Enterprise Resource Planning System',
    description: 'Developed a custom ERP system for a manufacturing company, streamlining operations and improving efficiency.',
    challenge: 'Disparate systems and manual processes were causing delays and errors in production planning.',
    solution: 'Created a centralized ERP system with real-time data synchronization and automated workflows.',
    outcome: 'Reduced production planning time by 50% and decreased inventory carrying costs by 30%.',
  },
  {
    title: 'Mobile Banking Application',
    description: 'Built a secure and user-friendly mobile banking application for a regional bank.',
    challenge: 'Existing mobile app had poor reviews and low adoption rates among customers.',
    solution: 'Developed a new app with enhanced security features and an intuitive user interface.',
    outcome: 'Increased mobile banking adoption by 200% and improved customer satisfaction scores by 45%.',
  },
]

const CaseStudies = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{study.title}</CardTitle>
              <CardDescription>{study.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Challenge:</strong> {study.challenge}</p>
              <p className="mb-2"><strong>Solution:</strong> {study.solution}</p>
              <p><strong>Outcome:</strong> {study.outcome}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default CaseStudies