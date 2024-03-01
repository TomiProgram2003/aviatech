import React from 'react'
import Banner from './Banner'
import Presentation from './Presentation'

const Header = () => {
  return (
    <header
      id='Home'
      className='mx-auto container bg-[#aca49c] rounded-xl'
      style={
        {
          backgroundImage: 'linear-gradient(to bottom, #13140eaa, #aca49cff 85%), url("/images/banner.jpg")'
        }
      }
    >
      <Banner />
      <Presentation />
    </header>
  )
}

export default Header