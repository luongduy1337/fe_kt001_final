"use server"

import { signIn } from "next-auth/react";

export const loginUser =async ({message} : {message : string}, formData : FormData) => {
    const usernameOrEmail = formData.get('usernameOrEmail');
    const password = formData.get('password');
    const result =  await signIn("credentials", {
        usernameOrEmail : usernameOrEmail,
        password : password,
        redirect : true,
        callbackUrl : "/"
    })
    return {
        message : ""
    }
    
    
}