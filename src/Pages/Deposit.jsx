import React, { useEffect, useState } from 'react'
import NavbarAuth from '../Components/NavbarAuth'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Deposit() {
  const navigate = useNavigate()
  const [user,setUser] = useState("") 
  const [Income,setIncome] = useState("") 
  const {gender,email,firstname,lastname,username} = user
  const {deposit,income,task,userid,withdraw} =Income
  
    const [BkashNumber,setBkashNumber] = useState("") 
    const [TrxID,setTrxID] = useState("") 
    const [Amount,setAmount] = useState(null) 


    const [BkashNumberEmpty,setBkashNumberEmpty] = useState(false);
    const [TrxIDEmpty,setTrxIDEmpty] = useState(false);
    const [AmountEmpty,setAmountEmpty] = useState(false);
  const handleDeposit =()=>{
    if(!BkashNumber) return setBkashNumberEmpty(true);
    setBkashNumberEmpty(false)
    if(!TrxID) return setTrxIDEmpty(true);
    setTrxIDEmpty(false)
    if(!Amount) return setAmountEmpty(true);
    setAmountEmpty(false)
    axios.post("https://real-revenue-backend.onrender.com/deposit",{
      userid:userid,
      username:username,
      fullname:firstname+" "+lastname,
      BkashNumber:BkashNumber,
      TrxID:TrxID,
      Amount:Amount
    }).then(()=>{
      navigate("/earning")
    })
  }



  useEffect(()=>{
      document.title ="Deposit | REAL REVENUE"
        const token = localStorage.getItem("token");
        axios.get("https://real-revenue-backend.onrender.com/profile",{
            headers:{
                Authorization: token
            }
        }).then((user)=>{
            setUser(user.data.user)
            setIncome(user.data.income)

            console.log(user)
        }).catch(()=>{
          navigate("/login")
        })
    },[])
  return (
    <>
        <NavbarAuth/>
        <div className='w-full min-h-screen h-auto]  bg-slate-800'>
            <div className="container pt-[5rem]  flex items-center justify-center flex-col text-white">
                <h1 className='text-center text-[1.3rem] uppercase tracking-wider mb-[3rem] text-white'>Deposit for Bkash</h1>
                <div className='bg-slate-800 shadow-ring max-w-[400px] px-9 responsive w-[90%] flex flex-col px-2 py-3 rounded-sm'>
                  <div className='w-full relative'>
                   {BkashNumberEmpty? <span className='absolute text-[0.77rem] left-4 -top-1 bg-slate-800 text-red-500'>Empty</span> :""}
                  <input className={`input-box mx-0 w-full ${BkashNumberEmpty? "ring-red-500" : ""}`} onChange={(e)=> setBkashNumber(e.target.value)} type="text" placeholder='Enter Bkash Number'/>
                  </div>
                  <div className='w-full relative'>
                   {TrxIDEmpty? <span className='absolute text-[0.77rem] left-4 -top-1 bg-slate-800 text-red-500'>Empty</span> :""}
                  <input className={`input-box mx-0 w-full ${TrxIDEmpty? "ring-red-500" : ""}`} type="text" onChange={(e)=> setTrxID(e.target.value)} placeholder='Enter Bkash TrxID'/>
                  </div>
                  <div className='w-full relative'>
                   {AmountEmpty? <span className='absolute text-[0.77rem] left-4 -top-1 bg-slate-800 text-red-500'>Empty</span> :""}
                    <input className={`input-box mx-0 w-full ${AmountEmpty? "ring-red-500" : ""}`} type="text" onChange={(e)=> setAmount(e.target.value)} placeholder='Amount'/>
                  </div>
                <button onClick={handleDeposit} className='btn my-3'>Deposit</button>
            </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Deposit