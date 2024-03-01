import React from 'react'

const Banner = () => {
  return (
    <article className='font-stencil w-100 h-max pt-20 px-8 flex justify-center items-center'>
      <h2
        className='text-center lg:text-7xl md:text-5xl sm:text-4xl max-sm:text-3xl  text-[#546667]'
        style={
          {
            lineHeight: '1.8em',
            textShadow: '2px 2px 2px #9ababc, 5px 5px 10px #13140e'
          }
        }
      >
        <span className='lg:text-9xl md:text-8xl sm:text-7xl max-sm:text-6xl'>CENTRO</span>
        <span className='sm:text-6xl mx-sm:text-4xl'> DE</span>
        <br />
        INSTRUCCION & CAPACITACION
        <br />
        AERONAUTICA
      </h2>
    </article>
  )
}

export default Banner