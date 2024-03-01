'use client'
import React from 'react'

const Queries = ({ articleClss }) => {
  return (
    <article  className={`${articleClss} lg:col-span-2 p-12 max-sm:px-2`}>
      <h3
        className='sm:text-5xl max-sm:text-3xl font-orbitron text-gray-300 text-center'
        style={ { textShadow: '3px 3px #000' } }
      >
        Consultas
      </h3>

      <form className="mt-6 text-white">
        <textarea
          required
          id="query"
          name="query"
          placeholder='ESCRIBE TU CONSULTA AQUI...'
          className='w-full h-36 resize-none bg-[#69495eaa] hover:bg-[#785b6eaa] duration-75 shadow-[#0a0709] shadow-2xl p-4 rounded-md outline-none placeholder:text-gray-300'
        />
        <div className='mt-4 lg:pr-12 max-md:px-4 flex justify-end items-center max-sm:flex-col max-sm:items-end max-sm:justify-center gap-4'>
          <input
            required
            type="email" 
            placeholder='Introduce tu Email'
            className=' max-md:w-full bg-[#4e4969aa] hover:bg-[#605b78aa] duration-75 p-4 rounded-md outline-none shadow-[#08070a] shadow-2xl'
          />
          <input
            type="submit"
            value='ENVIAR'
            onClick={
              async () => {
                try {
                  const response = await fetch('api/mailer', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
              
                  if (response.ok) {
                    console.log('Correo enviado correctamente');
                  } else {
                    console.error('Error al enviar el correo');
                  }
                } catch (error) {
                  console.error('Error de red:', error);
                }
              }
            }
            style={ { letterSpacing: '.5em' } }
            className='bg-[#4f4969aa] hover:bg-[#8f84beaa]  max-md:text-sm duration-75 p-4 rounded-md outline-none shadow-[#08070a] shadow-2xl cursor-pointer font-orbitron'
          />
        </div>
      </form>
    </article>
  )
}

export default Queries