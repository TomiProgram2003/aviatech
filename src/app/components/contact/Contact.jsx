import React from 'react'
import Map from './Map'
import Information from './Information'
import Queries from './Queries'

const Contact = () => {

  const articleClss = "container bg-[#64694950] hover:bg-[#b4be8550] hover:backdrop-sepia duration-300 rounded-3xl lg:col-span-1 max-lg:col-span-2 flex flex-col backdrop-blur-sm" 

  return (
    <section
      id='Contact'
      className='container mx-auto mt-12 p-8 rounded-xl  h-fit grid grid-cols-2 gap-4'
      style={
        {
          opacity: '0.8',
          backgroundColor: '#aca49c',
          backgroundImage: 'radial-gradient(circle at center center, #13140e, #aca49c), repeating-radial-gradient(circle at center center, #13140e, #13140e, 10px, transparent 20px, transparent 10px)',
          backgroundBlendMode: 'multiply'
        }
      }  
    >
      <Information articleClss={ articleClss } />
      <Map articleClss={ articleClss } />
      <Queries articleClss={ articleClss } />
    </section>
  )
}

export default Contact