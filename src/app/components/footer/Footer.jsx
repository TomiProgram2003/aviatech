import React from 'react'
import Image from 'next/image'
import { InformationData } from '../contact/Information'
import CoursesData from '../courses/courses.json'

const Footer = () => {
  return (
    <footer className=' '>
      <div className="wraper relative">
        <svg
          style={{ filter: 'drop-shadow(0 0 80px #f3f7f633)'}}
          className='w-full h-full'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f3f7f672"
            fillOpacity="1"
            d="M0,96L30,106.7C60,117,120,139,180,149.3C240,160,300,160,360,138.7C420,117,480,75,540,90.7C600,107,660,181,720,213.3C780,245,840,235,900,213.3C960,192,1020,160,1080,149.3C1140,139,1200,149,1260,144C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>

        <Image
            className='absolute bottom-16 left-4 max-lg:hidden'
            style={ { filter: 'drop-shadow(8px 6px 12px #f3f7f6)' } }
            src='/images/logoR.png'
            width={280}
            height={100}
            alt='logo'
          />
      </div>
      
      <section
        className='w-full h-fit pb-12'
        style={ { background: 'linear-gradient(#f3f7f672, #f3f7f6ff)' } }
      >
        <article className='w-full bg-[#0f00] p-6'>
          <div className="wraper container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-12">

            <div className='mx-auto max-sm:w-[300px]'>
              <h3 className='text-3xl font-orbitron underline'>
                CONTACTO
              </h3>
              <ul>
                {
                  InformationData.map(
                    ({ icon, text }, index) => (
                      <li
                        key={index}
                        className='flex items-center gap-2 mt-6 text-gray-200 text-xl cursor-default' 
                        style={
                          {
                            filter: 'drop-shadow(3px 5px 5px #000a)',
                            textShadow: '3px 5px 5px #000'
                          }
                        }
                      >
                        <i style={ { filter: 'drop-shadow(0 0 2px #000)' } }>
                          { icon }
                        </i>
                        { text }
                      </li>
                    )
                  )
                }
              </ul>
            </div>

            <div className='font-orbitron mx-auto max-sm:w-[300px]'>
              <h3 className='text-3xl underline mb-4'>
                CURSOS
              </h3>
              <ul>
                {
                  CoursesData.map(
                    ({ title }, i) => (
                      <li
                        key={ i }
                        className='my-2 list-item list-disc text-[#413d39aa] text-lg marker:text-[#413d39]'
                        style={
                          {
                            filter: 'drop-shadow(0 0 5px #f3f7f6)',
                            textShadow: '1px 1px 1px #000'
                          }
                        }
                        >
                        <a
                          href="#"
                          className='hover:text-black'
                          >
                          { `${title}` }
                        </a>
                      </li>
                    )
                  )
                }
              </ul>
            </div>

            <div className='mx-auto'>
              <h3 className='text-center text-4xl font-stencil italic mt-3'>
                AVIA<span className='bg-[#4f8181] pl-1 pr-3 text-[#f3f7f6aa]'>TECH</span>
              </h3>
              <h6 className='text-center text-2xl font-orbitron my-4'>
                Centro de Instrucción & Capacitación de Vuelo
              </h6>
              <p className='mt-2 w-4/5 mx-auto text-justify'>
                Nos comprometemos a ser una <b>opción de calidad</b> en cuanto a capacitación e instrucción para todo el <b>personal técnico</b> involucrado en la actividad aeronáutica. Buscamos ser inclusivos en nuestra oferta de instrucción y aspiramos a tener un <b>impacto significativo</b> en el crecimiento y la excelencia del sector a <b>nivel local y regional</b>.
              </p>
            </div>
          </div>
        </article>
      </section>
    </footer>
  )
}

export default Footer