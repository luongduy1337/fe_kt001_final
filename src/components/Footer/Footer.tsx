import Image from 'next/image'
import React from 'react'
import LogoFooter from '../../../public/img/logo_footer_light.png'

export default function Footer() {
  return (
    <section className="footer flex flex-row bg-white">
      <div className="footer__contact space-y-2">
        <h2 className="text-slate-700 font-bold">LIÊN HỆ VỚI CHÚNG TÔI</h2>
        <p className='text-gray-700'>
          Hotline: <span className="underline">0707693260</span>
        </p>
        <p className='text-gray-700'>
          Email: <span className="underline">mtgold794@gmail.com </span>
        </p>
        <h3 className="text__color flex flex-row">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 21"
          >
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
            </g>
          </svg>

          <span className='text-gray-700'>Xem bản đồ</span>
        </h3>
        <p className='text-gray-700'>
          Địa chỉ: 816/64/32/17 Quốc lộ 1, Khu phố 5, Phường Thạnh Xuân, Quận
          12, Thành phố Hồ Chí Minh, Việt Nam
        </p>
        <p className='text-gray-700'>MST: 0317422794</p>
      </div>
      <div className="footer__service">
        <h2 className="text-slate-700 font-bold mb-5">DỊCH VỤ</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Dịch vụ thành lập công ty</li>
          <li>Sửa đổi bổ sung giấy đăng ký kinh doanh</li>
          <li>Dịch vụ gỡ rối sổ sách kế toán</li>
          <li>Kế toán thuế</li>
          <li>Dịch vụ khác</li>
        </ul>
      </div>
      <div className="footer__company">
        <Image width={400} height={400} src={LogoFooter} alt="logo_footer" />
      </div>
    </section>
  )
}
