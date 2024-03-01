'use client'

import { useEffect, useState } from 'react'
import DesktopNav from './DesktopNav'
import MobileButton from './MobileButton'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {
  const [ prevScrollPos, setPrevScrollPos ] = useState(0)
  const [ visible, setVisible ] = useState(true)

  const [mobileOpenButton, setMobileOpenButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      setVisible(
        (
          prevScrollPos > currentScrollPos
        ) || (
          currentScrollPos < 70
        )
      )
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => (
      window.removeEventListener('scroll', handleScroll)
    )
  }, [prevScrollPos])

  const items = {
    'Inicio': '#Home',
    '¿Quienes Somos?': '#About',
    'Servicios': '#Services',
    'Cursos': '#Courses',
    'Contacto': '#Contact',
  }

  const visibleClasses = 'visible animate-fade-down animate-once animate-duration-500 animate-ease-out animate-normal animate-fill-forwards'

  return (
    <>
      <nav
        className=' z-[100] mx-auto container h-min fixed top-0 left-[50%] translate-x-[-50%]'
      >
        <div className={`${visible ? visibleClasses : 'hidden'} bg-[#f3f7f6ee] w-full flex justify-between items-center rounded-b-md py-10 xl:px-16 lg:px-4 sm:max-lg:px-16 max-sm:px-4`}>
          <Image
            alt='AVIA TECH LOGO'
            width={ 220 }
            height={ 80 }
            src='/images/logoR.png'
            className='max-sm:w-[100px]'
          />
          
          <DesktopNav items={ items } />
          <MobileButton
            open={ mobileOpenButton }
            setOpen={ setMobileOpenButton }
          />
        </div>
      </nav>

      {
        mobileOpenButton ? (
          <MobileMenu
            items={ items }
            setOpen={ setMobileOpenButton }
          />
        ) : null
      }
    </>
  )
}

export default Navbar