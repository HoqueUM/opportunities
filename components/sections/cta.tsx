"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollFade } from "@/components/animations/scroll-fade"

export default function CTA() {
  return (
    <div className="container mt-16 sm:mt-32 mb-16 sm:mb-24 px-4 sm:px-6">
      <ScrollFade>
        <div className="relative isolate overflow-hidden bg-yellow-500 rounded-3xl px-4 py-16 sm:px-16 sm:py-24 text-center shadow-2xl">
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Start Your Tech Journey Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-8 text-yellow-50">
            Join thousands of CS students who have kickstarted their careers through opportunities.tech
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Button size="lg" variant="secondary">
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </ScrollFade>
    </div>
  )
}