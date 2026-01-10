"use client"

import { useState } from "react"
import { Menu, X, ExternalLink, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Fahad Malik
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["about", "skills", "projects", "experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm capitalize hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border p-4 space-y-4">
            {["about", "skills", "projects", "experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20">
        <div className="max-w-6xl mx-auto w-full px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
              Fahad <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Malik</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              Software Engineer | Web Developer | Ethical Hacker | Creative Designer
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              23 years old software engineer with 3+ years of experience. I craft elegant solutions for complex
              problems, combining web development expertise with creative design and security knowledge.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="px-8 py-3 border border-border hover:border-primary rounded-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm a passionate software engineer graduating on{" "}
                <span className="font-semibold text-foreground">December 19, 2025</span>. My journey in tech has been
                driven by curiosity and a desire to build impactful solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond coding, I'm fascinated by cybersecurity and creative design. I believe the best solutions come
                from understanding both the technical and human aspects of a problem.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <p className="text-sm text-muted-foreground mb-2">Years of Experience</p>
                <p className="text-4xl font-bold">3+</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <p className="text-sm text-muted-foreground mb-2">Projects Completed</p>
                <p className="text-4xl font-bold">10+</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <p className="text-sm text-muted-foreground mb-2">Client Satisfaction</p>
                <p className="text-4xl font-bold">91%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Web Development",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
              },
              {
                category: "Design",
                skills: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Creative Direction"],
              },
              {
                category: "Cybersecurity",
                skills: ["Ethical Hacking", "Penetration Testing", "Network Security", "Web Security"],
              },
              {
                category: "Tools & Platforms",
                skills: ["Git", "Docker", "AWS", "Database Design", "REST APIs"],
              },
            ].map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 rounded-lg border border-border hover:border-primary transition-colors bg-background"
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Project One",
                description: "A full-stack web application showcasing advanced React patterns and modern design.",
                tags: ["React", "Next.js", "TypeScript"],
                link: "#",
              },
              {
                title: "Security Audit Tool",
                description: "Ethical hacking tool for penetration testing and vulnerability assessment.",
                tags: ["Python", "Security", "Networking"],
                link: "#",
              },
              {
                title: "Design System",
                description: "Comprehensive design system and component library for scalable applications.",
                tags: ["Design", "Figma", "Components"],
                link: "#",
              },
              {
                title: "Project Four",
                description: "Innovative solution combining creative design with robust backend architecture.",
                tags: ["Full-Stack", "Design", "Innovation"],
                link: "#",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-lg border border-border hover:border-primary hover:bg-card/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Experience Highlights</h2>
          <div className="space-y-8">
            {[
              {
                period: "2022 - Present",
                role: "Software Engineer",
                company: "Freelance",
                description:
                  "Delivered 10+ projects with 91% client satisfaction. Specialized in web development and creative solutions.",
              },
              {
                period: "2023 - 2024",
                role: "Full Stack Developer",
                company: "Various Startups",
                description: "Built production-ready applications with focus on performance and user experience.",
              },
              {
                period: "2023 - Present",
                role: "Security Researcher",
                company: "Personal Projects",
                description: "Exploring ethical hacking and cybersecurity concepts through hands-on projects.",
              },
            ].map((exp, idx) => (
              <div key={idx} className="flex gap-6 pb-8 border-b border-border last:border-b-0">
                <div className="text-sm text-muted-foreground min-w-32">{exp.period}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in connecting with fellow developers, designers, and innovators. Feel free to reach
            out!
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              href="https://discord.com/users/1329835276020748321"
              target="_blank"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              aria-label="Discord"
            >
              <span className="text-sm font-semibold">Discord</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/fahad-malik-031ab131b"
              target="_blank"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="text-sm font-semibold">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/itz_loot"
              target="_blank"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
              aria-label="Twitter/X"
            >
              <Twitter size={20} />
              <span className="text-sm font-semibold">X (Twitter)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>© 2025 Fahad Malik. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}
