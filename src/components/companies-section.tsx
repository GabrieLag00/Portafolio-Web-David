'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const UTCancun = '/utcancun.png'
const OpSET = '/OpSET.png'

const companies = [
  {
    name: "OpSET México",
    logo: OpSET,
    description: "Es una empresa de desarrollo de software a medida que me dio la oportunidad de realizar mis estadías profesionales. Durante mi tiempo allí, logré un desempeño y resultados sobresalientes.",
    longDescription: "OpSET México es una empresa líder en el desarrollo de software personalizado. Durante mi estadía profesional, tuve la oportunidad de trabajar en proyectos innovadores que abarcaron desde aplicaciones web hasta soluciones de inteligencia artificial. Mi experiencia en OpSET no solo mejoró mis habilidades técnicas, sino que también me permitió comprender la importancia de la colaboración en equipo y la entrega de soluciones de alta calidad.",
    images: [OpSET, "/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    website: "https://www.opset.com"
  },
  {
    name: "Universidad Tecnológica de Cancún",
    logo: UTCancun,
    description: "Trabajo en la universidad como becario del área de TI, donde ayudé a implementar un sistema de gestión de incidencias técnicas.",
    longDescription: "En la Universidad Tecnológica de Cancún, mi rol como becario en el área de TI me permitió contribuir significativamente a la mejora de los procesos internos. El sistema de gestión de incidencias técnicas que ayudé a implementar ha optimizado la respuesta a problemas técnicos en todo el campus, mejorando la eficiencia operativa de la universidad. Esta experiencia me ha brindado una valiosa perspectiva sobre la aplicación práctica de la tecnología en entornos educativos.",
    images: [UTCancun, "/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    website: "https://www.utcancun.edu.mx"
  }
]

const CompanyModal = ({ company }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Saber más</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[625px] bg-white">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">{company.name}</DialogTitle>
        <DialogDescription>{company.description}</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {company.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center p-2 relative h-48">
                    <img src={image} alt={`${company.name} imagen ${index + 1}`} layout="fill" objectFit="contain" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className="text-sm text-gray-600">{company.longDescription}</p>
        <div className="flex justify-center mt-4">
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            <Button>Visitar sitio web</Button>
          </a>
        </div>
      </div>
    </DialogContent>
  </Dialog>
)

export function CompaniesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl font-krona">
              Empresas con las que he trabajado
            </h2>
            <p className="text-xl text-gray-600 mt-8 mb-8">
              He tenido el privilegio de ofrecer mis servicios a estas empresas,
              logrando resultados satisfactorios.
            </p>
          </div>

          <div className="lg:col-span-1">
            <div className="grid gap-8">
              {companies.map((company, index) => (
                <article key={index} className="bg-gray-100 border rounded-lg shadow-lg p-8 flex items-start gap-6">
                  <div className="relative h-32 w-32 flex-shrink-0">
                    <img
                      src={company.logo}
                      alt={company.name}
                      layout="fill"
                      objectFit="contain"
                      className="border border-gray-300"
                    />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold">{company.name}</h4>
                    </div>
                    <p className="text-gray-600">{company.description}</p>
                    <div className="pt-2">
                      <CompanyModal company={company} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}