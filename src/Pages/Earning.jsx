import React, { useEffect, useState } from 'react'
import NavbarAuth from './../Components/NavbarAuth';
import { AuthUser } from '../../Auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

function Earning() {
    const navigate = useNavigate()
    const [user,setUser] = useState("") 
    const [Income,setIncome] = useState("") 
    const {gender,email,firstname,lastname,username,_id} = user;
    const {deposit,income,task,userid,withdraw} =Income;
    const [taskid,setTaskId] = useState();
    const [eaningdata,SetEarningData] = useState()
    const [claim,SetClaim] = useState(false)
    useEffect(()=>{
        document.title ="Earning | REAL REVENUE"
        const token = localStorage.getItem("token");
        axios.get("https://real-revenue-backend.onrender.com/profile",{
            headers:{
                Authorization: token
            }
        }).then((user)=>{
            setUser(user.data.user)
            setIncome(user.data.income)
            axios.get("https://real-revenue-backend.onrender.com/earning").then(earning=>{
                SetEarningData(earning.data.task)
                console.log(earning.data.task)
                // axios.post("http://localhost:3000/task/earning/claim",{
                //     userid:userid,
                //     taskid: taskid
                // }).then((claim)=>{
                //     SetClaim()
                //     console.log(claim.data)
                // }).catch((err)=>{
                //     console.log(err)
                // })
                })
            }).catch((err)=>{
                navigate("/login")
            })
        },[])
        
        const handleClame =(useriID,taskID,taskvalue,taskTitle)=>{    
            if(deposit >= 500){
                axios.post("https://real-revenue-backend.onrender.com/task/complete",{
                    userid: useriID,
                    taskid: taskID,
                    username: username,
                    tasktitle:taskTitle,
                    taskvalue:taskvalue,
                    complate:"CLAIMED"
                }).then((item)=>{
                axios.post("https://real-revenue-backend.onrender.com/task/taskupdate",{
                    userid:useriID,
                    income: income+taskvalue,
                    task: task+1
                }).then((update)=>{
                    console.log(update)
                })
    
            }).catch(err=>{
                console.log(err.response.data)
                SetClaim(err.response.data)
            })    
            }
            else{
                navigate("/deposit")
            }
        }
  return (

    <div className='min-h-screen h-auto w-full bg-slate-800'>
        <div className={`w-full h-full bg-slate-700/20 fixed z-50 scale-0 ${claim? "scale-[1]":""}`}>
            <div className="w-[90%] max-w-[25rem] bg-yellow-300 h-[15rem]  px-[1rem] py-[1rem] rounded-md ring-2 flex flex-col justify-center ring-white fixed left-1/2 right-1/2 top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className='text-black font-semibold w-4/5 text-center text-[1.3rem] mx-auto uppercase'>Already claimed</h1>
                <h1 className='text-[1.4rem] text-center w-[80%] mx-auto text-red-500 capitalize my-2'>Wait for the new Task</h1>
                {/* <button className='text-white text-[1.3rem] btn'>Deposit</button> */}
                <button onClick={()=> SetClaim(false)} className='text-white text-[1.3rem] btn'>OK</button>
            </div>
        </div>
        <div className="container pt-[7rem] pb-[2rem]">
            <NavbarAuth/>
            <div  className='flex flex-col items-center space-y-5'>
            {!eaningdata || eaningdata.map((Task)=>{
                const {taskvalue,taskTitle,_id} = Task;

                return(
                    <div key={_id} className='w-[90%] max-w-[23rem] shadow-ring text-white py-2 px-4 rounded-sm'>
                        <h1 className='font-semibold vsm:text-[1.17rem]'><span className=''>Title :</span> {taskTitle}</h1>
                        <p className='vsm:text-[1.1rem] vsm:font-light'>Task Id : {_id}</p>
                        <p className='vsm:font-semibold'>TK : {taskvalue}</p>
                      <button className='btn px-3 my-2 uppercase font-semibold tracking-wider' onClick={()=>{
                            handleClame(user._id,_id,taskvalue,taskTitle)
                        } }>claim</button>
                    </div>
                )
            })}
            </div>
        </div>
        <Footer/>
    </div>

  )
}

export default Earning