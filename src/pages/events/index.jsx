import React from 'react'
import OurEvents from './partials/OurEvents'
import Event from '../homepage/partials/Event'

const Events = () => {
  return (
    <div className='bg-gradient-to-r from-black from-70% to-red-800'>
      <OurEvents />
      <Event />
    </div>
  )
}

export default Events