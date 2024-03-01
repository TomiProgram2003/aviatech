import React from 'react'

const Services = () => {
  return (
    <section
      id='Services'
      className='mx-auto my-12 p-8 container bg-[#aca49caa] rounded-xl'
      style={
        {
          background: 'linear-gradient(#aca49cff, #aca49c55)'
        }
      }
    >
      <h3 className=' font-orbitron text-5xl tracking-widest'>
        Nuestros Servicios
      </h3>

      <ul className='list-disc *:my-6 pl-6 text-lg w-4/5'>
        <li>
          <p>
            <span className='text-2xl font-medium underline underline-offset-4 pr-2 tracking-wider'>
              Mantenimiento Aeronáutico:
            </span>
            <br />
            Ofrecemos servicios de <b>mantenimiento de aeronaves</b> con los más altos estándares de <b>calidad y seguridad</b>, asegurando el óptimo funcionamiento y rendimiento de las aeronaves de nuestros clientes.
          </p>
        </li>
        
        <li>
          <p>
            <span className='text-2xl font-medium underline underline-offset-4 pr-2'>
              Consultoría y Asesoramiento:
            </span>
            <br />
            Proporcionamos <b>asesoramiento experto</b> en materia aeronáutica, ayudando a empresas y particulares a tomar <b>decisiones informadas y estratégicas</b> para optimizar sus operaciones y cumplir con los <b>requisitos regulatorios</b>.
          </p>
        </li>

        <li>
          <p>
            <span className='text-2xl font-medium underline underline-offset-4 pr-2'>
              Instrucción y Capacitación: 
            </span>
            <br />
            A través de nuestra rama <b>AVIATECH CIAC</b>, nos dedicamos a la instrucción y capacitación del personal aeronáutico, empresas y particulares. Nuestra misión es permitirles <b>ampliar sus conocimientos y habilidades</b>, reduciendo costos y tiempos operativos y facilitando su actividad en el sector.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Services