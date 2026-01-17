"use client"

export default function HeroSection() {
  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 flex flex-col items-start px-6 sm:px-8 md:px-12 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Connex99+LinkedIn+Banner.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="w-full max-w-5xl flex flex-col items-start text-left space-y-8 relative z-10">

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] font-serif text-white drop-shadow-lg">
          Automate Your Business,
          <br className="hidden sm:block" />
          Amplify Your Growth
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-normal drop-shadow-md">
          Streamline operations, eliminate repetitive tasks, and scale your business with intelligent automation solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="#products" 
            className="px-8 py-3 rounded-full bg-[#7209B7] text-white font-medium hover:bg-[#8a2ac7] transition-all shadow-lg hover:shadow-[#7209B7]/50 hover:shadow-xl text-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Automating Today
          </a>

          <a 
            href="#about" 
            className="px-8 py-3 rounded-full bg-[#2D3047] text-white font-medium hover:bg-[#3d4057] transition-all shadow-lg text-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See How It Works →
          </a>
        </div>

      </div>
    </section>
  );
}
