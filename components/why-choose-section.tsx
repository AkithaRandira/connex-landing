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
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white flex flex-col items-center px-6 sm:px-8 md:px-12">
        <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-6">
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#37322F] font-serif">
            Built Different, Built Better
          </h2>
          
          {/* Subheading */}
          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[#605A57] leading-relaxed font-normal">
            We're not just another software company.
            <br className="hidden sm:block" />
          </p>
        </div>
      </section>

      {/* Value Props Grid */}
      <div className="w-full py-8 sm:py-12 md:py-16 bg-white flex justify-center">
        <div className="w-full max-w-6xl px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] p-8 md:p-10 shadow-[0px_1px_3px_rgba(55,50,47,0.04)] hover:shadow-[0px_8px_32px_rgba(55,50,47,0.12)] hover:border-[rgba(55,50,47,0.16)] transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-14 h-14 bg-[#37322F] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {prop.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#37322F] text-xl md:text-2xl font-semibold leading-tight font-sans">
                  {prop.title}
                </h3>
                <p className="text-[#605A57] text-base md:text-lg font-normal leading-relaxed font-sans">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full py-16 sm:py-20 md:py-24 bg-[#F7F5F3] flex justify-center">
        <div className="w-full max-w-5xl px-6 sm:px-8 md:px-12 flex flex-col items-center text-center space-y-12">
          
          {/* Tech Stack Header */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#37322F] font-serif">
              Modern stack, proven results
            </h2>
            <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-[#605A57] leading-relaxed font-normal">
              Enterprise grade technologies powering scalable solutions.
              <br className="hidden sm:block" />
              Built for performance, designed for growth.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="w-full overflow-hidden">
            <div className="flex animate-scroll gap-8 md:gap-12" style={{animation: 'scroll 20s linear infinite'}}>
              <style jsx>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
              {/* React */}
              <div className="group flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="2" fill="#37322F"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4" stroke="#37322F" strokeWidth="1" fill="none"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4" stroke="#C0C0C0" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4" stroke="#C0C0C0" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">React</span>
                </div>
              </div>

              {/* Next.js */}
              <div className="group flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#37322F"/>
                    <path d="M12 2v20" stroke="#C0C0C0" strokeWidth="1"/>
                    <path d="M2 7l10 5 10-5" stroke="#C0C0C0" strokeWidth="1"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">Next.js</span>
                </div>
              </div>

              {/* TypeScript */}
              <div className="group flex-shrink-0">
                <div className="w-24 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="2" fill="#37322F"/>
                    <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" fill="#C0C0C0"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">TypeScript</span>
                </div>
              </div>

              {/* Node.js */}
              <div className="group flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#37322F"/>
                    <circle cx="12" cy="12" r="3" fill="#C0C0C0"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">Node.js</span>
                </div>
              </div>

              {/* PostgreSQL */}
              <div className="group flex-shrink-0">
                <div className="w-24 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="#37322F"/>
                    <rect x="6" y="6" width="12" height="2" fill="#C0C0C0"/>
                    <rect x="6" y="10" width="12" height="2" fill="#C0C0C0"/>
                    <rect x="6" y="14" width="8" height="2" fill="#C0C0C0"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">PostgreSQL</span>
                </div>
              </div>

              {/* AWS */}
              <div className="group flex-shrink-0">
                <div className="w-16 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12l9-9 9 9-9 9-9-9z" fill="#37322F"/>
                    <path d="M12 6v12" stroke="#C0C0C0" strokeWidth="1"/>
                    <path d="M6 12h12" stroke="#C0C0C0" strokeWidth="1"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">AWS</span>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="group flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="2" fill="#37322F"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4" stroke="#37322F" strokeWidth="1" fill="none"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4" stroke="#C0C0C0" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4" stroke="#C0C0C0" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">React</span>
                </div>
              </div>

              <div className="group flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#37322F"/>
                    <path d="M12 2v20" stroke="#C0C0C0" strokeWidth="1"/>
                    <path d="M2 7l10 5 10-5" stroke="#C0C0C0" strokeWidth="1"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">Next.js</span>
                </div>
              </div>

              <div className="group flex-shrink-0">
                <div className="w-24 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="2" fill="#37322F"/>
                    <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" fill="#C0C0C0"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">TypeScript</span>
                </div>
              </div>

              <div className="group flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#37322F"/>
                    <circle cx="12" cy="12" r="3" fill="#C0C0C0"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">Node.js</span>
                </div>
              </div>

              <div className="group flex-shrink-0">
                <div className="w-24 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="#37322F"/>
                    <rect x="6" y="6" width="12" height="2" fill="#C0C0C0"/>
                    <rect x="6" y="10" width="12" height="2" fill="#C0C0C0"/>
                    <rect x="6" y="14" width="8" height="2" fill="#C0C0C0"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">PostgreSQL</span>
                </div>
              </div>

              <div className="group flex-shrink-0">
                <div className="w-16 h-20 bg-white rounded-2xl border border-[rgba(55,50,47,0.08)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] flex flex-col items-center justify-center gap-1 group-hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12l9-9 9 9-9 9-9-9z" fill="#37322F"/>
                    <path d="M12 6v12" stroke="#C0C0C0" strokeWidth="1"/>
                    <path d="M6 12h12" stroke="#C0C0C0" strokeWidth="1"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#37322F] font-sans">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}