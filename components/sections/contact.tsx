import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "azizrah.swe@gmail.com",
      href: "mailto:azizrah.swe@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/AzizRahmanSWE",
      href: "https://linkedin.com/in/AzizRahmanSWE",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/AzizRahmanSWE",
      href: "https://github.com/AzizRahmanSWE",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Toronto, ON",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to internship and co-op opportunities. Let's build something amazing together.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => (
              <Card key={method.label} className="p-6 glass hover:glow transition-all duration-300">
                {method.href ? (
                  <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <method.icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                      <p className="font-medium text-foreground break-all hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <method.icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                      <p className="font-medium text-foreground">{method.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Resume Download CTA */}
          <Card className="p-8 glass text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Download My Resume</h3>
              <p className="text-muted-foreground">Get the full picture of my experience and skills</p>
            </div>
            <Button size="lg" className="glow">
              <Download size={20} className="mr-2" />
              Download PDF Resume
            </Button>
          </Card>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Aziz Rahman. Built with Next.js, TypeScript, and TailwindCSS.</p>
            <p className="mt-2">Designed and developed with attention to performance and accessibility.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
