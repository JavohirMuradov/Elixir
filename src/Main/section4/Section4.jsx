import React from 'react'
import { BodySection4 } from './BodySection4'
import { BottomSection4 } from './BottomSection4'
import { TopSection4 } from './TopSection4'

export const Section4 = () => {
  return (
    <section className='bg-[#FAFAFAFa]'>
      <div className='container flex gap-10 flex-col py-10'>
        <TopSection4 />
        <BodySection4 />
        <BottomSection4 />
      </div>
    </section>
  )
}
