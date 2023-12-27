'use client'
import Carousel1 from '../../../public/img/banner_1.png'
import Carousel2 from '../../../public/img/banner_2.png'
import Image from 'next/image'
// import Swiper core and required modules
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Banner() {
  return (
    <section className="container home__banner flex flex-row items-center mx-auto justify-between">
      <div className="banner__content space-y-2 w-1/3">
        <span className="welcome__text text-2xl">CHÀO MỪNG BẠN ĐẾN VỚI</span>
        <h1 className="company__name">
          CÔNG TY TNHH <br /> DỊCH VỤ TƯ VẤN <br /> MT GOLD
        </h1>
        <button className="link__services text-2xl ">KHÁM PHÁ NGAY</button>
      </div>
      <div className="banner__img">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          navigation
          className='h-full'
        >
          <SwiperSlide>
            <Image className="w-full" src={Carousel1} alt="carousel_1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full" src={Carousel2} alt="carousel_2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
