"use client"

export default function HeroSection() {
  return (
    <section className="w-full pt-28 sm:pt-36 md:pt-44 pb-20 sm:pb-24 flex flex-col items-center px-6 sm:px-8 md:px-12">
      <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-8">

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] text-[#37322F] font-serif">
          Streamline Your Freelance Workflow
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[#605A57] leading-relaxed font-normal">
          Purpose-built micro-SaaS tools that help freelancers organize projects,
          <br className="hidden sm:block" />
          manage clients, and focus on what matters most.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="px-8 py-3 rounded-full bg-[#37322F] text-white font-medium hover:bg-[#2A2520] transition-all">
            Explore Our Products
          </button>

          <button className="px-8 py-3 rounded-full bg-white text-[#37322F] font-medium border border-[rgba(55,50,47,0.12)] hover:bg-gray-50 transition-all">
            Learn about SubChecks →
          </button>
        </div>

      </div>
    </section>
  );
}
