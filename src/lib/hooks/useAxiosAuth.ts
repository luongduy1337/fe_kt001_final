"use client"


import  { useEffect } from "react"
import { axiosAuth } from "../axios";
import { useSession } from "next-auth/react";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
    const { data : session } = useSession();
    const refreshToken = useRefreshToken();

    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use((config) => {
            if(!config.headers["Authorization"]){
                config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;
            }
            return config;
        },
        (error) => Promise.reject(error) 
        )

        const responseIntercept = axiosAuth.interceptors.response.use(
            (response) => response,
            async (error) => {
                const preRequest = error.config;
                if(error.response.status === 401 && !preRequest.sent){
                    preRequest.sent = true;
                    await refreshToken();
                    preRequest.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;
                    return axiosAuth(preRequest);
                }
                return Promise.reject(error);
            }
        )
        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept);
            axiosAuth.interceptors.request.eject(responseIntercept);
        }
    }, [session]);

    return axiosAuth;
}

export default useAxiosAuth;