"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, Send, Sparkles, MessageCircle } from "lucide-react"

const translations = {
  fr: {
    title: "RESTONS EN",
    titleGradient: "CONTACT",
    subtitle: "Notre équipe est à votre disposition 24/7 pour répondre à tous vos besoins",
    name: "Nom complet",
    email: "Email",
    phone: "Téléphone",
    message: "Message",
    whatsapp: "Réserver sur WhatsApp",
    instagram: "Suivez-nous",
    info: {
      phone: "+212 601 66 66 65",
      email: "Abfastcar@gmail.com",
      address: "Rabat, Maroc",
      instagram: "@abfastcar",
    },
  },
  en: {
    title: "GET IN",
    titleGradient: "TOUCH",
    subtitle: "Our team is at your disposal 24/7 to meet all your needs",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    whatsapp: "Reserve on WhatsApp",
    instagram: "Follow us",
    info: {
      phone: "+212 601 66 66 65",
      email: "Abfastcar@gmail.com",
      address: "Rabat, Morocco",
      instagram: "@abfastcar",
    },
  },
}

const contactCards = [
  {
    icon: Phone,
    key: "phone",
    color: "from-blue-400 to-cyan-400",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: Mail,
    key: "email",
    color: "from-purple-400 to-pink-400",
    bgGlow: "bg-purple-500/20",
  },
  {
    icon: MapPin,
    key: "address",
    color: "from-green-400 to-emerald-400",
    bgGlow: "bg-green-500/20",
  },
  {
    icon: Instagram,
    key: "instagram",
    color: "from-orange-400 to-red-400",
    bgGlow: "bg-orange-500/20",
  },
]

export function ContactSection({ language }: { language: "fr" | "en" }) {
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Form submission logic here
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/212601666665`, "_blank")
  }

  const handleInstagram = () => {
    window.open(`https://www.instagram.com/abfastcar/`, "_blank")
  }

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(250, 204, 21, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(250, 204, 21, 0.6);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes rotate-border {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .contact-card {
          position: relative;
          overflow: hidden;
        }
        
        .contact-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.6s;
        }
        
        .contact-card:hover::before {
          left: 100%;
        }
        
        .icon-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #fbbf24 0%,
            #fef3c7 50%,
            #fbbf24 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sparkles className="h-10 w-10 text-yellow-400 animate-pulse" />
              <h2 className="text-6xl md:text-7xl font-black tracking-tight">
                <span className="text-white">{t.title} </span>
                <span className="shimmer-text">{t.titleGradient}</span>
              </h2>
              <Sparkles className="h-10 w-10 text-yellow-400 animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <p className="text-xl text-zinc-400 font-light italic max-w-2xl">{t.subtitle}</p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="contact-card group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={card.key === 'instagram' ? handleInstagram : undefined}
              >
                <div className={`relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 text-center transition-all duration-500 border-2 ${hoveredCard === index ? 'border-transparent scale-105' : 'border-zinc-800'}`}>
                  {/* Gradient Border Effect */}
                  {hoveredCard === index && (
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} opacity-20 blur-xl`} />
                  )}
                  
                  {/* Glow Background */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${card.bgGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className={`icon-float inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${card.color} p-1 group-hover:scale-110 transition-transform duration-500`} style={{animationDelay: `${index * 0.2}s`}}>
                      <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                        <card.icon className="h-10 w-10 text-white group-hover:scale-125 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-xl font-bold mb-3 ${hoveredCard === index ? `bg-gradient-to-r ${card.color} bg-clip-text text-transparent` : 'text-white'} transition-all duration-300`}>
                      {t[card.key as keyof typeof t]}
                    </h3>
                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-sm">
                      {t.info[card.key as keyof typeof t.info]}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-8">
            {/* WhatsApp Button */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity rounded-full" />
              <Button
                onClick={handleWhatsApp}
                className="relative bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black font-bold text-lg px-16 py-8 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-black"
              >
                <MessageCircle className="mr-3 h-7 w-7" />
                {t.whatsapp}
              </Button>
            </div>

            {/* Decorative Text */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 blur-xl opacity-30" />
              <p className="relative text-2xl font-bold text-white px-8 py-4 bg-gradient-to-r from-zinc-900 to-black rounded-full border-2 border-yellow-400/50">
                ⚡ Réponse rapide garantie !
              </p>
            </div>
          </div>

          {/* Bottom Decorative Line */}
          <div className="mt-20 flex justify-center">
            <div className="relative">
              <div className="h-1 w-96 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
