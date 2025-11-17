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
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="5" stroke="#37322F" strokeWidth="1" fill="none"/>
                <path d="M6 3v3l2 2" stroke="#37322F" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            }
            text="Coming Soon"
          />
          <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            More tools in the pipeline
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            We're constantly building new micro-SaaS products
            <br />
            to solve the workflow challenges you face every day.
          </div>
        </div>
      </div>

      {/* Upcoming Products Grid */}
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {upcomingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-[rgba(55,50,47,0.12)] rounded-lg p-6 hover:shadow-[0px_4px_12px_rgba(55,50,47,0.08)] transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 bg-[#F7F5F3] border border-[rgba(55,50,47,0.12)] rounded-full text-xs font-medium text-[#605A57]">
                    {product.category}
                  </div>
                  <div className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-medium text-orange-700">
                    {product.status}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#37322F] mb-2 font-sans">
                  {product.name}
                </h3>
                <p className="text-[#605A57] text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className="text-[#37322F] text-sm font-medium hover:underline">
                  Get notified →
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-[#605A57] text-sm mb-4">
              Want to be the first to know about new products?
            </p>
            <button className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.12)] text-[#37322F] rounded-full font-medium hover:bg-gray-50 transition-colors">
              Join Our Updates List
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}