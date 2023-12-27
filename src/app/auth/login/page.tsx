import { FormLogin } from '@/components/FormLogin/FormLogin'
import React from 'react'

interface LoginPageProps {
  searchParams : {
    success : string;
    error : string;
    message : string;
    callbackUrl : string;
  },
}

export default function LoginPage({ searchParams } : LoginPageProps) {
  const { success, error, message, callbackUrl } = searchParams;
  console.log(searchParams);
  
  return <FormLogin error={error} success={success} message={message} callBackUrl={callbackUrl} />
}
