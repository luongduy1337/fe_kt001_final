'use client'
import { Input } from "@nextui-org/react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"

export function FormLogin({success, error, message, callBackUrl} : {success : string, error : string, message : string, callBackUrl : string}) {
    // const [formState , action] = useFormState(actions.loginUser, {message : ""});
    const action2 = async ( formData : FormData ) => {
        const result = await signIn('credentials', {
            usernameOrEmail : formData.get('usernameOrEmail'),
            password : formData.get('password'),
            redirect : true,
            callbackUrl : '/', 
        })
    };
    let endSlash = "";
    if(callBackUrl){
        const pathArray = new URL(callBackUrl).pathname.split('/');
        endSlash = pathArray[pathArray.length - 1];
    }
    return (
        <div
            className="login__form w-2/5 flex flex-col items-center h-full px-32 py-10 gap-5"
            style={{
                backgroundColor: "#F5FAFF"
            }}
        >    
            {success ? (
                toast('Đăng ký tài khoản thành công', {
                    position : 'top-right',
                    autoClose : 3000,
                    hideProgressBar : false,
                    closeOnClick : true,
                    theme : 'light',
                    type : 'success'
                })
            ) : null}
            {error &&
                toast('Email hoặc mật khẩu không chĩnh xác', {
                    position : 'top-right',
                    autoClose : 3000,
                    hideProgressBar : false,
                    closeOnClick : true,
                    theme : 'light',
                    type : 'error'
                })}
            {message ? 
                <div className="bg-red-500 rounded px-5 py-3">
                <span className="font-bold text-xl">{message}</span>
            </div>
             : null}
            {endSlash ? (
                <div className="bg-red-500 rounded px-5 py-3">
                <span className="font-bold text-xl">Vui lòng đăng nhập tài khoản</span>
            </div>
            ) : null}
            <h2 className="text-xl font-bold">Đăng nhập</h2>
            <form action={action2} className="space-y-5 w-full">
                <Input name="usernameOrEmail" id="usernameOrEmail" label="Email" size="lg" variant="bordered" />
                <Input name="password" id="password" label="Password" size="lg" variant="bordered" />
                <button type="submit" className="block w-full rounded-3xl border border-black p-3 hover:bg-black hover:text-white hover:border-white transition-all">Đăng nhập</button>
                <Link className="block" href={"/auth/register"}>Bạn chưa có tài khoản? <span className="font-bold">Đăng ký</span></Link>
            </form>
        </div>
    )
}
