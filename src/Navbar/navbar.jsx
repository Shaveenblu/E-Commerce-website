import React from 'react'
import Darkmode from './Darkmode'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'

const Menu = [
    {
        id :1,
        name: 'Home',
        link: '/#'
    },
    {
        id: 2,
        name: 'Top Rated',
        link: './#services'
    },
    {
        id: 3,
        name: 'Mens Wear',
        link: './#menswear'
    },
    {
        id: 4,
        name: '.Electronics',
        link: './#Electronics'
    }
]
const DropdownLinks = [
    {
        id: 1,
        name: 'Trending products',
        link: '/#',
    },
    {   
        id:2,
        name: 'Best Selling',
        link: '/#',
    },
    {
        id: 3,
        name: 'Top Rated',
        link: '#',
    },
]

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
                         focus:border-orange-400 dark:border-grey-500
                         dark:bg-gray-800'></input>
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
                        <Darkmode/>
                    </div>
                </div>

                
            </div>
            lower navbar
            <div className='Flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {
                        Menu.map((data) => (
                            <li key={data.id}>
                                <a href={data.link}
                                className='inline-block px-4
                                hover-text-primary duration-200
                                group-hover:rotate-180'>{data.name}</a>
                            </li>
                        ))}
                            <li className='group relative
                            cursor-pointer'>
                                <a href='#' className='flex items-center gap-[2px]
                                py-2'>Trending
                                    <span>
                                        <FaCaretDown
                                        className='transition-all
                                        duration-200
                                        group-hover:rotate-200'/>
                                    </span>
                                </a>
                                <div className='absolute z-[9999] hidden
                                group-hover:block w-[150px] rounded-md
                                bg-white p-2 text-primary/100 shadow-md'>
                                   <ul>
                                    {DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}
                                            className='inline-block p-2 rounded-md
                                            w-full hover:bg-primary/100 hover:text-white'>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        
                                    </li>

                                    </ul>
                                </div>
                            </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar