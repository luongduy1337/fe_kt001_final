'use client'
import { Button, Input, Textarea } from '@nextui-org/react'
import * as actions from '../../actions'
import { useFormState } from 'react-dom'

export function FormContact() {
    const [formState, action] = useFormState(actions.sendContact, { errors: {} })
    return (
        <form action={action}>
            <div className="form__row__1 flex flex-row gap-4 items-center mb-2">
                <Input
                    name="fullName"
                    id="fullName"
                    label="Họ Tên"
                    size='lg'
                    isInvalid={!!formState.errors.fullName}
                    errorMessage={formState.errors.fullName?.join(', ')}
                />
                <Input
                    name="phoneNumber"
                    id="phoneNumber"
                    label="Số điện thoại"
                    size='lg'
                    isInvalid={!!formState.errors.phoneNumber}
                    errorMessage={formState.errors.phoneNumber?.join(', ')}
                />
            </div>
            <div className="form__row__2 flex flex-row gap-4 items-center mb-2">
                <Input
                    name="email"
                    id="email"
                    label="Email"
                    size='lg'
                    isInvalid={!!formState.errors.email}
                    errorMessage={formState.errors.email?.join(', ')}
                />
                <Input
                    name="title"
                    id="title"
                    label="Tiêu đề"
                    size='lg'
                    isInvalid={!!formState.errors.title}
                    errorMessage={formState.errors.title?.join(', ')}
                />
            </div>
            <div className="form__row__3 flex flex-row gap-4 mb-2">
                <Textarea
                    label="Nội dung"
                    id="content"
                    name="content"
                    rows={8}
                    disableAutosize
                    isInvalid={!!formState.errors.content}
                    errorMessage={formState.errors.content?.join(', ')}
                />
            </div>
            <div className="flex flex-row justify-end">
                <Button type="submit" color="primary">
                    GỬI
                </Button>
            </div>
            {formState.errors._form ? (
                <div className="rounded p-2 bg-red-500 border border-r-red-400 my-2 text-white">
                    {formState.errors._form?.join(', ')}
                </div>
            ) : null}
        </form>
    )
}
