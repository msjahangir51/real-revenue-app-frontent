import React from 'react'
import whatRevenueImg from "../../public/whatrevenue.jpg";
import { Link } from 'react-router-dom';
function WhatisRevenue() {
  return (
    <div className='w-full min-h-screen  h-auto bg-slate-800 text-white border-t-2 border-t-slate-700'>
        <div className="container py-[4rem] md:py-[5rem] px-[1rem] sm:px-[4rem]">
            <h1 className='text-[1.6rem] vsm:text-[1.8rem] sm:text-[2.4rem] font-bold sm:text-center md:my-[2rem]'>What is Real Revenue</h1>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='my-4 md:w-[65%] mr-6'>
                <p className='mb-7 sm:text-[1.2rem] font-normal'>Survimo Paid Surveys is a part of the global market research exchange Opinodo. Ever since 2014, we have been conducting millions of completed online surveys. The answers we collect are helping make countless products and services better.</p>
                <p className='my-4 sm:text-[1.2rem] font-normal'>Surveys are key in making business decisions in most companies. You as a user and a consumer have the knowledge and the power to shape future products. Your opinion is valuable.</p>
                <p className='my-4 sm:text-[1.2rem] font-normal'>So, you should get paid for your participation in surveys. This is not only for you to make money online but also a clear testament to the fact that your answers are being used. You can make a difference with our online paid surveys.</p>

                <Link to="/earning">
                <button className='btn text-white px-3 py-2 text-[1rem] vsm:text-[1.2rem] rounded uppercase'>Start Earning Here</button>
                </Link>
            </div>
            <div className='w-[70%] m-auto vsm:w-[40%] sm:w-[50%] vsm:min-w-[16rem] md:w-[30%] md:m-0'>
                <img src={whatRevenueImg} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default WhatisRevenue