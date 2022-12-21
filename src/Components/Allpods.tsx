import React from 'react'
import { AllPod } from '../Data/podcast'
import {Link} from 'react-router-dom'
function Allpods() {
    const pods = AllPod.map(pods =>(
        <Link key={pods.id} to={`/podcast/${pods.id}`} className='relative sm:w-48 w-32'>
            <img className='h-full' src={pods.imgurl} alt="" />
            <div className='h-16 w-full bg-black opacity-70 absolute bottom-0 text-white sm:p-2 p-1'>
                <p className='font-bold text-base'>{pods.name}</p>
            </div>
        </Link>
    ))
  return (
    <div className='ml-16'>
        <h1 className='text-white font-bold text-2xl '>All</h1>
        <div className='flex flex-wrap sm:gap-12 gap-4 p-2'>
            {pods}
        </div>
    </div>
  )
}

export default Allpods