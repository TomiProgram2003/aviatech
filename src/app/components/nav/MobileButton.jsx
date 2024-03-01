import React from 'react'

const MobileButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={ () => { setOpen(!open) } }
      className='bg-[#f3f7f6ee] p-4 rounded-xl drop-shadow-sm shadow-sm active:drop-shadow-2xl active:shadow-inner lg:hidden'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
      </svg>
    </button>
  )
}

export default MobileButton