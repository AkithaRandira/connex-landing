export default function FooterSection() {
  return (
    <footer className="w-full bg-gradient-to-br from-black via-slate-900 to-slate-800 text-white">
      
      {/* Main Footer */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-16 flex flex-col sm:flex-row justify-between items-start gap-12">

        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/connex99.png" 
              alt="Connex99 Logo" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <h2 className="text-2xl font-semibold">Connex99</h2>
          </div>
          <p className="text-sm text-gray-400">
            Intelligent automation solutions for modern businesses.
          </p>
        </div>

        {/* Right Side Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm">
          <a href="/terms" className="text-gray-300 hover:text-white transition">Terms of Service</a>
          <a href="/privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</a>
          <a href="/cookies" className="text-gray-300 hover:text-white transition">Cookie Policy</a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-white/10" />

      {/* Copyright Row */}
      <div className="w-full py-6 flex justify-center">
        <p className="text-xs text-gray-500">
          © 2025 Connex99.com | All rights reserved.
        </p>
      </div>
    </footer>
  )
}
