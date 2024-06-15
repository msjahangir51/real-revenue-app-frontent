import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavbarAuth() {
    const [user,setUser] = useState("") 
    const [income,setIncome] = useState("") 
    const [nav,setNav] = useState(false) 
    const {firstname,gender,username} = user;
    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get("https://real-revenue-backend.onrender.com/profile",{
            headers:{
                Authorization: token
            }
        }).then((user)=>{
            setUser(user.data.user)
            setIncome(user.data.income)
        })
    },[])

    const handlelogout = ()=>{
        localStorage.removeItem("token");
        location.reload()
    }
  return (
    <div className='w-full top-0 left-0 right-0 fixed bg-slate-800 vsm:px-10 px-2 py-4 flex items-center justify-between'>
        <div className='w-full max-w-[1400px] m-auto flex items-center justify-between'>
        <Link to="/dashboard" className='vsm:text-xl text-base uppercase font-bold text-white'>Real revenue</Link>
        <div className='max-w-fit flex items-center'>
            <p className='mr-3'> <span className='px-2 py-1 bg-slate-700 text-white rounded-md'>Amount {income.income}</span></p>
            <div onClick={()=> setNav(!nav)} className='max-w-12 h-full'>
                <img src={`https://real-revenue-backend.onrender.com/${gender}-user.png`} alt="" />
            </div>
            <div className={`fixed bg-slate-800 p-5 top-16 rounded right-6 ${nav? "scale-1 duration-200 transition-all origin-top-right":"scale-0 duration-200 transition-all origin-top-right"}`}>
                <ul>
                    <li><p className='navbtn text-center'>{firstname}</p></li>
                    <li><NavLink to="/profile" className='navbtn'>Profile</NavLink></li>
                    <li><NavLink to="/dashboard" className='navbtn'>Dashbord</NavLink></li>
                    <li><NavLink to="/earning" className='navbtn'>Earning</NavLink></li>
                    <li><NavLink to="/complate/task" className='navbtn'>Complete Task</NavLink></li>
                    <li><NavLink to="/withdraw" className='navbtn'>Withdraw</NavLink></li>
                    <li><NavLink to="/deposit" className='navbtn'>Deposit</NavLink></li>
                    <li onClick={handlelogout}><Link className='navbtn'>Logout</Link></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavbarAuth