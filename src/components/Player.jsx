import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between item-center text-white px-4'>
        <div className='hidden lg:flex item-center gap-4'>
            <img className='w-12' src={songsData[0].image} alt="" />
            <div className='text-white'>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0,16)+"..."}</p>
            </div>
        </div>
            <div className='flex flex-col items-center gap-1 m-auto bg-black'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>
                <div className='flex item-center gap-5'>
                    <p>0:15</p>
                    <div className='h-1 w-[60vw] max-w-[500px] bg-gray-400 rounded-full cursor-pointer mt-3'>
                        <hr className='h-1 border none w-20 bg-green-800 rounded-full' />
                    </div>
                    <p>4:20</p>
                </div>
            </div>
            <div className='hidden lg:flex item-center gap-2 opacity-75 mt-7'>
                <img className='h-4  w-4' src={assets.play_icon} alt="" />
                <img className='h-4  w-4' src={assets.mic_icon} alt="" />
                <img className='h-4  w-4' src={assets.queue_icon} alt="" />
                <img className='h-4  w-4' src={assets.speaker_icon} alt="" />
                <img className='h-4  w-4' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-slate-50 h-1 rounded mt-1.5'>

                </div>
                <img className='h-4  w-4' src={assets.mini_player_icon} alt="" />
                <img className='h-4  w-4' src={assets.zoom_icon} alt="" />
            </div>
    </div>
  )
}

export default Player