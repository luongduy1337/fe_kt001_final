'use server'

import { redirect } from "next/navigation"
import { z } from "zod"

//NOTE - Tạo 1 schema để kiểm tra giá trị người dùng nhập vào bằng thư viện zod 

const registerUserSchema = z.object({
    name: z.string().min(5, { message: "Họ Tên người dùng ít nhất 5 ký tự trở lên. Vui lòng nhập lại!" }),
    phoneNumber: z.string().regex(/^0\d{9}$/, { message: "Số điện thoại bạn nhập không hợp lệ. Vui lòng nhập lại!" }),
    email: z.string().email({ message: "Email bạn nhập không hợp lệ. Vui lòng nhập lại!" }),
    username: z.string().min(5, { message: "tài khoản ít nhất 5 ký tự trở lên. Vui lòng nhập lại!" }),
    password: z.string().min(5, { message: "Mật khẩu ít nhất 5 ký tự trở lên. Vui lòng nhập lại!" })

})

interface RegisterUserFormState {
    errors: {
        name?: string[],
        email?: string[],
        username?: string[],
        password?: string[],
        phoneNumber?: string[],
        _form? : string[],
    }
}

export const registerUser = async (formState : RegisterUserFormState, formData: FormData) : Promise<RegisterUserFormState> => {

    //TODO -  Lấy toàn bộ dữ liệu từ login form 

    const name = formData.get('name');
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const phoneNumber = formData.get('phoneNumber');

    //TODO - Kiểm tra giá trị người dùng nhập vào đã hợp lệ hay chưa 

    const result = registerUserSchema.safeParse({
        name,
        email,
        username,
        password,
        phoneNumber
    })

    // TODO - Nếu dữ liệu người dùng nhập vào không hợp lệ -> trả lỗi 
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    // TODO - Nếu dữ liệu người dùng nhập vào hợp lệ -> chuẩn bị data để gửi lên server 


    const dataReq = {
        name,
        email,
        username,
        password,
        phoneNumber,

    }

    // TODO - Sau khi chuẩn bị xong -> gửi data lên server thông qua fetch 

    let isSuccess : boolean = false;

    try {
        const res = await fetch("http://localhost:8989/api/v1/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Đặt kiểu dữ liệu là JSON
            },
            body: JSON.stringify(dataReq)
        })

        if (res.status === 201) {
            isSuccess = true;
        }
    }catch (error : unknown) {
        if(error instanceof Error){
            return {
                errors : {
                    _form : [error.message]
                }
            }
        }else {
            return {
                errors : {
                    _form : ["Some thing went wrong"]
                }
            }
        }

    }

    if(isSuccess){
        redirect("/auth/login?success=true")
    }
    return {
        errors : {}
    }
}