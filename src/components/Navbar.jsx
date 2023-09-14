import React from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex justify-center items-center gap-2' >
                <img src="./assets/Logo.svg" alt="" />
                <button className='bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs px-2.5 py-1.5 rounded-2xl'>Hoster is Hiring</button>
            </div>
            <div className='flex justify-center items-center'>
                <FaBars className='text-2xl' />
            </div>
        </div>
    )
}

export default Navbar