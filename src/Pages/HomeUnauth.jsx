import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import revenue from "../../public/revenue.png"
import HowToPage from './HowToPage'
import EarningCOmponents from '../Components/EarningCOmponents'
import WhatisRevenue from './WhatisRevenue'
import MakeingMoney from './MakeingMoney'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function HomeUnauth() {
  const navigate = useNavigate()
    useEffect(()=>{
      document.title ="Home | REAL REVENUE"
        const token = localStorage.getItem("token");
        axios.get("https://real-revenue-backend.onrender.com/profile",{
            headers:{
                Authorization:token
            }
        }).then(()=>{
            navigate("/dashboard")
        })
        console.clear()
    },[])
  return (
    <>
      <div className='bg-red min-h-[100vh] h-auto w-full bg-slate-800'>
        <Navbar/>

        <div className="container py-[5rem] flex  px-3 items-center vsm:items-start flex-col md:flex-row md:items-center">
          <div className='vsm:w-[80%] vsm:px-10 px-4'>
              <h1 className='text-xl vsm:text-2xl text-green-500 mx-2 tracking-wider font-semibold uppercase'>Claim to Earn</h1>
              <h1 className='text-[2rem] vsm:text-[3rem] lg:text-[3.5rem] font-bold text-slate-300'>Get up to $0.27 Per Claim</h1>
              <h1 className='text-[1rem] vsm:text-[1.5rem] uppercase my-2 text-white'>✅ Fun and free to join</h1>
              <h1 className='text-[1rem] vsm:text-[1.5rem] uppercase text-white'>✅ Fast and easy payment</h1>
              <Link to="/earning">
              <button className='btn text-white px-3 py-2 my-3 text-[1rem] vsm:text-[1.2rem] rounded uppercase'>Start Earning Here</button>
              </Link>
          </div>
        <div className='vsm:w-[70%] w-[90%] m-auto'>
          <img src={revenue}/>
        </div>
        </div>
    </div>

    <HowToPage/>

    <EarningCOmponents/>
    <WhatisRevenue/>
    <MakeingMoney/>

    <Footer/>
    </>
  )
}

export default HomeUnauth