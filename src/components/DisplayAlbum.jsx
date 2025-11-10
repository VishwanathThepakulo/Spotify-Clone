import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';

const DisplayAlbum = () => {

    const {id}= useParams();
    console.log(id);
    const albumDataLoading = albumsData[id];
    console.log(albumDataLoading);
    

  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-2 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumDataLoading.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-4xl font-bold mb-4 md:text-6xl'>
                {albumDataLoading.name}
            </h2>
            <h4>{albumDataLoading.desc}</h4>
            <p className='mt-2'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b className='ml-2'>Spotify Clone</b> 55,612 likes | <b>50 Songs</b> | 2 hours 21 minutes
            </p>
        </div>
    </div>
    </>
  )
}

export default DisplayAlbum