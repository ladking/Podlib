import React from 'react'
import Allpods from '../Components/Allpods'
import ListenersChoice from '../Components/ListenersChioce'
import Trending from '../Components/Trending'

function Library() {
  return (
    <div className='bg-black'>
        <div>

        </div>
        <div className='flex flex-col gap-4'>
            <Allpods />
            <Trending />
            <ListenersChoice />
        </div>
    </div>
  )
}

export default Library