"use client";

import { useState } from "react";
import { Image } from 'astro:assets';
const GOT = '/GOT DE PERIL.jpg';
import { Button } from "@/components/ui/button";
import {
  Heart,
  Brain,
  Users,
  Lightbulb,
  Target,
  Clock,
  Link,
} from "lucide-react";



export default function SectionOne() {
  const [showMore, setShowMore] = useState(false);

  const softSkills = [
    { icon: Heart, name: "Empatía" },
    { icon: Brain, name: "Pensamiento crítico" },
    { icon: Users, name: "Trabajo en equipo" },
    { icon: Lightbulb, name: "Creatividad" },
    { icon: Target, name: "Orientación a resultados" },
    { icon: Clock, name: "Gestión del tiempo" },
  ];

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };




  return (
    <section className="flex flex-col lg:flex-row items-start justify-between min-h-screen bg-white dark:bg-slate-800 p-8 lg:p-20">
      <div className="lg:w-1/2 lg:pr-8">
        <header>
          <h1 className="text-5xl text-black dark:text-white font-krona mb-8">
            Servicios y Soluciones de Software a tu Alcance
          </h1>
          <div className="text-lg text-gray-800 dark:text-gray-200 mb-8">
            <p className="mb-4">
              Estoy graduado de la carrera de Técnico en Desarrollo y
              Arquitectura de Software. Cuento con amplios conocimientos en el
              desarrollo de software y ofrezco servicios personalizados para
              crear soluciones que se ajusten a tus necesidades.
            </p>
            {showMore && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Gabriel David Lizama Gómez
                </h2>
                <p className="mb-4">
                  Soy más que capaz de hacer y cumplir con proyectos de
                  software. Mi experiencia y dedicación me permiten enfrentar
                  desafíos complejos y entregar soluciones de alta calidad.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Mis habilidades blandas:
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <skill.icon className="w-6 h-6 mr-2" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex space-x-4">
            <Button onClick={toggleShowMore} variant="customBlack" size="lg">
              {showMore ? "Leer Menos" : "Leer Más"}
            </Button>
            <Button  variant="customGray" size="lg">
              Certificaciones
            </Button>
          </div>
        </header>
      </div>

      <div className="lg:w-1/2 lg:sticky lg:top-20 mt-8 lg:mt-0">
        <figure>
          <img
            src={GOT}
            alt="foto"
            className="rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </figure>
      </div>
    </section>
  );
}
