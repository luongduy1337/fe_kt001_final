'use server'

import { redirect } from "next/navigation";
import z from "zod"

//NOTE - Tạo 1 schema để kiểm tra giá trị người dùng nhập vào bằng thư viện zod 

const sendContactSchema = z.object({
    fullName: z.string().min(5, { message: "Họ tên ít nhất 5 ký tự trở lên. Vui lòng nhập lại!" }),
    phoneNumber: z.string().regex(/^0\d{9}$/, { message: "Số điện thoại bạn nhập không hợp lệ. Vui lòng nhập lại!" }),
    email: z.string().email({ message: "Email bạn nhập không hợp lệ. Vui lòng nhập lại!" }),
    title: z.string().min(3, { message: "Tiêu đề ít nhất 3 ký tự trở lên. Vui lòng nhập lại!" }),
    content: z.string().min(5, { message: "Nội dung ít nhất 5 ký tự trở lên. Vui lòng nhập lại" })
})

interface SendContactFormState {
    errors: {
        fullName?: string[];
        phoneNumber?: string[];
        email?: string[];
        title?: string[];
        content?: string[];
        _form? : string[];
    }
}



export const sendContact = async (formState: SendContactFormState, formData: FormData) : Promise<SendContactFormState> => {

    //TODO - Lấy toàn bộ các giá trị người dùng nhập vào contact form 
    const fullName = formData.get('fullName');
    const phoneNumber = formData.get('phoneNumber');
    const email = formData.get('email');
    const title = formData.get('title');
    const content = formData.get('content');

    //TODO - Kiểm tra giá trị người dùng nhập vào đã hợp lệ hay chưa 
    const result = sendContactSchema.safeParse({
        fullName,
        phoneNumber,
        email,
        title,
        content,
    });

    //TODO - Nếu dữ liệu người dùng nhập vào không hợp lệ 
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    //TODO - Nếu dữ liệu người dùng nhập vào hợp lệ -> chuẩn bị data để gửi lên server 

    const dataReq = {
        fullName,
        phoneNumber,
        email,
        title,
        content,
    }

    //TODO - Sau khi chuẩn bị xong -> gửi data lên server thông qua fetch 

    let isSucess : boolean = false;
    try {
        const res = await fetch("http://localhost:8788/contact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Đặt kiểu dữ liệu là JSON
            },
            body: JSON.stringify(dataReq)
        });
        if(res.status === 201){
            isSucess = true;
        }
        
    } catch (error : unknown) {
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

    if(isSucess){
        redirect("/contact-us?success=true");
    }

    return {
        errors : {}
    }
}