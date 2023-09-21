import React from 'react'
import { service } from '../assets'
const Services = () => {
  return (
    <div className="relative">
    <div className='h-96 bg-services-background z-0 bg-cover bg-no-repeat bg-center'>
      <div className="absolute z-10 flex flex-row">
        <h1>Services we provide</h1>
        <img src={service} alt="arrow-image" />
      </div>
    </div>
    </div>
  )
}

export default Services