import React, { useEffect, useState } from 'react'
import NavbarAuth from '../Components/NavbarAuth'
import Footer from '../Components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// const tasks = [
//         {
//             _id: "saldfjlksadjfsa",
//             taskvalue: 25,
//             taskTitle:"real revenue new task",
//             CLAIM:"CLAIMED"
    
//         },
//         {
//             _id: "sda;lfkjl;asdjglk",
//             taskvalue: 25,
//             taskTitle:"real revenue second task",
//             CLAIM:"CLAIMED"
    
//         },
//         {
//             _id: "lksjfklsdjfklghjdklf",
//             taskvalue: 25,
//             taskTitle:"real revenue third task",
//             CLAIM:"CLAIMED"
    
//         },
//         {
//             _id: "slakjfl;sdkjgkldfsjg",
//             taskvalue: 25,
//             taskTitle:"real revenue four task",
//             CLAIM:"CLAIMED"
    
//         },
//     ]
function CompleteTask() {

    const navigate = useNavigate()
    const [user,setUser] = useState("") 
    const [Income,setIncome] = useState("") 
    const [tasks,setTasks] = useState("") 
    const {gender,email,firstname,lastname,username,_id} = user;
    const {deposit,income,task,userid,withdraw} =Income;

    useEffect(()=>{
            const token = localStorage.getItem("token");
            axios.get("https://real-revenue-backend.onrender.com/profile",{
                headers:{
                    Authorization: token
                }
            }).then((user)=>{
                setUser(user.data.user)
                setIncome(user.data.income)
                axios.get(`https://real-revenue-backend.onrender.com/task/single/user/all/task/${userid}`).then((tasks)=>{
                    setTasks(tasks.data.message.task);
                })
            }).catch((err)=>{
                navigate("/login")
            })
        },[])
  return (
    <div className='w-full h-auto min-h-screen bg-slate-800'>
        <NavbarAuth/>
        <div className="container pt-[8rem] pb-[2rem]">

            <div className='flex flex-col items-center space-y-5'>
            {!tasks || tasks.map(Task=>{
                const {taskTitle,taskvalue,_id,CLAIM} = Task;
                return(
                    <div key={_id} className='w-[90%] max-w-[23rem] shadow-ring text-white py-2 px-4 rounded-sm'>
                        <h1 className='font-semibold vsm:text-[1.17rem]'><span className=''>Title :</span> {taskTitle}</h1>
                        <p className='vsm:text-[1.1rem] vsm:font-light'>Task Id : {_id}</p>
                        <p className='vsm:font-semibold'>TK : {taskvalue}</p>
                        <button className='btn px-3 my-2 uppercase font-semibold tracking-wider'>{CLAIM}</button>
                    </div>
                )
            })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CompleteTask