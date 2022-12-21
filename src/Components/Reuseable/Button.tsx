import React from 'react'

type Buttonprops ={
    name: string,

}

function Button({name}: Buttonprops) {
  return (
    <button className='bg-white p-2 rounded-lg text-[#a84e33] font-bold pointer'>
        {name}
    </button>
  )
}

export default Button