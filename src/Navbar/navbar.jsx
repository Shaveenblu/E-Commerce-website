import React from 'react'
import Darkmode from './Darkmode'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900
                    dark:text-white duration-200
                    relative z-40' >
        upper navbar
        <div>
            <div className='bg-primary/40 py-3'>
                <div className='container flex justify-between
                    items-center'>
                    <a href='#'>
                        <p className='font-bold text-2xl 
                        sm:text-3xl flex gap-2'>img</p>
                    </a>

                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden 
                        sm:block'>
                        <input type='text' placeholder='Search'
                         className='w-[200px] sm:w-[200px]
                         group-hover:w-[300px] transition-all
                         duration-300 rounded-full
                         border border-gray-300 px-2 py-1
                         focus:outline-none focus:border-1
                         focus:border-orange-400'></input>
                         <IoMdSearch className='text-gray-500
                         group-hover:text-primary absolute
                         top-1/2 -translate-y-1/2 left-44'></IoMdSearch>

                    </div>
                    <button
                        onClick={() => {
                            alert('Ordering not available yet.')}}
                
                        className = 'bg-gradient-to-r  from-primary to-secondary transistion-all duration-200 text-white py-1 px-4 rounded-full flex-items-center gap-5 group'>
                            <span className='group-hover:block hidden
                            transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white
                            drop-shadow-xl cursor-pointer'/>    
                    </button>
                    <div>
                        <DarkMode/>
                    </div>
                </div>

                
            </div>
            lower navbar
            <div></div>
        </div>
    </div>
  )
}

export default Navbar