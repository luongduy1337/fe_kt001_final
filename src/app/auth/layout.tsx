import AuthImg from '../../../public/img/banner_1.png'
import Link from 'next/link'

function AuthLayout({children} : { children : React.ReactNode }) {
  return (
    <section className="auth flex flex-row">
      <div
        style={{
          backgroundImage: `url(${AuthImg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="auth__left w-3/5 relative"
      >
        <div className="h-full w-full layout__auth absolute top-0 left-0"></div>
        <div className='absolute flex flex-col gap-2 justify-center items-center h-full w-full'>
          <p className="text-lg text-white">CHÀO MỪNG BẠN ĐẾN VỚI</p>
          <h1 className="text-4xl text-white">
            CÔNG TY TNHH DỊCH VỤ TƯ VẤN MT GOLD
          </h1>
          <Link
            href={'/service'}
            className="rounded border border-yellow-400 text-yellow-400 p-2"
          >
            KHÁM PHÁ NGAY
          </Link>
        </div>
      </div>
      {children}
    </section>
  )
}

export default AuthLayout