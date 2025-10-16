import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex item-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded-[2%]'>
        <div className='p-4 flex item-center justify-between'>
            <div className='flex item-conter gap-3'>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className='font semibold'>Your Library</p>
            </div>
            <div className='flex item-center gap-3'>
            <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
            <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />
        </div>
        </div>
        <div className='border p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-5'>
            <h1>Create your first playlist</h1>
            <p className='font-light'>It's a easy we will help you</p>
            <button className='px-2 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
                Create playlist
            </button>
        </div>
        <div className='border p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-5'>
            <h1>Find some podcast to follow</h1>
            <p className='font-light'>we will keep you update on the episode</p>
            <button className='px-2 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
                Browse Podcast
            </button>
        </div>
        </div>
    </div>
    
  )
}

export default Sidebar