import React from 'react'
import Item from './Item'

const DesktopNav = ({ items }) => {
  return (
    <ul className='flex gap-8 lg:visible sm:max-lg:hidden max-sm:hidden'>
      {/*
        items.map(
          item => (
            <Item
              key={ item }
              item={ item }
            />
          )
        )
          */}
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
  )
}

export default DesktopNav