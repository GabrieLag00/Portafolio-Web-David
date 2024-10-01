'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const skills = [
  {
    title: "Integración de Módulos",
    description: "Desarrollo módulos específicos que pueden integrarse fácilmente en tus sistemas existentes, mejorando su funcionalidad y adaptándose a tus necesidades específicas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 mx-auto mb-4">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    color: "text-blue-600",
    service: "Ofrezco servicios de integración de módulos personalizados para optimizar y expandir la funcionalidad de tus sistemas existentes.",
    images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
  },
  {
    title: "Diseño de Interfaces (Front-end)",
    description: "Diseño y desarrollo interfaces específicas que se ajustan a las necesidades del cliente. Mis interfaces son simples, funcionales y están optimizadas para ofrecer una excelente experiencia de usuario.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 mx-auto mb-4">
        <polyline points="4 7 4 4 20 4 20 7"></polyline>
        <line x1="9" x2="15" y1="20" y2="20"></line>
        <line x1="12" x2="12" y1="4" y2="20"></line>
      </svg>
    ),
    color: "text-green-600",
    service: "Proporciono servicios de diseño de interfaces de usuario intuitivas y atractivas, centradas en la experiencia del usuario y la funcionalidad.",
    images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
  },
  {
    title: "Sistemas de Software a Medida",
    description: "Diseño y desarrollo sistemas de software completos a la medida de tus requisitos, asegurando que cada componente esté alineado con tus objetivos empresariales.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 mx-auto mb-4">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
    color: "text-purple-600",
    service: "Desarrollo sistemas de software personalizados que se adaptan perfectamente a las necesidades específicas de tu negocio, mejorando la eficiencia y productividad.",
    images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
  },
  {
    title: "Desarrollo de Backend",
    description: "Como especialista en backend, me enfoco en crear arquitecturas robustas y eficientes. Manejo bases de datos, servidores y lógica de negocio para garantizar que tu aplicación funcione sin problemas y pueda crecer con tu negocio.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 mx-auto mb-4">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    color: "text-red-600",
    service: "Ofrezco servicios de desarrollo backend robustos y escalables, asegurando que la infraestructura de tu aplicación sea sólida y eficiente.",
    images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
  },
]

const SkillModal = ({ skill }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="link" className={`${skill.color} font-semibold hover:underline`}>
        Leer más
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[625px] bg-white">
      <DialogHeader>
        <DialogTitle className={`${skill.color} text-2xl font-bold`}>{skill.title}</DialogTitle>
        <DialogDescription>{skill.description}</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <h4 className="font-semibold mb-2">Servicio ofrecido:</h4>
        <p className="text-sm text-gray-600">{skill.service}</p>
        <h4 className="font-semibold mb-2">Ejemplos de trabajo:</h4>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {skill.images.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt={`Ejemplo ${index + 1}`} className="w-full h-auto rounded-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mt-4 flex justify-center">
        <Button className={`${skill.color.replace('text', 'bg')} text-white hover:${skill.color.replace('text', 'bg')}-dark`}>
          Ver más servicios
        </Button>
      </div>
    </DialogContent>
  </Dialog>
)

export function SkillsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="flex flex-col justify-between transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <div className={`${skill.color}`}>{skill.icon}</div>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{skill.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <SkillModal skill={skill} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}