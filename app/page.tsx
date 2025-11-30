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
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-6 sm:px-8 md:px-12 lg:px-16">
        <div
          className={`w-full max-w-4xl h-12 sm:h-14 md:h-[58px] px-6 bg-white/95 backdrop-blur-xl border border-[rgba(55,50,47,0.12)] rounded-full flex justify-between items-center transition-all duration-300 ${
            scrolled
              ? "shadow-[0_8px_24px_rgba(59,130,246,0.08)]"
              : "shadow-[0_4px_14px_rgba(59,130,246,0.04)]"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-slate-800 text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">
            <img 
              src="/connex99.png" 
              alt="Connex99 Logo" 
              className="h-8 w-8 rounded-lg object-cover"
            />
            Connex99
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <a 
              href="#about" 
              className="relative text-sm text-slate-600 hover:text-slate-800 transition-colors duration-150 px-3 py-2 rounded-full group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Solutions</span>
              <span className="absolute inset-0 bg-blue-100/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
            </a>
            <a 
              href="#products" 
              className="relative text-sm text-slate-600 hover:text-slate-800 transition-colors duration-150 px-3 py-2 rounded-full group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Automation</span>
              <span className="absolute inset-0 bg-blue-100/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
            </a>
            <a 
              href="#why-choose" 
              className="relative text-sm text-slate-600 hover:text-slate-800 transition-colors duration-150 px-3 py-2 rounded-full group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Company</span>
              <span className="absolute inset-0 bg-blue-100/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
            </a>
            <a 
              href="#future-products" 
              className="relative text-sm text-slate-600 hover:text-slate-800 transition-colors duration-150 px-3 py-2 rounded-full group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('future-products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Resources</span>
              <span className="absolute inset-0 bg-blue-100/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
            </a>
          </div>

          {/* CTA */}
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition shadow-sm">
            Get Started
          </button>
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