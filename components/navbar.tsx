"use client"

import { Briefcase } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { FadeIn } from "./animations/fade-in"
import { MobileNav } from "./mobile-nav"

export default function Navbar() {
  return (
    <FadeIn>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">opportunities.tech</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Internships
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Projects
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Community
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
            <Button className="hidden md:inline-flex bg-yellow-500 hover:bg-yellow-600 text-white">Get Started</Button>
            <MobileNav />
          </div>
        </div>
      </header>
    </FadeIn>
  )
}