import React from 'react'

const AlbumItems = (props) => {
  return (
    <div className='min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff28]'>
      <img className='rounded' src={props.image} alt="" />
      <p className='font-bold mt-2 mb-1'>{props.name}</p>
      <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}

export default AlbumItems