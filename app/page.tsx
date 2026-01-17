"use client"
import type React from "react"
import { useEffect, useState } from "react"
import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import ProductsSection from "../components/products-section"
import WhyChooseSection from "../components/why-choose-section"

import FutureProductsSection from "../components/future-products-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-x-hidden">
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#2D3047] border-b border-[#7209B7]/20">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 text-white text-2xl font-semibold hover:opacity-80 transition-opacity">
              <img 
                src="/Connex99LOGO.png" 
                alt="Connex99 Logo" 
                className="h-20 w-20 rounded-lg object-cover"
              />
              Connex99
            </a>

            {/* Links */}
            <div className="hidden md:flex items-center gap-10">
              <a 
                href="#about" 
                className="text-white hover:text-[#7209B7] transition-colors duration-200 text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Solutions
              </a>
              <a 
                href="#products" 
                className="text-white hover:text-[#7209B7] transition-colors duration-200 text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Automation
              </a>
              <a 
                href="#why-choose" 
                className="text-white hover:text-[#7209B7] transition-colors duration-200 text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Company
              </a>
              <a 
                href="#future-products" 
                className="text-white hover:text-[#7209B7] transition-colors duration-200 text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('future-products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Resources
              </a>
            </div>

            {/* CTA */}
            <button className="px-8 py-3 bg-[#7209B7] text-white rounded-lg text-lg font-medium hover:bg-[#8a2ac7] transition-all duration-200 shadow-lg hover:shadow-[#7209B7]/50">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Content with top padding to clear navbar */}
      <div className="pt-28 sm:pt-32 md:pt-36">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="products">
          <ProductsSection />
        </div>
        <div id="why-choose">
          <WhyChooseSection />
        </div>

        <div id="future-products">
          <FutureProductsSection />
        </div>
        <CTASection />
        <FooterSection />
      </div>
    </div>
  )
}