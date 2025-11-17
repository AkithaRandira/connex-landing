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

export default function WhyChooseSection() {
  const valueProps = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Engineering Excellence",
      description: "Built by engineers, for professionals who value clean code, reliable systems, and thoughtful design."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      title: "Focused Solutions",
      description: "Each product solves one problem exceptionally well, rather than trying to be everything to everyone."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="white" strokeWidth="2"/>
          <line x1="12" y1="22.08" x2="12" y2="12" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      title: "Minimal Complexity",
      description: "Clean interfaces and straightforward workflows that get out of your way and let you focus on what matters."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      title: "Privacy First",
      description: "Your data stays yours. We build tools that respect privacy and give you complete control over your information."
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
                <path d="M6 1l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3L6 1z" stroke="#37322F" strokeWidth="1" fill="none"/>
              </svg>
            }
            text="Why Choose Zentria Labs"
          />
          <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Built different, built better
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            We're not just another software company. We're engineers
            <br />
            who understand the tools you need to do your best work.
          </div>
        </div>
      </div>

      {/* Value Props Grid */}
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 shadow-[0px_2px_8px_rgba(55,50,47,0.04)] hover:shadow-[0px_4px_16px_rgba(55,50,47,0.08)] transition-shadow flex flex-col justify-start items-start gap-4 sm:gap-6"
            >
              <div className="w-12 h-12 bg-[#37322F] rounded-lg flex items-center justify-center">
                {prop.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                  {prop.title}
                </h3>
                <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}