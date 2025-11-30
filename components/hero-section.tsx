"use client"

export default function HeroSection() {
  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 flex flex-col items-center px-6 sm:px-8 md:px-12">
      <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-8">

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] text-slate-800 font-serif">
          Automate Your Business,
          <br className="hidden sm:block" />
          Amplify Your Growth
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-normal">
          Streamline operations, eliminate repetitive tasks, and scale your business with intelligent automation solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="#products" 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-200/30 hover:shadow-xl text-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Automating Today
          </a>

          <a 
            href="#about" 
            className="px-8 py-3 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-slate-100/50 text-center"
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
