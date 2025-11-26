"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.75 0.15 195 / 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated greeting */}
          <div className="inline-block animate-fade-in-up">
            <span className="text-sm text-primary font-mono">{"<hello world />"}</span>
          </div>

          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance animate-fade-in-up animation-delay-200">
            <span className="gradient-text">Aziz Rahman</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground text-balance animate-fade-in-up animation-delay-400">
            Full-Stack Developer · AI Engineer · UX Enthusiast
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-600">
            Building production-ready web applications with <span className="text-primary">React</span>,{" "}
            <span className="text-primary">TypeScript</span>, and <span className="text-primary">Node.js</span>.
            Currently exploring the intersection of AI and human-centered design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
            <Button asChild size="lg" className="glow">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Download Resume</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-1000">
            <a
              href="https://github.com/AzizRahmanSWE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/AzizRahmanSWE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:azizrah.swe@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about">
              <ArrowDown size={24} className="text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
