'use client'

import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaReact, FaLaravel, FaNodeJs, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiDocker, SiKubernetes, SiMongodb, SiFirebase, SiRedux, SiTensorflow, SiD3Dotjs } from 'react-icons/si'

const Mifoto = "/Photo.svg";
const UTCancun = "/utcancun.png";
const OpSET = "/OpSET.png";



const skills = [
  { name: 'React', icon: <FaReact />, color: 'text-blue-500', proficiency: 90 },
  { name: 'Laravel', icon: <FaLaravel />, color: 'text-red-500', proficiency: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', proficiency: 80 },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black', proficiency: 75 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-blue-400', proficiency: 95 },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600', proficiency: 85 },
  { name: 'Python', icon: <SiPython />, color: 'text-yellow-500', proficiency: 70 },
  { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500', proficiency: 65 },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-600', proficiency: 60 },
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with real-time inventory management.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    technologies: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Redux", icon: <SiRedux /> }
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "An analytics platform using machine learning for predictive insights.",
    technologies: [
      { name: "Python", icon: <SiPython /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "React", icon: <FaReact /> },
      { name: "D3.js", icon: <SiD3Dotjs /> }
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const certifications = [
  { name: "Bachillerato en Diseño Gráfico", issuer: "Universidad XYZ", year: 2018, pdf: "/path-to-pdf/diseno-grafico.pdf" },
  { name: "Técnico en Arquitectura de Software", issuer: "Instituto ABC", year: 2020, pdf: "/path-to-pdf/arquitectura-software.pdf" },
  { name: "Certificado en Sistemas Operativos", issuer: "CompTIA", year: 2021, pdf: "/path-to-pdf/sistemas-operativos.pdf" },
]

const companies = [
  { name: "UT Cancun", image: UTCancun },
  { name: "Opset", image: OpSET },
];


const Skill = ({ name, icon, color, proficiency }) => {
  const [isHovered, setIsHovered] = useState(false)
  const spring = useSpring({
    scale: isHovered ? 1.1 : 1,
    rotate: isHovered ? 10 : 0,
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.div
      style={spring}
      className={`flex flex-col items-center justify-center w-32 h-32 rounded-full bg-gray-100 cursor-pointer ${color}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-xs text-center">{name}</div>
      <div className="text-xs text-center mt-1">{proficiency}%</div>
    </animated.div>
  )
}

export function PortfolioPageComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src={Mifoto} alt="Gabriel David" className="rounded-full w-64 h-64 object-cover mx-auto" />
            <div className="flex justify-center mt-4 space-x-4">
              <a href="mailto:juan@example.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FaEnvelope size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-krona mb-4">Backend Developer + Graphic Designer</h2>
            <p className="text-xl text-gray-600 mb-6">
              Apasionado por crear experiencias digitales excepcionales que combinan diseño intuitivo con tecnología de vanguardia.
            </p>
            <div className="flex space-x-4">
              <Button variant="default">Descargar CV</Button>
              <Button variant="outline">Contactar</Button>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Mis Habilidades</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill) => (
              <Skill key={skill.name} {...skill} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="flex items-center gap-1">
                        <span className="text-lg">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Ver Detalles</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Certificaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Año de obtención: {cert.year}</p>
                </CardContent>
                <CardFooter>
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">Ver Certificado</Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Empresas Colaboradoras</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <img src={company.image} alt={company.name} className="w-24 h-24 object-contain mx-auto mb-2" />
                <p className="font-semibold">{company.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Estoy disponible para nuevos proyectos y oportunidades emocionantes.
          </p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <Input type="text" placeholder="Tu Nombre" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Tu Email" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Tu Mensaje" />
            </div>
            <Button className="w-full">Enviar Mensaje</Button>
          </form>
        </section>
      </main>
    </div>
  )
}