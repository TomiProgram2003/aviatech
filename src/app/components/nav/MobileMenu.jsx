import React from 'react'
import Item from './Item'

const MobileMenu = ({ items, setOpen }) => {
  return (
    <article className='fixed top-0 left-0 z-[1000] h-[100vh] w-4/6 bg-[#f3f7f6ee] px-12 pt-36 animate-fade-right animate-once animate-duration-[750ms] animate-ease-in-out'>
      
      <button
        onClick={ () => { setOpen(false) }}
        className='absolute top-5 right-3 stroke-[#413d39] active:stroke-[#13140e]'
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          fill='none'
          className="w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <ul className='flex flex-col gap-20'>
        {
          Object.entries(items).map(
            ([label, href]) => (
              <Item
                key={ href }
                item={ { label, href } }
              />
            )
          )
        }
      </ul>
    </article>
  )
}

export default MobileMenu