import React from 'react'
import makingMoneyImg from "../../public/makeingmoney.jpg"
import { Link } from 'react-router-dom'
function MakeingMoney() {
  return (
    <div className='min-h-screen h-auto w-full m-auto bg-slate-800 text-white'>
        <div className='container'>
            <h1 className='text-[1.5rem] vsm:text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] vsm:font-bold text-center w-[90%] md:w-[70%] mx-auto font-normal mb-[1rem]'>Making money online is easy with Survimo surveys</h1>
            <div className='w-full px-[1rem] flex flex-col md:flex-row items-center md:justify-around'>
              <div className='w-[90%] vsm:w-[70%] md:w-[50%] md:max-w-[17rem] lg:max-w-[22rem]'>
                <img className='w-full object-cover' src={makingMoneyImg}/>
              </div>
              <div className='my-[1rem] md:w-1/2'>
                <p className='mb-4 vsm:text-base sm:text-lg'>Earning money online from Survimo surveys is easy and fun. We offer a free lifetime membership to all. Anyone can join and earn money on the Internet for free.</p>
                <p className='mb-4 vsm:text-base sm:text-lg'>You don’t need to have any experience in order to take our online paid surveys. We just care about your very honest opinion.</p>
                <p className='mb-4 vsm:text-base sm:text-lg'>To make things even easier, we will look for surveys that match your profile perfectly. So, instead of trying to find surveys on your own, sit back and relax while we do the search for you. As soon as we find a perfect paid survey, we will send you a direct email invitation.</p>
                <p className='mb-4 vsm:text-base sm:text-lg'>Share your answers with us and instantly earn money online. It’s as simple as that.</p>

                <Link to="/earning">
                <button className='btn text-white px-3 py-2 text-[1rem] vsm:text-[1.2rem] rounded uppercase'>Start Earning Here</button>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MakeingMoney