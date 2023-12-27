import Intro1 from "../../../public/img/intro_1.png"
import Intro2 from "../../../public/img/intro_2.png"
import Image from "next/image"
export function IntroductionCompany() {
    return (
        <section className='intro container mx-auto'>
            <h2 className='intro__title text-center font-bold'>Công ty MT GOLD và thành lập</h2>
            <div className="intro__first flex flex-row ">
                <div className='intro__content__first w-1/2'>
                    <p className='text'>CÔNG TY TNHH DỊCH VỤ TƯ VẤN MT GOLD là một công ty chuyên cung cấp dịch vụ cho thuê kế toán với cam kết về chất lượng, tận tâm và hiệu quả. Với một đội ngũ chuyên gia kế toán tài năng, giàu kinh nghiệm và Chào mừng bạn đến với MT GOLD - Đối tác tin cậy của bạn trong lĩnh vực kế toán và tài chính!</p>
                </div>
                <div className="intro__img w-1/2">
                    <Image src={Intro1} alt="intro_1" className="w-full h-full" />
                </div>
            </div>
            <div className="intro__second flex flex-row">
                <div className="intro__img w-1/2">
                    <Image src={Intro2} alt="intro_2" className="w-full h-full" />
                </div>
                <div className='intro__content__second w-1/2'>
                    <p className='text'>MT GOLD là một công ty hàng đầu chuyên cung cấp dịch vụ cho thuê kế toán chất lượng cao cho các doanh nghiệp mọi quy mô. Với kinh nghiệm và niềm đam mê sâu sắc trong lĩnh vực kế toán, chúng tôi cam kết đem đến giải pháp kế toán hiệu quả và tối ưu nhất cho quý khách hàng.</p>
                </div>
            </div>
        </section>
    )
}
