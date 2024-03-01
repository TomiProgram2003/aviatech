
import React from 'react'
import { IconFacebook, IconInstagram, IconMail, IconTelephone, IconWhatsapp } from './Icons'

export const InformationData = [
  {
    icon: <IconMail />,
    text: 'contacto@aviatech.com'
  },
  {
    icon: <IconTelephone />,
    text: '+ 54 9 11 1234 5678'
  },
  {
    icon: <IconWhatsapp />,
    text: '+ 54 9 11 1234 5678'
  },
  {
    icon: <IconInstagram />,
    text: '@AVIA.TECH'
  },
  {
    icon: <IconFacebook />,
    text: '@AVIA.TECH'
  },
]

const Information = ({ articleClss }) => {
  return (
    <article className={`${articleClss} p-12 max-sm:px-0`}>
      <h3
        className='sm:text-5xl max-sm:text-3xl font-orbitron text-gray-300 text-center'
        style={ { textShadow: '3px 3px #000' } }
      >
        Contacto
      </h3>

      <div
        className="h-full flex flex-col justify-between gap-8 text-gray-200 mt-8"
        style={ { textShadow: '3px 3px 3px #000' } }
      >
        {
          InformationData.map(
            ({ icon, text }, i) => (
              <p
                key={ i }
                className='min-w-fit flex gap-3 items-center sm:text-2xl max-sm:text-lg max-sm:flex-col max-sm:justify-center hover:scale-110 duration-75 cursor-default'
                style={ { filter: 'drop-shadow(5px 5px 2px #000)' } }
              >
                { icon }
                { text}
              </p>
            )
          )
        }
      </div>
    </article>
  )
}

export default Information