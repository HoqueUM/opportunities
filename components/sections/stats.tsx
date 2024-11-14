import { ScrollFade } from "@/components/animations/scroll-fade"

const stats = [
  { value: "500+", label: "Active Internships" },
  { value: "1000+", label: "Students Placed" },
  { value: "200+", label: "Partner Companies" },
  { value: "50+", label: "Universities" }
]

export default function Stats() {
  return (
    <div className="container mt-16 sm:mt-32 px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <ScrollFade key={index}>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-yellow-500">{stat.value}</span>
              <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
            </div>
          </ScrollFade>
        ))}
      </div>
    </div>
  )
}