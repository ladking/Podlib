import React from 'react'
import {FaPodcast} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='bg-heroimg bg-cover h-screen'>
            <div className='bg-black opacity-80 h-full'>
                <div className='sm:mx-12 ml-20 text-white pt-[40%] sm:pt-[20%]'>
                    <h1 className='font-extrabold sm:text-4xl text-3xl'>
                        PODLIB
                    </h1>
                    <div className=' flex items-center gap-4'>
                        <p className='sm:text-5xl text-3xl'>Find And Listen To Your Favourite Podcast On The Go</p>
                        <FaPodcast color='#a84e33' size={45} />
                    </div>          
                </div>
                <div className='sm:mx-12 mx-20 mt-8'>
                    <Link className="p-2 bg-white text-black font-bold rounded-md" to='/library'>Browse Library</Link>
                </div>
             </div>
        </div>
        
    </div>
  )
}

export default Home