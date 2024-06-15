import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import { Auth } from '../../Auth';
import Footer from './Footer';
import axios from 'axios';

function Register() {

  const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/profile",{
            headers:{
                Authorization:token
            }
        }).then(()=>{
          navigate("/dashboard")
        }).catch((err)=>{
        })
        }, [])


        const [username,setUsername] = useState("")
        const [email,setEmail] = useState("")
        const [firstname,setFirstname] = useState("")
        const [lastname,setLastname] = useState("")
        const [gender,setGender] = useState("")
        const [useRefarcode,setuseRefarcode] = useState("")
        const [password,setPassword] = useState("")
        const [usernameempty,setUsernameEmpty] = useState(false);
        const [Emailempty,setEmailEmpty] = useState(false);
        const [firstNameempty,setFristnameEmpty] = useState(false);
        const [Lastnameeempty,setLastnameEmpty] = useState(false);
        const [Genderempty,setGenderEmpty] = useState(false);
        const [Passwordempty,setPasswordEmpty] = useState(false);
        const handleRegister = ()=>{
          if(!username) return setUsernameEmpty(true);
          setUsernameEmpty(false)
          if(!email) return setEmailEmpty(true);
          setEmailEmpty(false)
          if(!firstname) return setFristnameEmpty(true);
          setFristnameEmpty(false)
          if(!lastname) return setLastnameEmpty(true);
          setLastnameEmpty(false)
          if(!gender) return setGenderEmpty(true);
          setGenderEmpty(false)
          if(!password) return setPasswordEmpty(true);
          setPasswordEmpty(false)


          axios.post("https://real-revenue-backend.onrender.com/user/register",{
            username:username,
            email:email,
            firstname:firstname,
            lastname:lastname,
            gender:gender,
            userfarcode:useRefarcode,
            password:password,
            wonrefarcode:username
          }).then((user)=>{
            axios.post("https://real-revenue-backend.onrender.com/income/post",{
              userid:user.data.message.id,
              income:0,
              deposit:0,
              withdraw:0,
              task:0,
              newtask:0
            }).then(()=>{
              axios.post("https://real-revenue-backend.onrender.com/task/refar/update",{
                userefarcode:useRefarcode,
                id: user.data.message.id
              }).then((update)=>{
                navigate("/login")
              })
            })
          // console.log(user.data.message.userefarcode)
          console.log(user.data.message)
          }).catch(err=>{
            console.log(err)
          })

        }
  return (
    <>
    <div className='min-h-[100vh] h-auto bg-slate-800'>
      <Navbar/>
        <div className='container flex items-center justify-center py-[7rem] text-white'>
            <div className='bg-transparent max-w-[500px] responsive w-[90%] m-auto flex flex-col items-center input-boxs shadow-ring px-4 py-6 rounded-sm'>
                <div className='w-full relative'>
                 {usernameempty? <span className='absolute left-3 -top-1 text-[0.8rem] bg-slate-800 text-red-500'>Empty</span> :""}
                <input className={`input-box w-full mx-0 ${usernameempty? "ring-red-500" : ""}`} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='Enter your username'/>
                </div>
                <div className='w-full relative'>
                {Emailempty? <span className='absolute left-3 -top-1 text-[0.8rem] bg-slate-800 text-red-500'>Empty</span> :""}
                <input className={`input-box w-full mx-0 ${Emailempty? "ring-red-500" : ""}`} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Enter your email'/>
                </div>
                <div className='w-full relative'>
                {firstNameempty? <span className='absolute left-3 -top-1 text-[0.8rem] bg-slate-800 text-red-500'>Empty</span> :""}
                <input className={`input-box w-full mx-0 ${firstNameempty? "ring-red-500" : ""}`} onChange={(e)=> setFirstname(e.target.value)} type="text" placeholder='Enter your firstName'/>
                </div>
                <div className='w-full relative'>
                {Lastnameeempty? <span className='absolute left-3 -top-1 text-[0.8rem] bg-slate-800 text-red-500'>Empty</span> :""}
                <input className={`input-box w-full mx-0 ${Lastnameeempty? "ring-red-500" : ""}`} onChange={(e)=> setLastname(e.target.value)} type="text" placeholder='Enter your lastname'/>
                </div>
                <div className={`mx-2 my-4 flex items-center ${Genderempty? "text-red-500" :""}`}>
                  <div>
                  <label htmlFor="male" className='mr-2'>
                    Male
                  </label>
                   <input type="radio" name="gender" onChange={(e)=> setGender("male")} value="male" id='male' className='mr-2'/>
                  <label htmlFor="female" className='mr-2'>Female</label>
                  <input type="radio" name="gender" onChange={(e)=> setGender("female")} value="female" id="female" />
                  </div>
                </div>
                <input className='input-box w-full' onChange={(e)=> setuseRefarcode(e.target.value)} type="text" placeholder='refer code optional'/>
                <div className='w-full relative'>
                {Passwordempty? <span className='absolute left-3 -top-1 text-[0.8rem] bg-slate-800 text-red-500'>Empty</span> :""}
                <input className={`input-box w-full mx-0 ${Passwordempty ? "ring-red-500" :""}`} onChange={(e)=> setPassword(e.target.value)} type="text" placeholder='Enter your password'/>
                </div>
                <button onClick={handleRegister} className='btn my-3'>Register</button>
                <p className='text-center capitalize'>
                  <span>you have alredy account</span>
                <Link to="/login" className='text-right underline text-cyan-300 ml-2'>Login</Link>
                </p>
            </div>
        </div> 
    </div>
    <Footer />
    </>
  )
}

export default Register