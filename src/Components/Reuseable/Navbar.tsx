import React from 'react'
import logo from "../../assests/img/logo.png";
import {FaHome, FaInfoCircle, FaBars, FaTimes} from 'react-icons/fa'
import {MdLibraryMusic} from "react-icons/md";
import Button from './Button';
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [menuOpen, setState] = useState<Boolean>(false)
    const OpenMenu = () =>{
        setState(prev => !prev)
    }

  return (
    <div className={`sm:relative fixed z-10 bg-[#a84e33] p-4 sm:px-12 flex sm:flex-row items-center flex-col gap-16 sm:justify-between 
                     items-center h-screen sm:h-16 sm:w-screen ${menuOpen? 'w-64 rounded-md':'w-12'}`}>
        <div className={`flex ${menuOpen ? 'justify-between': 'justify-center'} w-full sm:w-24 item-center`}>
            <div className={`${!menuOpen ?'p-1': null} sm:hidden`} onClick={OpenMenu}>
                {!menuOpen ? <FaBars color='white' size={25} /> : <FaTimes color='white' size={25} />}
            </div>
            <div className={`sm:w-12 sm:block w-8 ${!menuOpen ? 'hidden' : null}`}>
                <img src={logo} alt='' />
            </div>
        </div>
       
        <div className='flex sm:flex-row flex-col gap-12'>
            <Link to="/" className='flex items-center gap-2 pointer'>
                <FaHome color='white' size={25}/>
                <p className={`${!menuOpen ? 'hidden': null} sm:block text-white font-bold`}>Home</p>
            </Link>
            <Link to="/library" className='flex items-center gap-2 pointer'>
                <MdLibraryMusic color='white' size={25} /> 
                 <p className={`${!menuOpen ? 'hidden': null} sm:block text-white font-bold`}>Library</p>
            </Link>
            <Link to="/about" className='flex items-center gap-2 pointer'>
               <FaInfoCircle color='white'size={25} /> 
               <p className={`${!menuOpen ? 'hidden': null} sm:block text-white font-bold`}>About</p>
            </Link>
        </div>

        <div className='hidden sm:flex items-center gap-8'>
            <Button name='Create Account'/>
        </div>
    </div>
  )
}

export default Navbar