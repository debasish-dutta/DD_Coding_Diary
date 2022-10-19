import React, { useContext } from 'react'
import Link from 'next/link';

const pages = [
    {name: 'Blogs', slug: 'blog'},
    {name: 'Podcasts', slug: 'podcast'},
    {name: 'About Me', slug: 'about'},
    {name: 'Contact Me', slug: 'contact'},
]

const NavBar = () => {

    // pages.map((pg) => console.log(pg.name));
  return (
    <nav className='container mx-auto px-4 sm:px-4 py-2.5 rounded mt-2 mb-8'>
        <div className=' container flex flex-wrap justify-between items-center mx-auto border-b w-full border-blue-400 py-4'>
            <Link href='/'>
                <div className=' flex items-center '>
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="DD Logo" />
                    <span className='self-center cursor-pointer font-bold whitespace-nowrap text-2xl text-white'>
                        DD's Coding Diary
                    </span>
                </div>
            </Link>
            <button data-collapse-toggle="navbar" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2" aria-controls="navbar" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className='hidden md:block md:w-auto' id='navbar'>
                {pages.map((page) => (
                    <Link key={page.slug} href={`/${page.slug}`} className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ' >
                        <span className='block py-2 pr-4 pl-3 md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {page.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default NavBar