"use client"

export default function CTASection() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center">
      {/* Content */}
      <section className="w-full py-20 sm:py-24 md:py-32 flex flex-col items-center px-6 sm:px-8 md:px-12">
        <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-8">
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#37322F] font-serif">
            Ready to Transform Your Workflow?
          </h2>
          
          {/* Subheading */}
          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-[#605A57] leading-relaxed font-normal">
            Join thousands of freelancers who've streamlined their work
            <br className="hidden sm:block" />

          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#products"
              className="px-8 py-4 bg-[#37322F] text-white rounded-full font-semibold text-base hover:bg-[#1F1B19] transition-all duration-200 shadow-sm hover:shadow-md text-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Products
            </a>
            <a 
              href="https://subchecks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-[#37322F] text-[#37322F] rounded-full font-semibold text-base hover:bg-[#37322F] hover:text-white transition-all duration-200 text-center"
            >
              Try SubChecks Free
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
