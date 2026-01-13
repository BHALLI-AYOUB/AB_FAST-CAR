"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Phone, ChevronDown } from "lucide-react"

const translations = {
  fr: {
    title1: "Location de voitures",
    title2: "de luxe au Maroc",
    subtitle: "Service premium 24/7 – Large flotte : citadines, berline ,SUV, familiales et modèles de luxe",
    cta: "Réserver maintenant",
    secondary: "Découvrir la flotte",
  },
  en: {
    title1: "Luxury car rental",
    title2: "in Morocco",
    subtitle: "Premium 24/7 service – Wide fleet of high-end vehicles",
    cta: "Book now",
    secondary: "Discover fleet",
  },
}

const carImages = [
  "/WHITECLAA.jpeg",
  "/A3.jpeg",
  "/cupraa.jpeg",
  "/G63FULLBLACK.jpeg",
  "/rangerover.jpeg",
  "/porchecayyene.jpeg",
  "/Q8.jpeg",
  "/whiterange.jpeg",
  "/CLAA.jpeg",
  "/touareg.jpeg",
  "/touareginside.jpeg",
  "/cupra2025.jpeg",
]

export function HeroSection({ language }: { language: "fr" | "en" }) {
  const t = translations[language]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload all images
    carImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
    
    // Trigger animation after mount
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  useEffect(() => {
    // Change image every 2 seconds (faster)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const scrollToFleet = () => {
    document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/212601666665", "_blank")
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        .hero-title {
          font-family: 'Montserrat', sans-serif;
        }
        
        .hero-subtitle {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes hoverFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .subtitle-animate {
          animation: floatIn 1.2s ease-out forwards, hoverFloat 3s ease-in-out infinite;
          animation-delay: 0s, 1.2s;
        }
      `}</style>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {carImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Luxury car ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="space-y-12">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {t.title1}
                </span>
                <span className="block text-white mt-2">
                  {t.title2}
                </span>
              </h1>
              
              <div className={`flex items-center justify-center gap-4 pt-4 ${isLoaded ? 'subtitle-animate' : 'opacity-0'}`}>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                <p className="hero-subtitle text-xl md:text-2xl text-gray-300 font-light max-w-3xl italic">
                  {t.subtitle}
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-16 py-8 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_50px_rgba(250,204,21,0.8)] transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-3 h-6 w-6" />
                {t.cta}
              </Button>
              
              <Button
                onClick={scrollToFleet}
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-16 py-8 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                {t.secondary}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center items-center pt-8">
              <a
                href="https://www.instagram.com/abfastcar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300">
                  <Instagram className="h-6 w-6 text-white group-hover:text-yellow-400 transition-colors" />
                </div>
              </a>
              
              <a
                href="https://facebook.com/abfastcar"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300">
                  <Facebook className="h-6 w-6 text-white group-hover:text-yellow-400 transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToFleet}
          className="absolute bottom-8 right-8 z-20 text-white/60 hover:text-yellow-400 transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>
    </>
  )
}
