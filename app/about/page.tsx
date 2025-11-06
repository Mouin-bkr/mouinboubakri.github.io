"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionTitle } from "@/components/section-title"
import { socials } from "@/lib/data/socials"
import { profile } from "@/lib/data/profile"
import { Github, Linkedin, Mail, Download, Heart, Lightbulb, Target, Users } from "lucide-react"
import { motion } from "framer-motion"

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Mail,
}

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL"] },
  { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
]

const values = [
  {
    icon: Heart,
    title: "Passion for Craft",
    description: "I believe in building products that not only work well but also bring joy to use. Every pixel matters.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Technology evolves rapidly. I'm committed to staying current and constantly expanding my skillset.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "I focus on delivering measurable impact and value, not just writing code for the sake of it.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great products are built by great teams. I thrive in collaborative environments and value diverse perspectives.",
  },
]

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            title="About Me"
            subtitle="Get to know more about who I am and what I do"
            centered
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-1">{profile.name}</h3>
                <p className="text-muted-foreground mb-4">{profile.title}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon]
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </a>
                    )
                  })}
                </div>

                <Link href="/contact">
                  <Button className="w-full mb-2">
                    Get In Touch
                  </Button>
                </Link>
                {profile.resumeUrl ? (
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    <Download className="mr-2 h-4 w-4" />
                    CV Unavailable
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi! I'm a full-stack developer with a passion for creating beautiful, performant, and user-friendly web applications. My journey into software development started when I built my first website in college, and I've been hooked ever since.
                </p>
                <p>
                  Over the years, I've had the privilege of working on diverse projects ranging from small startup MVPs to large-scale enterprise applications. I specialize in modern web technologies like React, Next.js, and TypeScript on the frontend, and Node.js, Python, and PostgreSQL on the backend.
                </p>
                <p>
                  What drives me is the intersection of design and engineering. I believe that great software is not just functional but also delightful to use. Whether it's implementing smooth animations, optimizing performance, or crafting intuitive user interfaces, I'm always focused on creating the best possible experience.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I'm always excited to take on new challenges and collaborate with talented teams.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="font-semibold mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              title="My Values & Philosophy"
              subtitle="The principles that guide my work"
              centered
            />
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center bg-muted/30 rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Start a Conversation
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
