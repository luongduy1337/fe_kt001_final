'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from "../../../public/img/logo.png"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export function Headers() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <Navbar className="navbar__custom shadow-lg" isBordered maxWidth={"2xl"} height={"90px"} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="dropdown__button sm:hidden"
                />
                <NavbarBrand>
                    <Link href={"/"}>
                        <Image width={228} height={62} src={Logo} alt="logo_mtgold" />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Link href={"/"}>
                        <span className={`navbar__menu ${pathname === '/' ? "active" : null}`}>TRANG CHỦ</span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={"/about-us"}>
                        <span className={`navbar__menu ${pathname === '/about-us' ? "active" : null}`}>DOANH NGHIỆP</span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={"/service"}>
                        <span className={`navbar__menu ${pathname === '/service' ? "active" : null}`}>DỊCH VỤ</span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={"/contact-us"}>
                        <span className={`navbar__menu ${pathname === '/contact-us' ? "active" : null}`}>LIÊN HỆ</span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    {session?.user ? (
                        <>
                            <span className="underline text-white">{session.user.name}</span>
                            <Button onClick={() => signOut()}>Đăng xuất</Button>
                        </>
                    ) : (
                        <Button onClick={() => signIn()}>
                            <span className={`navbar__menu ${pathname === '/auth/login' ? "active" : null}`}>TÀI KHOẢN</span>
                        </Button>
                    )}
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
