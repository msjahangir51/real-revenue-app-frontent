import React, { useEffect, useState } from 'react'
import NavbarAuth from '../Components/NavbarAuth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from './../Components/Footer';
function Profile() {
    const navigate = useNavigate()
    const [user,setUser] = useState("") 
    const [Income,setIncome] = useState("") 
    const {gender,email,firstname,lastname,username,wonrefarcode,userefarcode,refer} = user
    const {deposit,income,task,userid,withdraw} =Income
    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get("https://real-revenue-backend.onrender.com/profile",{
            headers:{
                Authorization: token
            }
        }).then((user)=>{
            setUser(user.data.user)
            setIncome(user.data.income)
        }).catch((err)=>{
            navigate("/login")
        })
    },[])


  return (
    <>
    <div className='w-full min-h-screen h-auto m-auto bg-slate-800 text-white'>
        <div className="container pt-[7rem]">
            <NavbarAuth/>
            <div className='flex flex-col items-center'>
                <div className='flex justify-start w-full px-3 vsm:px-10 sm:px-[9rem]'>
                   <div className='max-w-[5rem] sm:max-w-[7rem] md:max-w-[10rem] mr-5 shadow-ring rounded-full'>
                     <img src={`https://real-revenue-backend.onrender.com/${gender}-user.png`} alt="" />
                   </div>
                   <div>
                    <p className='text-[1.3rem] sm:text-[1.6rem] md:text-[1.9rem] font-medium'>{firstname+" "+lastname}</p>
                    <p className='text-[1rem]'>{email}</p>
                   </div>
                </div>
                <div className='flex items-center sm:items-stretch justify-center flex-wrap sm:flex-nowrap border-t-black border-t-[1px] w-[90%] mt-3'>
                    <div className='mb-3 w-full max-w-[20rem]'>
                        <h1 className='vsm:text-[1.3rem] sm:text-[1.5rem] border-b-2 uppercase tracking-widest font-semibold border-white/25 sm:border-none block w-full'>Profile </h1>
                        <div className='font-semibold'>
                            <p className='text-[1.1rem]'>refer code: {wonrefarcode}</p>
                            <p className='text-[1.1rem]'>username: {username}</p>
                            <p className='text-[1.1rem]'>gender: {gender}</p>
                            {!userefarcode || <p className='text-[1.1rem]'>use refercode: {userefarcode}</p>}
                            <p className='text-[1.1rem]'>refar : {refer}</p>
                        </div>
                    </div>
                    <div className='mb-3 w-full max-w-[20rem]'>
                        <h1 className='vsm:text-[1.3rem] sm:text-[1.5rem] border-b-2 sm:border-none uppercase tracking-widest font-semibold border-white/25 block w-full'>Earning </h1>
                        <div className='font-semibold'>
                            <p className='text-[1.1rem]'><span>Deposit : </span> {deposit}</p>
                            <p className='text-[1.1rem]'>Complete Task : {task}</p>
                            <p className='text-[1.1rem]'>Withdraw: {withdraw}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Profile