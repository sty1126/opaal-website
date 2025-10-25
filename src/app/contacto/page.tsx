"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-wide">Contáctanos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Envíanos un mensaje o contáctanos directamente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="border border-accent/20 rounded-lg bg-card">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      required
                      className="flex h-10 w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Opaalhotelboutique@gmail.com"
                      required
                      className="flex h-10 w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+57 314 2407922"
                      className="flex h-10 w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      required
                      className="flex min-h-[80px] w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-medium transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="border border-accent/20 rounded-lg bg-card">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Información de Contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Teléfono</h3>
                        <p className="text-muted-foreground">+57 314 2407922</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">Opaalhotelboutique@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Dirección</h3>
                        <p className="text-muted-foreground">
                          Carrera 11a #119-30
                          <br />
                          Bogotá D.C., Colombia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-accent/20 rounded-lg bg-card">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Síguenos</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Mantente conectado con nosotros en redes sociales para ver las últimas novedades y ofertas
                    especiales.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center flex-1 h-12 px-6 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-colors"
                    >
                      <Instagram className="h-5 w-5 mr-2" />
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center flex-1 h-12 px-6 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-colors"
                    >
                      <Facebook className="h-5 w-5 mr-2" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
