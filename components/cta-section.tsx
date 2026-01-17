"use client"

export default function CTASection() {
  return (
    <div className="w-full bg-gradient-to-br from-white via-blue-50/20 to-slate-50 flex flex-col justify-center items-center">
      {/* Content */}
      <section className="w-full py-20 sm:py-24 md:py-32 flex flex-col items-center px-6 sm:px-8 md:px-12">
        <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-8">
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-slate-800 font-serif">
            Ready to Automate Your Business?
          </h2>
          
          {/* Subheading */}
          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-normal">
            Join forward-thinking businesses that have eliminated manual work and boosted productivity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#products"
              className="px-8 py-4 bg-[#7209B7] text-white rounded-full font-semibold text-base hover:bg-[#8a2ac7] transition-all duration-200 shadow-lg hover:shadow-[#7209B7]/50 hover:shadow-xl text-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Automation Journey
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-white border-2 border-[#7209B7] text-[#7209B7] rounded-full font-semibold text-base hover:bg-[#7209B7] hover:text-white transition-all duration-200 text-center"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
