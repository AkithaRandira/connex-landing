"use client"

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function FutureProductsSection() {
  const upcomingProducts = [
    {
      name: "TaskFlow",
      description: "Project management simplified",
      status: "In Development",
      category: "Productivity"
    },
    {
      name: "DataSync",
      description: "Seamless data integration",
      status: "Planning",
      category: "Integration"
    },
    {
      name: "TimeTrack",
      description: "Intelligent time tracking",
      status: "Research",
      category: "Analytics"
    }
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white flex flex-col items-center px-6 sm:px-8 md:px-12">
        <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-6">
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#37322F] font-serif">
            What's Next in Our Lab
          </h2>
          
          {/* Subheading */}
          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-[#605A57] leading-relaxed font-normal">
            Innovation never stops. We're crafting the next generation
            <br className="hidden sm:block" />
            of tools to streamline your freelance workflow.
          </p>
        </div>
      </section>

      {/* Upcoming Products Grid */}
      <div className="w-full py-8 sm:py-12 md:py-16 bg-[#F7F5F3] flex justify-center">
        <div className="w-full max-w-6xl px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {upcomingProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] p-8 shadow-[0px_1px_3px_rgba(55,50,47,0.04)] hover:shadow-[0px_8px_32px_rgba(55,50,47,0.12)] hover:border-[rgba(55,50,47,0.16)] transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 bg-[#F7F5F3] rounded-full text-xs font-semibold text-[#605A57] font-sans">
                    {product.category}
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-full text-xs font-semibold text-orange-700">
                    {product.status}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#37322F] text-xl md:text-2xl font-semibold leading-tight font-sans">
                    {product.name}
                  </h3>
                  <p className="text-[#605A57] text-base leading-relaxed font-sans">
                    {product.description}
                  </p>
                </div>
                <button className="text-[#37322F] text-sm font-semibold hover:text-[#1F1B19] transition-colors duration-200 self-start group-hover:translate-x-1 transition-transform">
                  Get Early Access →
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}