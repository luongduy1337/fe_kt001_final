'use client'
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";
import * as actions from "@/actions"

export function FormRegister() {
    const [ formState, action ] = useFormState(actions.registerUser, {message : ""});
    return (
        <div
            className="register__form w-2/5 flex flex-col items-center h-full px-40 py-10 gap-5"
            style={{
                backgroundColor: "#F5FAFF"
            }}
        >
            <h2 className="text-xl font-bold">Đăng ký</h2>
            <form action={action} className="space-y-5 w-full">
                <Input name="username" id="username" label="Tên người dùng" size="lg" variant="bordered" />
                <Input name="email" id="email" label="Email" size="lg" variant="bordered" />
                <Input name="name" id="name" label="Họ và tên" size="lg" variant="bordered" />
                <Input name="phoneNumber" id="phoneNumber" label="Số điện thoại" size="lg" variant="bordered" />
                <Input name="password" id="password" label="Mật khẩu" size="lg" variant="bordered" />
                <button type="submit" className="block w-full rounded-3xl border border-black p-3 hover:bg-black hover:text-white hover:border-white transition-all">Đăng ký</button>
                <Link className="block" href={"/auth/login"}>Bạn đã có tài khoản? <span className="font-bold">Đăng nhập</span></Link>
            </form>
        </div>
    )
}
