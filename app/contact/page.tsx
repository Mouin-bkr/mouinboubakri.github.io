"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionTitle } from "@/components/section-title"
import { socials } from "@/lib/data/socials"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Mail,
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
      if (!formspreeId) {
        // Fallback: open mail client
        window.location.href = `mailto:mouinbkr@gmail.com?subject=Portfolio%20contact%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`
        toast.message("Opening your email app…")
        return
      }

  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      })

      if (res.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        const data = await res.json().catch(() => ({} as any))
        const msg = data?.errors?.[0]?.message || 'There was an issue sending your message.'
        toast.error(msg)
      }
    } catch (err) {
      toast.error('Network error. Please try again or use the email link below.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            title="Get In Touch"
            subtitle="Have a project in mind or just want to say hello? I'd love to hear from you!"
            centered
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:mouinbkr@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        mouinbkr@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Manouba, Tunisia
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon] || Mail
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24-48 hours. Looking forward to connecting with you!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="pt-6">
                {!process.env.NEXT_PUBLIC_FORMSPREE_ID && (
                  <Alert className="mb-6">
                    <AlertTitle>Direct email recommended</AlertTitle>
                    <AlertDescription>
                      For immediate assistance, please email me directly at{" "}
                      <a
                        href="mailto:mouinbkr@gmail.com"
                        className="text-primary underline"
                      >
                        mouinbkr@gmail.com
                      </a>
                    </AlertDescription>
                  </Alert>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Open to Opportunities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently available for freelance projects, full-time positions, and interesting collaborations.
            If you think we'd be a good fit, don't hesitate to reach out!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
