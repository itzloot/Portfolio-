"use client";

import { useState } from "react";
import { Menu, X, ExternalLink, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border px-6 py-4 space-y-4 bg-background/95 backdrop-blur-md">
            {["about", "skills", "projects", "experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize hover:text-primary transition-colors py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 pb-20">
        <div className="max-w-6xl mx-auto w-full px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Fahad <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Malik</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              Software Engineer | Web Developer | Ethical Hacker | Creative Designer
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              23 years old software engineer with 3+ years of experience. I craft elegant solutions for complex problems,
              combining web development expertise with creative design and security knowledge.
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

      {/* About */}
      <section id="about" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          {/* ... rest of about section (same as before) ... */}
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
              {/* ... other stat cards ... */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills, Projects, Experience, Contact, Footer */}
      {/* Copy the remaining sections from your original page.tsx */}
      {/* They remain exactly the same — just make sure all class names match your variables */}

      {/* Example Projects snippet (shortened) */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          {/* your project cards here */}
        </div>
      </section>

      {/* ... add remaining sections similarly ... */}
    </div>
  );
}