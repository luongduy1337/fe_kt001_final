'use client'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react'
import Logo from '../../../public/img/logo.png'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

export function Headers() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const menuItems = [
        'Profile',
        'Dashboard',
        'Activity',
        'Analytics',
        'System',
        'Deployments',
        'My Settings',
        'Team Settings',
        'Help & Feedback',
        'Log Out',
    ]

    const pathname = usePathname()
    const { data: session } = useSession()

    return (
        <Navbar
            className="navbar__custom shadow-lg"
            isBordered
            maxWidth={'2xl'}
            height={'90px'}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="dropdown__button sm:hidden"
                />
                <NavbarBrand>
                    <Link href={'/'}>
                        <Image width={228} height={62} src={Logo} alt="logo_mtgold" />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Link href={'/'}>
                        <span
                            className={`navbar__menu ${pathname === '/' ? 'active' : null}`}
                        >
                            TRANG CHỦ
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={'/about-us'}>
                        <span
                            className={`navbar__menu ${pathname === '/about-us' ? 'active' : null
                                }`}
                        >
                            DOANH NGHIỆP
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={'/service'}>
                        <span
                            className={`navbar__menu ${pathname === '/service' ? 'active' : null
                                }`}
                        >
                            DỊCH VỤ
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={'/contact-us'}>
                        <span
                            className={`navbar__menu ${pathname === '/contact-us' ? 'active' : null
                                }`}
                        >
                            LIÊN HỆ
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    {session?.user ? (
                        <Popover placement="bottom" showArrow={true} backdrop="blur">
                            <PopoverTrigger>
                                <div className="flex flex-row gap-2 navbar__menu hover:underline cursor-pointer">
                                    <span>{session.user.name}</span>
                                    <svg
                                        className="w-6 h-6"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                                        />
                                    </svg>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="flex flex-col gap-2 p-3">
                                    {session.user.role === 'ROLE_ADMIN' ? (
                                        <Link className="text-lg" href={'/admin'}>
                                            Quản trị
                                        </Link>
                                    ) : (
                                        <Link className="text-lg" href={'/profile'}>
                                            Hồ sơ
                                        </Link>
                                    )}

                                    <span
                                        className="cursor-pointer text-lg"
                                        onClick={() => signOut()}
                                    >
                                        Đăng xuất
                                    </span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <span
                            onClick={() => signIn()}
                            className={`navbar__menu cursor-pointer ${pathname === '/auth/login' ? 'active' : null
                                }`}
                        >
                            TÀI KHOẢN
                        </span>
                    )}
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? 'primary'
                                    : index === menuItems.length - 1
                                        ? 'danger'
                                        : 'foreground'
                            }
                            className="w-full"
                            href="#"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
