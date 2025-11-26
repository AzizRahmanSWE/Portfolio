import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Lead Full-Stack Developer",
      company: "NextUnicorn / Unicom",
      period: "Mar 2025 – Present",
      location: "Toronto, ON",
      description: [
        "Developed core platform features using React/Next.js, Node.js, and PostgreSQL",
        "Implemented secure authentication and real-time notifications system",
        "Collaborated with founders and designers in agile sprints",
      ],
      tech: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    },
    {
      title: "Full-Stack Developer",
      company: "ExpenseTrend Inc",
      period: "Nov 2023 – Mar 2024",
      location: "Contract",
      description: [
        "Integrated Plaid and Wealthica APIs to enable seamless account synchronization",
        "Built interactive financial dashboards with Chart.js",
        "Improved SQL query performance by ~30% through optimization",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Plaid API", "Chart.js"],
    },
    {
      title: "Full-Stack Developer",
      company: "YourBeat Inc",
      period: "Aug 2023 – Nov 2023",
      location: "Contract",
      description: [
        "Built front and back-end features using Next.js, Prisma, and PostgreSQL",
        "Reduced server API calls by ~30% through efficient data fetching",
        "Collaborated with product team on feature specifications",
      ],
      tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    },
    {
      title: "Software Engineer Intern",
      company: "Delta Air Lines",
      period: "May 2021 – Oct 2021",
      location: "Remote",
      description: [
        "Developed UI components improving application performance by ~15%",
        "Assisted in API integration and participated in code reviews",
        "Contributed to agile development process and sprint planning",
      ],
      tech: ["React", "JavaScript", "REST APIs"],
    },
  ]

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Professional Experience</h2>
            <p className="text-lg text-muted-foreground">Building production systems and shipping features</p>
          </div>

          {/* Experience Timeline */}
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            {experiences.map((exp, index) => (
              <Card key={index} className="relative ml-6 md:ml-20 glass hover:glow transition-all duration-300">
                {/* Timeline Dot */}
                <div className="absolute -left-10 md:-left-[52px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Briefcase size={20} className="text-primary" />
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-secondary rounded text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
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
