import { Briefcase, Code, Users } from "lucide-react"
import { ScrollFade } from "@/components/animations/scroll-fade"

const features = [
  {
    icon: Briefcase,
    title: "Internship Matches",
    description: "Get matched with internships that align with your skills and career goals"
  },
  {
    icon: Code,
    title: "Real Projects",
    description: "Work on real-world projects to build your portfolio and gain practical experience"
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Connect with industry professionals who can guide your career journey"
  }
]

export default function Features() {
  return (
    <div className="container mt-16 sm:mt-32 px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <ScrollFade key={index}>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="rounded-full bg-yellow-500/10 p-4 mb-4">
                <feature.icon className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </ScrollFade>
        ))}
      </div>
    </div>
  )
}