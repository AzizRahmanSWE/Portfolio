import { Card } from "@/components/ui/card"
import { Brain, Code2, Sparkles, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Production Experience",
      description: "React/TypeScript + Node.js + PostgreSQL",
    },
    {
      icon: Sparkles,
      title: "FinTech Integration",
      description: "Plaid, Wealthica APIs + Stripe billing",
    },
    {
      icon: Brain,
      title: "AI/ML Pipelines",
      description: "Python microservices & ML workflows",
    },
    {
      icon: Users,
      title: "UX-Focused",
      description: "Psychology background for user insight",
    },
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Where psychology meets full-stack engineering
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a self-taught full-stack developer who started coding at 20 while studying for a BA in{" "}
                <span className="text-foreground font-semibold">Psychology</span>. After a 6-month bootcamp and two
                contract roles, I'm now enrolled in the{" "}
                <span className="text-foreground font-semibold">Applied Artificial Intelligence</span> program at Seneca
                Polytechnic.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I combine frontend & backend engineering with a passion for AI and human-centered design. I build
                products that users enjoy and systems that scale.
              </p>

              <p className="text-lg leading-relaxed text-primary font-semibold">
                Currently open to internships and co-op opportunities in Toronto.
              </p>
            </div>

            {/* Right: Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <Card key={item.title} className="p-6 glass hover:glow transition-all duration-300 group">
                  <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
