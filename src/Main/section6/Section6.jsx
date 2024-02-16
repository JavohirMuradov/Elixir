import { Button } from '@material-tailwind/react'
import React from 'react'

export const Section6 = () => {
  return (
    <section className='bg-[#2A3855]'>
      <div className='container flex justify-between flex-col lg:flex-row text-center lg:text-start gap-5 lg:gap-0 py-10 items-center'>
        <h1 className='text-white text-3xl font-bold'>If you have any query related investment... we are available 24/7</h1>
        <button className='bg-white text-[#2A3855] font-bold py-3 px-5 rounded-lg'>
          Contact us
        </button>
      </div>
    </section>
  )
}
