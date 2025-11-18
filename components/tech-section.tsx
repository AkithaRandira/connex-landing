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

export default function TechSection() {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Tailwind", icon: "🎨" }
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-gradient-to-b from-white via-blue-50/20 to-slate-50/30 flex flex-col justify-center items-center">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="10" height="10" stroke="#37322F" strokeWidth="1" fill="none" />
                <rect x="3" y="3" width="2" height="2" fill="#37322F" />
                <rect x="7" y="3" width="2" height="2" fill="#37322F" />
                <rect x="3" y="7" width="6" height="2" fill="#37322F" />
              </svg>
            }
            text="Technology"
          />
          <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Modern stack, proven results
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            We use battle-tested technologies to build fast, reliable,
            <br className="hidden sm:block" />
            and maintainable software that scales with your needs.
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50/40 rounded-lg border border-[rgba(55,50,47,0.12)] hover:border-blue-200/50 p-6 h-24 sm:h-28 md:h-32 flex flex-col justify-center items-center gap-2 shadow-[0px_2px_8px_rgba(59,130,246,0.06)] hover:shadow-[0px_8px_24px_rgba(59,130,246,0.12)] transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl filter hover:hue-rotate-180 transition-all duration-300">
                {tech.icon}
              </div>
              <div className="text-center flex justify-center flex-col text-xs sm:text-sm md:text-base font-semibold leading-tight font-sans transition-colors duration-300" style={{color: '#3b82f6'}}>
                {tech.name}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}