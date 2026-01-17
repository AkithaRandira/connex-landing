import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full border-b border-[#7209B7]/20 bg-[#2D3047]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <img 
                src="/Connex99LOGO.png" 
                alt="Connex99 Logo" 
                className="h-7 w-auto"
              />
              <div className="text-white font-semibold text-lg">Connex99</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-white hover:text-[#7209B7] text-sm font-medium transition-colors">Products</button>
              <button className="text-white hover:text-[#7209B7] text-sm font-medium transition-colors">Pricing</button>
              <button className="text-white hover:text-[#7209B7] text-sm font-medium transition-colors">Docs</button>
            </div>
          </div>
          <Button variant="ghost" className="text-white hover:bg-[#7209B7] hover:text-white">
            Log in
          </Button>
        </nav>
      </div>
    </header>
  )
}
