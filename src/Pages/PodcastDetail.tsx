import React from 'react'
import {useParams} from 'react-router-dom'
import { AllPod } from '../Data/podcast'

function PodcastDetail() {
    const {id} = useParams()
    const pod = AllPod.find( pod => id === pod.id)

    // const episodes = pod?.allepisodes.map(eps => (
    //     <div>

    //     </div>
    // ))
    
  return (
    <div className=''>
        <div className='bg-black pl-16 flex sm:flex-row flex-col p-12 gap-12'>
            <div className='shadow-lg sm:w-72 basis-2/3'>
                <img className='rounded-lg' src={pod?.imgurl} alt="" />
            </div>
            <div className='text-white p-4'>
                <h1 className='sm:text-3xl text-xl font-bold'>{pod?.name}</h1>
                <p className='text-sm sm:mt-8'>{pod?.desc}</p>
            </div>
        </div>
        <div className='pl-16 mt-4'>
            <h1 className='text-[#a84e33] text-xl font-bold'>All Episodes</h1>
            <div>

            </div>
        </div>
    </div>
  )
}

export default PodcastDetail