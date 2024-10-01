'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from "react-icons/si"

interface Technology {
  name: string
  icon: ReactNode
}

interface Project {
  title: string
  description: string
  image: string
  category: string
  technologies: Technology[]
}

const technologies: Technology[] = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
]

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with real-time inventory management and secure payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web",
    technologies: [technologies[0], technologies[1], technologies[2], technologies[3], technologies[4]],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team communication features.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobile",
    technologies: [technologies[0], technologies[6], technologies[8]],
  },
  {
    title: "Cloud-based Analytics Dashboard",
    description: "A scalable analytics platform processing large datasets to provide actionable business insights.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Data",
    technologies: [technologies[1], technologies[5], technologies[7], technologies[8]],
  },
  {
    title: "IoT Home Automation System",
    description: "An integrated smart home solution connecting various IoT devices for seamless home automation.",
    image: "/placeholder.svg?height=400&width=600",
    category: "IoT",
    technologies: [technologies[2], technologies[5], technologies[6]],
  },
]

const categories = ["All", "Web", "Mobile", "Data", "IoT"]

export function ProjectsPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-krona text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nuestra colección de proyectos innovadores que demuestran nuestra experiencia en diversas tecnologías y sectores.
          </p>
        </section>
        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <h4 className="font-semibold mb-2">Tecnologías utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
                              {tech.icon}
                              <span>{tech.name}</span>
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Ver Detalles</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <section className="text-center">
          <h3 className="text-2xl font-krona text-gray-900 mb-4">¿Listo para iniciar su proyecto?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Contáctenos hoy para discutir cómo podemos ayudarle a llevar su idea al siguiente nivel.
          </p>
          <Button size="lg" className="text-lg px-8 py-4" variant="customBlack">
            Solicitar Presupuesto
          </Button>
        </section>
      </main>
    </div>
  )
}