"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function CustomBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border">
      <div className="w-3.5 h-3.5 flex items-center justify-center">{icon}</div>
      <span className="text-xs font-medium">{text}</span>
    </Badge>
  )
}

export default function ProductsSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <CustomBadge
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="4.5" y="4.5" width="5" height="5" fill="currentColor" />
              </svg>
            }
            text="Our Products"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Built for modern
            <br />
            workflows
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each product is crafted to solve specific workflow challenges with clean interfaces and powerful automation.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* SubChecks Product Card */}
          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-card">
            <div className="flex flex-col">
              {/* Content Section - Above Preview */}
              <div className="p-8 md:p-12 bg-white">
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold">SubChecks</h3>
                      <p className="text-sm text-muted-foreground font-medium mt-1">Subscription Management</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                    Track and manage all your subscriptions in one place.
                    <br />
                    Get notified before renewals and never lose track of recurring payments.
                  </p>
                </div>
              </div>

              {/* Preview Image */}
              <div 
                className="relative bg-white h-[400px] md:h-[500px] flex items-center justify-center p-2 md:p-3 cursor-pointer group"
                onClick={() => window.open('https://subchecks.com', '_blank')}
              >
                <div className="w-full h-full bg-background rounded-lg overflow-hidden border-2 relative">
                  {/* Browser Chrome */}
                  <div className="w-full h-9 bg-muted border-b flex items-center px-3 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-3 flex-1 bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      subchecks.com
                    </div>
                  </div>
                  
                  {/* Website Preview Image */}
                  <div className="w-full h-[calc(100%-2.25rem)] bg-white p-4">
                    <img 
                      src="/subchecks.png"
                      alt="SubChecks Preview"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Small External Link Icon - Top Right Corner */}
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - After Image */}
              <div className="p-8 md:p-12 bg-white border-t">
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="rounded-full px-10 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      asChild
                    >
                      <a href="https://subchecks.com" target="_blank" rel="noopener noreferrer">
                        Try SubChecks Free
                      </a>
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="rounded-full px-10 py-3 text-base font-semibold border-2 hover:bg-muted/50 transition-all"
                      asChild
                    >
                      <a href="https://subchecks.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}