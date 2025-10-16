import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='w=full flex justify-between items-center font-semibold'>
        <div className='flex item-center gap-2'>
            <img className='w-8 bg-red p-2 rounded-2x1 curser-pointer' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-red p-2 rounded-2x1 curser-pointer' src={assets.arrow_right} alt="" />
            
        </div>
        <div className='flex item-center gap-4'>
                <p className='bg-white text-black rounded-2xl text-[15px] px-4 py-1 hidden md:block'>
                    Explore Premium
                </p>
                <p className='bg-black text-white rounded-2xl text-[15px] px-4 py-1 hidden md:block'>
                    Install App
                </p>
                <p className='px-2.5 bg-orange-500 py-1 rounded-2xl'>
                    V
                </p>
            </div>
    </div>
  )
}

export default Navbar