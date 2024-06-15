import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full max-w-[1400px] m-auto flex items-center justify-between vsm:py-5 py-2 vsm:px-6 px-2 fixed bg-slate-800 shadow-md shadow-slate-700 top-0 left-0 right-0'>
        <Link to="/" className='vsm:text-xl text-base text-white uppercase font-bold'>Real revenue</Link>
        <ul className='flex'>
          <li><Link className="text-white mx-1 vsm:mx-2 sm:mx-5 vsm:text-base text-sm uppercase font-bold tracking-wide" to="/">Home</Link></li>
          <li><Link className="text-white mx-1 vsm:mx-2 sm:mx-5 vsm:text-base text-sm uppercase font-bold tracking-wide"to="/login">Login</Link></li>
          <li><Link className="mx-1 vsm:mx-2 sm:mx-5 vsm:bg-green-600 vsm:text-white text-white vsm:py-1 vsm:text-base vsm:px-3 vsm:rounded-sm text-sm uppercase font-bold tracking-wide" to="/register">Register</Link></li>
        </ul>
    </div>
  )
}

export default Navbar