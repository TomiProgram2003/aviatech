'use client'

import React, { useState } from 'react'

const Item = ({ item }) => {
  const [
    isHovered,
    setIsHovered
  ] = useState(false)

  const styles = {
    color: '#8f9390',
    cursor: 'pointer',
    transition: 'color .3s'
  }

  const hoveredStyles = {
    color: '#413d39'
  }


  return (
    <li
      className='font-stencil 2xl:text-3xl xl:text-2xl lg:text-xl md:text-5xl sm:text-4xl max-sm:text-2xl'
      onMouseEnter={ () => setIsHovered(true) }
      onMouseLeave={ () => setIsHovered(false) }
      style={
        isHovered ?
          {
            ...styles,
            ...hoveredStyles
          }
        : styles
      }
    >
      <a href={ item.href }>
        { item.label }
      </a>
    </li>
  )
}

export default Item