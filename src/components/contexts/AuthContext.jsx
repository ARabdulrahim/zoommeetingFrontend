import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

export const AuthContext=createContext({});

 const client=axios.create({
    baseURL: "https://zoommeetingbackend.onrender.com/user"
});

 export const AuthProvider=({children})=>{
    const authContext=useContext(AuthContext);

    const[userData, setUserData]= useState(authContext);

    const handleRegister=async(name, username, password)=>{
        try{
            let request=await client.post("/signUp", {
                name:name,
                username:username,
                password: password
            },)
            console.log(request);

            toast.success(request.data.message,{autoClose : 2000});
        }catch (err){
            toast.error(err.response.data.message,{autoClose: 2000});
        }
    }

    const handleLogin=async(username, password)=>{
        try{
            let request=await client.post("/login", {
                username:username,
                password : password
        })
        toast.success(request.data.message, {autoClose: 2000})
        localStorage.setItem("token", request.data.token);
        router("/home");

        }catch(err){
            toast.error(err.response.data.message, {autoClose: 2000})
        }
    }

    const getHistoryOfUser=async()=>{
        try{
            let request=await client.get("/meeting",{
                params:{
                    token: localStorage.getItem("token")
                }
            });
            return request;
        }catch(err){
            console.log(err);
        }
    }

    const addToUserHistory=async(meetingCode)=>{
        try{
            let request=await client.post("/meeting",{
                token: localStorage.getItem("token"),
                meetingCode: meetingCode
            });
            toast.success(request.data.message, {autoClose: 1500})

            return request;
        }catch(err){
            console.log(err);
        }
    }

    const delteUserHistory=async(id)=>{
        try{
            let request=await client.delete(`/meeting/${id}`);
            toast.success(request.data.message, {autoClose: 2000})
        }catch(err){
            console.log(err);
        }

    }
    const router=useNavigate();

    const data={
        userData, setUserData, handleRegister, handleLogin, getHistoryOfUser, addToUserHistory, delteUserHistory
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
 }