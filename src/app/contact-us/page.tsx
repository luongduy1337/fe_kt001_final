import { FormContact } from "@/components/FormContact/FormContact"
import ContactGif from "../../../public/img/optimized.gif"
import Link from "next/link"
import ContactBottomImg from "../../../public/img/contact_bottom.png"
import Image from "next/image"


interface ContactUsPageProps {
  searchParams: {
    success: string
  }

}

export default function ContactUsPage({ searchParams }: ContactUsPageProps) {
  console.log(searchParams.success);
  if (searchParams.success) {
    return (
      <div className='success__noti flex flex-col justify-center items-center py-40'>
        <h2 className='text-6xl font-bold'>Đã gửi thành công</h2>
        <p>Chúng tôi sẽ liên lạc với bạn sau!</p>
        <Link href={"/"}>Về trang chủ</Link>
      </div>
    )
  } else {
    return (
      <section className="contact py-10 w-full">
        <div className="contact__top">
          <h1 className="text-center contact__title font-bold">Liên hệ đến MT Gold</h1>
          <div className="contact__form px-20 flex flex-row gap-4 items-center">
            <div className="form__gif w-1/2" style={{
              backgroundImage: `url(${ContactGif.src})`,
              width: "500px",
              height: "500px",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "100%"
            }} />
            <div className="form w-1/2">
              <FormContact />
            </div>
          </div>
        </div>
        <div className=" contact__bottom bg-white flex flex-row gap-6 justify-center py-10">
          <div className="contact__bottom__info w-1/4 border rounded bg-white shadow-lg h-fit p-4 space-y-2">
            <p className="text-lg">Hotline: 0707693260</p>
            <p className="text-lg">Email: <span className="underline">mtgold794@gmail.com</span></p>
            <p className="flex flex-row"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
              <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
              </g>
            </svg>
              XEM BẢN ĐỒ</p>
            <p>Địa chỉ: 816/64/32/17 Quốc lộ 1, Khu phố 5, Phường Thạnh Xuân, Quận 12, Thành phố Hồ Chí Minh, Việt Nam</p>
          </div>
          <div className="contact__bottom__img w-1/3">
            <Image src={ContactBottomImg} alt="contact_bottom_img" />
          </div>
        </div>

      </section>
    )
  }
}
