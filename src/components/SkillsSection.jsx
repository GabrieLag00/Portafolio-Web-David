'use client'

export function SkillsSection() {
  return (
    (<section className="c-segundaseccion py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            className="flex flex-col justify-between min-h-[300px]  p-6 transition-transform duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16 mx-auto text-blue-600 mb-4">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Integración de Módulos
            </h3>
            <p className="text-gray-600 flex-grow">
              Desarrollo módulos específicos que pueden integrarse fácilmente en
              tus sistemas existentes, mejorando su funcionalidad y adaptándose a
              tus necesidades específicas.
            </p>
            <a
              href="#leer-mas"
              className="text-primary font-semibold mt-4 inline-block hover:underline">
              Leer más
            </a>
          </article>
          <article
            className="flex flex-col justify-between min-h-[300px] p-6 transition-transform duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16 mx-auto text-green-600 mb-4">
              <polyline points="4 7 4 4 20 4 20 7"></polyline>
              <line x1="9" x2="15" y1="20" y2="20"></line>
              <line x1="12" x2="12" y1="4" y2="20"></line>
            </svg>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Diseño de Interfaces (Front-end)
            </h3>
            <p className="text-gray-600 flex-grow">
              Soy capaz de diseñar y desarrollar interfaces específicas que se
              ajustan a las necesidades del cliente. Mis interfaces son simples,
              funcionales y están optimizadas para ofrecer una excelente
              experiencia de usuario.
            </p>
            <a
              href="#leer-mas"
              className="text-primary font-semibold mt-4 inline-block hover:underline">
              Leer más
            </a>
          </article>
          <article
            className="flex flex-col justify-between min-h-[300px] p-6  transition-transform duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16 mx-auto text-purple-600 mb-4">
              <path
                d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path
                d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Sistemas de Software a Medida
            </h3>
            <p className="text-gray-600 flex-grow">
              Diseño y desarrollo sistemas de software completos a la medida de
              tus requisitos, asegurando que cada componente esté alineado con tus
              objetivos empresariales.
            </p>
            <a
              href="#leer-mas"
              className="text-primary font-semibold mt-4 inline-block hover:underline">
              Leer más
            </a>
          </article>
          <article
            className="flex flex-col justify-between min-h-[300px] p-6 transition-transform duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16 mx-auto text-red-600 mb-4">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Desarrollo de Backend
            </h3>
            <p className="text-gray-600 flex-grow">
              Como especialista en backend, me enfoco en crear arquitecturas
              robustas y eficientes. Manejo bases de datos, servidores y lógica de
              negocio para garantizar que tu aplicación funcione sin problemas y
              pueda crecer con tu negocio.
            </p>
            <a
              href="#leer-mas"
              className="text-primary font-semibold mt-4 inline-block hover:underline">
              Leer más
            </a>
          </article>
        </div>
      </div>
    </section>)
  );
}




