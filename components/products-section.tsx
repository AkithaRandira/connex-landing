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

export default function ProductsSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="8" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
                <rect x="4" y="4" width="4" height="4" fill="#37322F" />
              </svg>
            }
            text="Our Products"
          />
          <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Built for modern workflows
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Each product is crafted to solve specific workflow challenges
            <br />
            with clean interfaces and powerful automation.
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
          {/* SubChecks Product Card */}
          <div className="w-full max-w-[800px] mx-auto bg-white rounded-lg border border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 shadow-[0px_2px_8px_rgba(55,50,47,0.08)]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#37322F] rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#37322F] font-sans">SubChecks</h3>
                    <p className="text-sm text-[#605A57] font-medium">Subscription Management</p>
                  </div>
                </div>
                <p className="text-[#605A57] text-base leading-relaxed mb-6">
                  Track and manage all your subscriptions in one place. Get notified before renewals, 
                  analyze spending patterns, and never lose track of recurring payments again.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-[#37322F] text-white rounded-full font-medium hover:bg-[#2A2520] transition-colors">
                    Try SubChecks
                  </button>
                  <button className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.12)] text-[#37322F] rounded-full font-medium hover:bg-gray-50 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
              <div className="w-full md:w-80 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-[#605A57] text-sm font-medium">SubChecks Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}