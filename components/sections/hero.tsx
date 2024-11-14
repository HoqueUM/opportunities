"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export default function Hero() {
  return (
    <div className="container relative z-10 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn delay={0.2}>
          <h1 className="text-3xl font-bold tracking-tight sm:text-6xl">
            Launch Your CS Career with
            <span className="text-yellow-500"> Real Experience</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
            Your one-stop platform for internships, projects, and mentorship opportunities. 
            Start building your tech career today with hands-on experience that matters.
          </p>
        </FadeIn>
        <FadeIn delay={0.6}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Browse Opportunities
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}