import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript (TypeScript)", "Python", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "React Native", "TailwindCSS"],
    },
    {
      category: "Backend / APIs",
      skills: ["Node.js", "Express", "FastAPI", "GraphQL"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
    },
    {
      category: "DevOps / Cloud",
      skills: ["Docker", "GitHub Actions", "AWS", "GCP"],
    },
    {
      category: "Tools & APIs",
      skills: ["Prisma", "Stripe", "Plaid", "Chart.js", "Cypress"],
    },
  ]

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">Tools I use to bring ideas to life</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.category} className="p-6 glass hover:glow transition-all duration-300">
                <h3 className="font-bold text-lg mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Currently Learning */}
          <Card className="mt-8 p-6 glass border-primary/30">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-primary">Currently Learning:</span>
              <span className="text-sm text-muted-foreground">PyTorch · TensorFlow · MLOps Pipelines</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
