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

export default function AboutSection() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32 bg-white flex flex-col items-center px-6 sm:px-8 md:px-12">
      <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-6">

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#37322F] font-serif">
          Engineering Focused Software Studio
        </h2>

        {/* Subheading */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[#605A57] leading-relaxed font-normal">
          We're a team of engineers building targeted micro-SaaS solutions.
        </p>

      </div>
    </section>
  )
}