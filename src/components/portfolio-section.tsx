'use client'

import React, { useCallback } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si'

const projects = [
  {
    title: "Sistema de Gestión Asistencia y Actividades Infantiles para Ministerios",
    description: "Este proyecto es un sistema diseñado para gestionar la información de los niños en actividades iglesia.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ],
    longDescription: "Este sistema integral permite a los ministerios gestionar eficientemente la asistencia y las actividades de los niños. Incluye funciones como registro de asistencia, planificación de actividades, y generación de informes detallados para los padres y líderes del ministerio."
  },
  {
    title: "App de Gestión Inteligente Baños (IoT Propuesta)",
    description: "Esta aplicación es un prototipo IoT y proyecto escalable, gestiona de manera eficiente los recursos sanitarios controla si baños están ocupados, mediante monitoreo en tiempo real.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "TypeScript", icon: <SiTypescript /> }
    ],
    longDescription: "Esta innovadora aplicación IoT utiliza sensores para monitorear en tiempo real el estado de ocupación de los baños, optimizando la gestión de recursos sanitarios. Proporciona datos valiosos sobre patrones de uso y ayuda a mejorar la eficiencia en la limpieza y mantenimiento."
  },
  {
    title: "E-Commerce de herramientas Trabajo",
    description: "Un sitio web de comercio electrónico para marcas material y herramientas construcción.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ],
    longDescription: "Esta plataforma de comercio electrónico ofrece una amplia gama de herramientas y materiales de construcción de alta calidad. Cuenta con un diseño intuitivo, sistema de búsqueda avanzado, reseñas de productos y un proceso de compra seguro y simplificado."
  }
]

const ProjectModal = ({ project }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="w-full">Ver más</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto bg-white">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
        <DialogDescription className="text-sm">{project.description}</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="w-full h-48 overflow-hidden rounded-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-600">{project.longDescription}</p>
        <div>
          <h4 className="font-semibold mb-2">Tecnologías utilizadas:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                <span className="mr-2 text-lg">{tech.icon}</span>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button>Ver más proyectos</Button>
      </div>
    </DialogContent>
  </Dialog>
)

export function PortfolioSectionComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps',
    dragFree: true
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/3 lg:pr-16 mb-8 lg:mb-0">
            <h2 className="text-4xl font-krona text-gray-900 mb-4">Portafolio</h2>
            <p className="text-xl text-gray-600 mb-8">
              Vea algunos de nuestros proyectos recientes de diseño y desarrollo web.
            </p>
            <div className="flex space-x-4">
              <Button onClick={scrollPrev} variant="outline" size="icon" aria-label="Proyecto anterior">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button onClick={scrollNext} variant="outline" size="icon" aria-label="Siguiente proyecto">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:w-2/3 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_calc(50%-1rem)] px-2" key={index}>
                  <Card className="h-full flex flex-col">
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg font-semibold line-clamp-2">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex-grow">
                      <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>
                    </CardContent>
                    <CardFooter className="p-4">
                      <ProjectModal project={project} />
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}