import React from 'react'


const Map = ({ articleClss }) => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8459968801535!2d-58.372852723446485!3d-34.60805557295286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352cbe276f75%3A0xe16921ef0545f86d!2sCasa%20Rosada!5e0!3m2!1ses-419!2sar!4v1706921737426!5m2!1ses-419!2sar"

  return (
    <article className={`${ articleClss } justify-start items-center gap-4 p-12 max-md:px-4`}>
      <h3
        className='sm:text-5xl max-sm:text-3xl font-orbitron text-gray-300'
        style={ { textShadow: '3px 3px #000' } }
      >
        Ubicación
      </h3>

      <p
        className='w-full flex items-center gap-2 text-xl text-gray-200'
        style={ { textShadow: '3px 3px 3px #000' } }
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        Balcarce 78
      </p>

      <iframe
        className='w-full h-full rounded-lg opacity-75 hover:opacity-100 duration-300'
        src={ mapSrc }
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </article>
  )
}

export default Map