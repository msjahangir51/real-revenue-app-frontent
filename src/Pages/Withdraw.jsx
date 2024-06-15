import React, { useEffect, useState } from 'react'
import NavbarAuth from '../Components/NavbarAuth'
import Footer from '../Components/Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Withdraw() {
    const navigate = useNavigate()

    const [user,setUser] = useState("") 
    const [Income,setIncome] = useState("") 
    const {gender,email,firstname,lastname,username,wonrefarcode,userefarcode,refer} = user
    const {deposit,income,task,userid,withdraw} =Income
    useEffect(()=>{
        document.title ="Withdraw | REAL REVENUE"
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


    const [number, setNumber] = useState("")
    const [empty, setEmpty] = useState(false)
    const [incomelow, setincomelow] = useState(false)
    const [withdrewComplete, setwithdrewComplete] = useState(false)
        const handlesupmit = ()=>{
            if(!number) return setEmpty(true);
            setEmpty(false)
            if(income< 1000) return setincomelow(true);
            axios.post("https://real-revenue-backend.onrender.com/withdraw",{
                userid: userid,
                income:income,
                withdraw: 1000
            }).then(()=>{
                setwithdrewComplete(true)
            })
        }
  return (
    <div className='w-full min-h-screen h-auto bg-slate-800 '>
        <NavbarAuth/>
        <div className={`w-full h-full bg-slate-700/20 fixed z-50 scale-0 ${incomelow? "scale-[1]":""}`}>
            <div className="w-[90%] max-w-[25rem] bg-yellow-300 h-[15rem]  px-[1rem] py-[1rem] rounded-md ring-2 flex flex-col justify-center ring-white fixed left-1/2 right-1/2 top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className='text-black font-semibold w-4/5 text-center text-[1.3rem] capitalize mx-auto'>must your account amout 1000 to up</h1>
                <Link className='text-[1.3rem] btn my-3 text-white bg-red-600 hover:bg-red-500' to={"/earning"}>Earning</Link>
                <Link className='text-white text-[1.3rem] btn' to="/deposit">Deposit</Link>
                <button onClick={()=> setincomelow(false)} className='absolute top-0 right-2 text-white text-[2rem]'>x</button>
            </div>
        </div>
        <div className={`w-full h-full bg-slate-700/20 fixed z-50 scale-0 ${withdrewComplete? "scale-[1]":""}`}>
            <div className="w-[90%] max-w-[25rem] bg-yellow-300 h-[15rem]  px-[1rem] py-[1rem] rounded-md ring-2 flex flex-col justify-center ring-white fixed left-1/2 right-1/2 top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className='text-black font-semibold w-4/5 text-center text-[1.3rem] capitalize mx-auto'>withdraw complete</h1>
                <Link className='text-[1.3rem] btn my-3 text-white bg-red-600 hover:bg-red-500' to={"/earning"}>Earning</Link>
                <Link to={"/"} className='text-white text-[1.3rem] btn text-center'>OK</Link>
            </div>
        </div>
        <div className="container pt-[6rem] flex items-center flex-col select-none">
            <h1 className='text-white text-center text-[1rem] vsm:text-[1.2rem] sm:text-[1.4rem] sm:my-8 my-4 uppercase tracking-widest'>Withdraw</h1>
            <div className='text-white w-[90%] max-w-[25rem] shadow-ring px-[1rem] py-[1rem]'>
                <div className='relative w-full'>
                   {empty ? <span className='absolute text-[0.8rem] left-4 -top-1 bg-slate-800 text-red-500'>Enter valid number</span> :""}
                    <input className={`input-box mx-0 w-full ${empty? "ring-red-500":""}`} type="text" onChange={(e)=> setNumber(e.target.value)} placeholder='Enter your Bkash Number' />
                </div>

                <h1 className='font-semibold'>Min Withdraw {1000}TK</h1>
                <h1>your blance: {income}</h1>
                <button className='btn px-2 my-2' onClick={handlesupmit}>submit</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Withdraw