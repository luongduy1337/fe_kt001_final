import { FormLogin } from '@/components/FormLogin/FormLogin'
import React from 'react'

interface LoginPageProps {
  searchParams : {
    success : string;
    error : string;
  }
}

export default function LoginPage({ searchParams } : LoginPageProps) {
  const { success, error } = searchParams;
  return <FormLogin error={error} success={success}/>
}
