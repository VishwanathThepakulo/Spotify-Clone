import React from 'react'

const AlbumItems = (props) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff28]'>
      <img className='rounded' src={props.imagge} alt="" />
      <p className='font-bold mt-2 mb-1'>{props.name}</p>
      <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}

export default AlbumItems