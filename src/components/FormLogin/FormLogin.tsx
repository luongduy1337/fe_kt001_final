'use client'
import { Input } from "@nextui-org/react"
import Link from "next/link"
import { useFormState } from "react-dom"
import * as actions from "@/actions"
import { signIn } from "next-auth/react"

export function FormLogin({success, error} : {success : string, error : string}) {
    // const [formState , action] = useFormState(actions.loginUser, {message : ""});
    const action2 =async ( formData : FormData ) => {
        const result = await signIn('credentials', {
            usernameOrEmail : formData.get('usernameOrEmail'),
            password : formData.get('password'),
            redirect : true,
            callbackUrl : '/' 
        })
    };
    return (
        <div
            className="login__form w-2/5 flex flex-col items-center h-full px-40 py-10 gap-5"
            style={{
                backgroundColor: "#F5FAFF"
            }}
        >
            {success ? (
                <div className="bg-green-500 rounded px-5 py-3">
                    <span className="font-bold text-xl">Đăng ký tài khoản thành công!</span>
                </div>
            ) : null}
            {error ? (
                <div className="bg-red-500 rounded px-5 py-3">
                <span className="font-bold text-xl">Email hoặc mật khẩu không chính xác</span>
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
