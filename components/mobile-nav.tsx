"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          <Link
            href="#"
            className="text-lg font-medium hover:text-yellow-500 transition-colors"
          >
            Internships
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-yellow-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-yellow-500 transition-colors"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-yellow-500 transition-colors"
          >
            Community
          </Link>
          <div className="flex flex-col space-y-4 pt-4 border-t">
            <Button variant="outline" className="w-full">Sign In</Button>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Get Started</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}