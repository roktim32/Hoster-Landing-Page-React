import React from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex justify-center items-center gap-2' >
                <img src="./assets/Logo.svg" alt="" />
                <button className='bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs px-2.5 py-1.5 rounded-2xl'>Hoster is Hiring</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6 cursor-pointer'>
                <li>
                    <a href="#">Plans</a>
                </li>
                <li>
                    <a href="#">Find Domain</a>
                </li>
                <li>
                    <a href="#">Why Hoster</a>
                </li>
            </ul>

            <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
                <a className='text-gray-400' href="#">SignIn</a>
                <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars className='text-2xl' />
            </div>
        </div>
    )
}

export default Navbar