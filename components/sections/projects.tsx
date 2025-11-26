import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Smart Photo Manager",
      description:
        "AI-powered photo organization platform with intelligent tagging and search capabilities using computer vision.",
      tech: ["React", "TypeScript", "Node.js", "Python", "Docker", "FastAPI"],
      image: "/modern-photo-gallery-app-dark-theme.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "FinTech Data Dashboard",
      description:
        "Real-time financial analytics platform integrating Plaid and Wealthica APIs for comprehensive wealth tracking.",
      tech: ["Next.js", "PostgreSQL", "Plaid API", "Chart.js", "Prisma"],
      image: "/financial-dashboard-dark-modern.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Workflow Automation SaaS",
      description: "Enterprise workflow automation platform with drag-and-drop builder and payment processing.",
      tech: ["Next.js", "TypeScript", "Stripe", "Node.js", "MongoDB"],
      image: "/workflow-automation-platform-dark.jpg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">From concept to production—here's what I've built</p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`overflow-hidden glass hover:glow transition-all duration-300 ${
                  project.featured ? "lg:p-8 p-0" : "p-0"
                }`}
              >
                <div className={`grid ${project.featured ? "lg:grid-cols-2" : "grid-cols-1"} gap-6 items-center`}>
                  {/* Project Image */}
                  <div className={`relative aspect-video ${index % 2 === 1 && project.featured ? "lg:order-2" : ""}`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 lg:p-0 space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      <Button asChild size="sm" className="glow">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
