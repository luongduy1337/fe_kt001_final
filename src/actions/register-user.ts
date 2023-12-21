'use server'

import { redirect } from "next/navigation"

export const registerUser =async ( {message} : {message : string} , formData:FormData) => {
    const dataReq = {
        name : formData.get('name'),
        email : formData.get('email'),
        username : formData.get('username'),
        password : formData.get('password'),
        phoneNumber : formData.get('phoneNumber'),

    }

    const res = await fetch("http://localhost:8989/api/v1/auth/register", {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json', // Đặt kiểu dữ liệu là JSON
        },
        body : JSON.stringify(dataReq)
    })

    if(res.status === 201){
        redirect("/auth/login")
    }

    return {
        message : ""
    }
}