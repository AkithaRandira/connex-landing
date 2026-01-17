export default function FooterSection() {
  return (
    <footer className="w-full bg-[#2D3047] text-white">
      
      {/* Main Footer */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/Connex99LOGO.png" 
              alt="Connex99 Logo" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <h2 className="text-2xl font-semibold">Connex99</h2>
          </div>
          <p className="text-sm text-gray-300">
            Intelligent automation solutions for modern businesses.
          </p>
          <a href="mailto:connex99it@gmail.com" className="text-sm text-gray-300 hover:text-[#7209B7] transition">
            connex99it@gmail.com
          </a>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Products</h3>
          <a href="#products" className="text-sm text-gray-300 hover:text-[#7209B7] transition">Connex99 Pro</a>
          <a href="#future-products" className="text-sm text-gray-300 hover:text-[#7209B7] transition">WorkFlow AI</a>
          <a href="#future-products" className="text-sm text-gray-300 hover:text-[#7209B7] transition">DataBridge</a>
          <a href="#future-products" className="text-sm text-gray-300 hover:text-[#7209B7] transition">SmartTasks</a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <a href="#about" className="text-sm text-gray-300 hover:text-[#7209B7] transition">About Us</a>
          <a href="#why-choose" className="text-sm text-gray-300 hover:text-[#7209B7] transition">Why Choose Us</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-[#7209B7] transition">Contact</a>
          <a href="#careers" className="text-sm text-gray-300 hover:text-[#7209B7] transition">Careers</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Legal</h3>
          <a href="/terms" className="text-sm text-gray-300 hover:text-[#7209B7] transition">Terms of Service</a>
          <a href="/privacy" className="text-sm text-gray-300 hover:text-[#7209B7] transition">Privacy Policy</a>
          <a href="/cookies" className="text-sm text-gray-300 hover:text-[#7209B7] transition">Cookie Policy</a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-white/10" />

      {/* Copyright Row */}
      <div className="w-full py-6 flex justify-center">
        <p className="text-xs text-gray-400">
          © 2025 Connex99.com | All rights reserved.
        </p>
      </div>
    </footer>
  )
}
