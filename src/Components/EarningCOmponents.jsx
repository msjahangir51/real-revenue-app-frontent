import React from 'react'
import { Link } from 'react-router-dom'

function EarningCOmponents() {
  return (
    <div className='w-full bg-slate-800'>
        <div className='w-full max-w-[1400px] m-auto text-white  py-4 flex flex-col lg:flex-row lg:justify-around items-center'>
        <div className='my-[1rem]'>
            <h1 className="text-[1.4rem] vsm:text-[2rem] font-bold text-center">Sign up and start earning!</h1>
            <h1 className="text-center text-[1.1rem] vsm:text-[1.3rem]">It takes less than 30 seconds </h1>
        </div>

        <div>
        <Link to="/earning">
                <button className='btn text-white px-3 py-2 text-[1rem] vsm:text-[1.2rem] rounded uppercase'>Start Earning Here</button>
                </Link>
        </div>
        </div>
    </div>
  )
}

export default EarningCOmponents