import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Applied Artificial Intelligence Certificate",
      institution: "Seneca Polytechnic",
      period: "Sept 2025 – Apr 2026",
      status: "In Progress",
      description: "Focused on machine learning, neural networks, and AI deployment pipelines",
      icon: BookOpen,
    },
    {
      degree: "Bachelor of Arts, Psychology",
      institution: "York University",
      period: "2020 – 2024",
      status: "Completed",
      description: "Specialized in cognitive psychology and human-computer interaction",
      icon: GraduationCap,
    },
    {
      degree: "Diploma: Full Stack Web Development",
      institution: "Lighthouse Labs",
      period: "Feb 2022 – Jan 2023",
      status: "Completed",
      description: "Intensive bootcamp covering modern web development technologies",
      icon: BookOpen,
    },
  ]

  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Education</h2>
            <p className="text-lg text-muted-foreground">Continuous learning and growth</p>
          </div>

          {/* Education Grid */}
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 glass hover:glow transition-all duration-300">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <edu.icon className="text-primary" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-muted-foreground">{edu.period}</p>
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            edu.status === "In Progress"
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Availability Note */}
          <Card className="mt-8 p-6 glass border-primary/30">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Available for internships and co-op positions starting immediately
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
