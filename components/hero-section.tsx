"use client"

export default function HeroSection() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 flex flex-col justify-start items-center px-6 sm:px-8 md:px-12 lg:px-16 w-full">
      <div className="w-full max-w-5xl flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#37322F] leading-tight tracking-tight font-serif">
            Zentralizing Your Workflows
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#605A57] font-medium max-w-3xl mx-auto leading-relaxed">
            Engineering-focused software studio building micro-SaaS products
            <br className="hidden sm:block" />
            that streamline operations and boost productivity.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button className="px-8 py-3 bg-[#37322F] text-white rounded-full font-medium hover:bg-[#2A2520] transition-colors">
            Explore Our Products
          </button>
          <button className="px-8 py-3 bg-white text-[#37322F] rounded-full font-medium border border-[rgba(55,50,47,0.12)] hover:bg-gray-50 transition-colors">
            Learn about SubChecks →
          </button>
        </div>
      </div>
    </div>
  )
}