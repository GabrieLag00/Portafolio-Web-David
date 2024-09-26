'use client'

import React, { useCallback } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Sistema de Gestión Asistencia y Actividades Infantiles para Ministerios",
    description: "Este proyecto es un sistema diseñado para gestionar la información de los niños en actividades iglesia.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "App de Gestión Inteligente Baños (IoT Propuesta)",
    description: "Esta aplicación es un prototipo IoT y proyecto escalable, gestiona de manera eficiente los recursos sanitarios controla si baños están ocupados, mediante monitoreo en tiempo real.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "E-Commerce de herramientas Trabajo",
    description: "Un sitio web de comercio electrónico para marcas material y herramientas construcción.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

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
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" className="w-full">Ver más</Button>
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