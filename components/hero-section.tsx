"use client"

export default function HeroSection() {
  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 flex flex-col items-center px-6 sm:px-8 md:px-12">
      <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-8">

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] text-[#37322F] font-serif">
          Streamline Your Freelance Workflow
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[#605A57] leading-relaxed font-normal">
          SaaS tools built for freelancers to organize projects and manage clients.
          <br className="hidden sm:block" />
         
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="#products" 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#37322F] to-slate-700 text-white font-medium hover:from-[#2A2520] hover:to-slate-800 transition-all shadow-lg hover:shadow-blue-200/30 hover:shadow-xl text-center"
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
            className="px-8 py-3 rounded-full bg-white text-[#37322F] font-medium border border-[rgba(55,50,47,0.12)] hover:bg-blue-50/50 hover:border-blue-200/50 transition-all shadow-sm hover:shadow-blue-100/50 text-center"
          >
            Learn about SubChecks →
          </a>
        </div>

      </div>
    </section>
  );
}
