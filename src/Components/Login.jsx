import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import { Auth } from '../../Auth'
import Footer from './Footer';

function Login() {
  const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [empty,setEmpty] = useState(NaN)
    const [emptyMessage,setEmptyMessage] = useState("")
    const [password,setPassword] = useState("")
    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get("https://real-revenue-backend.onrender.com/profile",{
            headers:{
                Authorization:token
            }
        }).then(()=>{
            navigate("/dashboard")
        })
    },[])


    const handleClick = ()=>{
      axios.post("https://real-revenue-backend.onrender.com/user/login",{
        email:email,
        password: password
      }).then(user =>{
        const token = localStorage.setItem("token",user.data.token);
        navigate("/dashboard")
        }).catch(err=> {
          setEmpty(err.response.status)
          setEmptyMessage(err.response.data)
          navigate("/login")
      })
    }
  return (
       <>
        <div className='min-h-[100vh] h-auto bg-slate-800'>
        <Navbar/>
        <div className='container flex items-center justify-center'>
            <div className='bg-transparent max-w-[450px] responsive w-[90%] mx-auto flex flex-col input-boxs px-2 py-[2rem] rounded-sm bg-slate-800 shadow-ring text-white'>
            <label htmlFor="email" className='flex flex-col relative'>
              {empty === 400? <span className='text-sm absolute text-red-500 left-4 -top-3 bg-slate-800'>{emptyMessage}</span> : ""}
                <input className={`input-box my-3 ${empty ===400? "ring-red-400" :""}`} type="text" onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your username'/>
            </label>
            <label htmlFor="email" className='flex flex-col relative'>
              {empty === 401? <span className='text-sm absolute text-red-500 left-4 -top-3 bg-slate-800'>{emptyMessage}</span> : ""}
                <input className={`input-box my-3 ${empty ===401? "ring-red-400" :""}`} type="text" onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password'/>
            </label>
                <button className='btn my-3 ' onClick={handleClick}>Login</button>
                <p className='text-center capitalize'>
                  <span>if You want a account</span>
                <Link to="/register" className='text-right text-cyan-300  ml-2'>Register</Link>
                </p>
            </div>
        </div> 
    </div>  

    <Footer />
       </>
  )
}

export default Login