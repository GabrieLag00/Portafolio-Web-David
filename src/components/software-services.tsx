'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Globe, Database, ShieldCheck, Cpu, X, ChevronDown, ChevronUp, Check } from "lucide-react"

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold">{service.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            {service.icon}
            <div>
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
          <div className="mb-6">
            <h5 className="font-semibold mb-2">Características principales:</h5>
            <ul className="grid grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="font-semibold mb-2">Detalles del servicio:</h5>
            <p className="text-gray-600">{service.details}</p>
          </div>
          <div className="mb-6">
            <h5 className="font-semibold mb-2">Tecnologías y herramientas:</h5>
            <p className="text-gray-600">{service.expandedContent}</p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button size="lg" onClick={() => alert('Formulario de contacto abierto')}>
              Solicitar una cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SoftwareServices() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web y aplicaciones web personalizadas y de alto rendimiento.",
      icon: <Globe className="h-12 w-12 text-blue-500" />,
      features: ["Diseño responsive", "SEO optimizado", "Rendimiento rápido", "Integración de CMS", "Seguridad avanzada", "Soporte continuo"],
      details: "Nuestro equipo de desarrolladores web expertos crea sitios y aplicaciones web a medida que no solo se ven increíbles, sino que también funcionan perfectamente. Utilizamos las últimas tecnologías y mejores prácticas para garantizar que su presencia en línea sea rápida, segura y fácil de usar. Nos especializamos en diseño responsive, optimización para motores de búsqueda y rendimiento de carga rápida para brindar la mejor experiencia posible a sus usuarios.",
      expandedContent: "Tecnologías que utilizamos: React, Vue.js, Angular, Node.js, PHP, Ruby on Rails. Ofrecemos servicios de diseño UX/UI, desarrollo frontend y backend, integración de CMS, optimización de rendimiento y mantenimiento continuo."
    },
    {
      title: "Desarrollo Móvil",
      description: "Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android.",
      icon: <Smartphone className="h-12 w-12 text-green-500" />,
      features: ["Apps nativas iOS", "Apps nativas Android", "Desarrollo híbrido", "UI/UX móvil", "Integración de APIs", "Notificaciones push"],
      details: "Nuestro equipo de desarrollo móvil crea aplicaciones nativas para iOS y Android, así como soluciones híbridas que funcionan en múltiples plataformas. Nos aseguramos de que sus aplicaciones sean intuitivas, eficientes y aprovechen al máximo las capacidades de los dispositivos móviles modernos. Ya sea que necesite una aplicación para consumidores o una herramienta empresarial interna, podemos ayudarlo a llevar su idea del concepto a la realidad.",
      expandedContent: "Frameworks que utilizamos: React Native, Flutter, Swift para iOS, Kotlin para Android. Ofrecemos servicios de diseño de UI/UX móvil, desarrollo de aplicaciones nativas e híbridas, integración de APIs, implementación de funciones como notificaciones push y geolocalización."
    },
    {
      title: "Desarrollo Backend",
      description: "Construimos APIs robustas y escalables para potenciar sus aplicaciones.",
      icon: <Database className="h-12 w-12 text-purple-500" />,
      features: ["APIs RESTful", "GraphQL", "Microservicios", "Bases de datos SQL/NoSQL", "Escalabilidad", "Seguridad de datos"],
      details: "Nuestros servicios de desarrollo backend se centran en crear la columna vertebral de sus aplicaciones. Diseñamos y desarrollamos APIs RESTful y GraphQL que son rápidas, seguras y escalables. También implementamos arquitecturas de microservicios para aplicaciones más complejas, lo que permite una mayor flexibilidad y escalabilidad. Nuestras soluciones backend están diseñadas para manejar cargas pesadas y crecer con su negocio.",
      expandedContent: "Tecnologías que utilizamos: Node.js, Python, Java, Go. Ofrecemos servicios de diseño y desarrollo de APIs, implementación de bases de datos (SQL y NoSQL), arquitectura de microservicios, optimización de rendimiento y escalabilidad."
    },
    {
      title: "Ciberseguridad",
      description: "Protegemos sus sistemas y datos con soluciones de seguridad avanzadas.",
      icon: <ShieldCheck className="h-12 w-12 text-red-500" />,
      features: ["Auditorías de seguridad", "Pruebas de penetración", "Encriptación de datos", "Gestión de identidad", "Respuesta a incidentes", "Formación en seguridad"],
      details: "La seguridad es primordial en el mundo digital actual. Nuestro equipo de expertos en ciberseguridad ofrece una gama completa de servicios para proteger sus sistemas y datos. Realizamos auditorías de seguridad exhaustivas, pruebas de penetración para identificar vulnerabilidades y implementamos soluciones de encriptación de última generación. También ofrecemos formación en seguridad para sus empleados y asesoramiento sobre mejores prácticas de seguridad.",
      expandedContent: "Servicios que ofrecemos: Evaluaciones de vulnerabilidad, pruebas de penetración (ethical hacking), implementación de firewalls y sistemas de detección de intrusos, gestión de identidad y acceso, respuesta a incidentes y recuperación ante desastres."
    },
    {
      title: "Inteligencia Artificial",
      description: "Implementamos soluciones de IA y aprendizaje automático para su negocio.",
      icon: <Cpu className="h-12 w-12 text-yellow-500" />,
      features: ["Machine Learning", "Procesamiento de lenguaje natural", "Visión por computadora", "Análisis predictivo", "Chatbots", "Sistemas de recomendación"],
      details: "Nuestros servicios de Inteligencia Artificial y Aprendizaje Automático están diseñados para ayudar a su empresa a aprovechar el poder de los datos. Desarrollamos modelos de machine learning personalizados, implementamos soluciones de procesamiento de lenguaje natural (NLP) y creamos sistemas de visión por computadora avanzados. Ya sea que necesite automatizar procesos, obtener insights de sus datos o crear experiencias de usuario inteligentes, nuestro equipo de expertos en IA puede ayudarlo.",
      expandedContent: "Tecnologías que utilizamos: TensorFlow, PyTorch, scikit-learn, OpenCV. Ofrecemos servicios de análisis predictivo, clasificación y segmentación de clientes, chatbots y asistentes virtuales, sistemas de recomendación, análisis de sentimientos y reconocimiento de imágenes y voz."
    },
    {
      title: "DevOps",
      description: "Optimizamos su flujo de trabajo de desarrollo y despliegue.",
      icon: <Code className="h-12 w-12 text-indigo-500" />,
      features: ["CI/CD", "Containerización", "Orquestación", "Infraestructura como código", "Monitoreo", "Automatización"],
      details: "Nuestros servicios de DevOps están diseñados para optimizar y automatizar sus procesos de desarrollo y despliegue. Implementamos pipelines de integración y entrega continua (CI/CD) para acelerar sus ciclos de desarrollo. Utilizamos tecnologías de containerización como Docker para garantizar la consistencia entre entornos. También configuramos sistemas de monitoreo robustos para que pueda identificar y resolver problemas rápidamente. Nuestro objetivo es ayudarlo a entregar software de alta calidad de manera más rápida y eficiente.",
      expandedContent: "Herramientas que utilizamos: Jenkins, GitLab CI, Docker, Kubernetes, Ansible, Terraform. Ofrecemos servicios de implementación de CI/CD, containerización y orquestación, infraestructura como código, monitoreo y logging, y optimización de rendimiento de aplicaciones."
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="transition-all hover:shadow-lg cursor-pointer"
                  onClick={() => setSelectedService(service)}>
                  <CardHeader>
                    <div className="flex flex-col items-center space-y-4 text-center">
                      {service.icon}
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400 text-center">{service.description}</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" className="w-full">
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-krona  sm:text-5xl">
                  ¿Listo para impulsar su negocio?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto">
                  Contáctenos hoy para una consulta gratuita y descubra cómo nuestros servicios de software pueden transformar su empresa.
                </p>
              </div>
              <Button size="lg" className="mt-4" variant='customBlack'>
                Solicitar Consulta Gratuita
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService} />
    </div>
  );
}