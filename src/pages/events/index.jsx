import React from 'react'
import OurEvents from './partials/OurEvents'
import Event from '../homepage/partials/Event'

const Events = () => {
  return (
    <div className='bg-black'>
      <OurEvents />
      <Event />
    </div>
  )
}

export default Events