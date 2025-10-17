import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='w=full flex justify-between items-center font-semibold'>
        <div className='flex item-center gap-2'>
            <img className='w-8 bg-red p-2 rounded-2x1 cursor-pointer' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-red p-2 rounded-2x1 cursor-pointer' src={assets.arrow_right} alt="" />
            
        </div>
        <div className='flex item-center gap-4 cursor-pointer'>
                <p className='bg-white text-black rounded-2xl text-[15px] px-4 py-1 hidden md:block'>
                    Explore Premium
                </p>
                <p className='bg-black text-white rounded-2xl text-[15px] px-4 py-1 hidden md:block'>
                    Install App
                </p>
                <p className='px-2.5 bg-orange-500 py-1 rounded-full text-black flex item-center justify-center'>
                    V
                </p>
            </div>
            
    </div>
    <div className='flex item-center justify-start font-semibold mt-2' >
                <p className='bg-white px-4 py-1 text-black rounded-2xl'>All</p>
                <p className='bg-black px-4 py-1 text-white rounded-2xl'>Music</p>
                <p className='bg-black px-4 py-1 text-white  rounded-2xl'>Podcast</p>
            </div>
    </>
    
  )
}

export default Navbar