import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Auth = ()=>{
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
            navigate("/login")
        })
    })
    // console.clear()
}
export const AuthUser = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/profile",{
            headers:{
                Authorization:token
            }
        }).then(()=>{
            
        }).catch((err)=>{
            navigate("/login")
        })
    })
    // console.clear()



    }