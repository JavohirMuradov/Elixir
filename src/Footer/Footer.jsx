import React from 'react'
export const Footer = () => {
    return (
        <footer className='bg-[#2a3855]'>
            <div className='container flex lg:flex-row flex-col justify-between items-center p-5'>
                <img src="https://prium.github.io/elixir/v3.0.0/assets/img/logo-light.png" alt="" />
                <p className='text-[#f3f3f3] font-bold font-sans'>© Copyright 2018 Elixir Inc.</p>
                <p className='text-[#f3f3f3]  font-bold font-sans hover:underline'>Designed by Themewagon</p>
            </div>
        </footer>
    )
}