import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-auto absolute top-0 left-0 flex justify-between p-4 z-50'>
        <h1 className='cursor-pointer text-4xl font-bold uppercase text-blue-900'>Neatflix</h1>
        <div className='flex'>
            <button className='py-2 px-4  text-white text-sm sm:text-lg'>Login</button>
            <button className='py-2 px-4 bg-blue-900 text-sm sm:text-lg text-white rounded-lg'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar