import React from 'react'
import { BottomSection8 } from './BottomSection8'
import { TopSection8 } from './TopSection8'

export const Section8 = () => {
  return (
    <section className='bg-[#2A3855]'>
      <div className='container flex justify-between items-start lg:items-center flex-col lg:flex-row'>
        <TopSection8 />
        <BottomSection8 />
      </div>
    </section>
  )
}
