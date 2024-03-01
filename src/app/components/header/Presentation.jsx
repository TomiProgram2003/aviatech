import React from 'react'

const Presentation = () => {
  return (
    <article
      id='About'
      className='xl:w-3/5 sm:w-4/5 mt-20 pb-5 px-6 mx-auto flex flex-col items-center'
    >
      <h2 className='text-center text-4xl font-orbitron'>
        Nosotros Somos
      </h2>
      <h1 className='text-center text-4xl font-stencil italic mt-3'>
        AVIA<span className='bg-[#4f8181] pl-1 pr-3 text-[#f3f7f6aa]'>TECH</span>
      </h1>
      <p className='lg:w-3/5 sm:w-4/5 mx-auto mt-5 text-center'>
        Una empresa con <b>más de 25 años de experiencia</b> dedicada a brindar servicios aeronáuticos de alta calidad. <b>Nuestra misión</b> es garantizar el cumplimiento de la normativa pertinente y ofrecer <b>máxima seguridad y confianza</b> a nuestros clientes.
      </p>
      <p className='sm:w-4/5 mx-auto mt-5 text-center my-4'>
        En <b>AVIATECH</b>, aspiramos a ser reconocidos como <b>líderes en la industria aeronáutica</b>, tanto a nivel local como regional. Buscamos continuar brindando <b>soluciones innovadoras y de calidad</b> que satisfagan las necesidades de nuestros clientes y contribuyan al <b>desarrollo sostenible</b> del sector.
      </p>
    </article>
  )
}

export default Presentation