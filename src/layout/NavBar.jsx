'use client'; 

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import style from "@/Sass/navbar.module.scss";
import logo from "../../public/assets/LOGO.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Consultation", href: "/consultation" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          <Image src={logo} alt="Logo" width={60} height={44} />
        </Link>

        {/* Desktop Menu */}
        <div className={style.navLinks}>
          {navItems.map((item) => {
            const isActive = 
              pathname === item.href || 
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${style.navLink} ${isActive ? style.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className={style.navButtons}>
          <Button>AR</Button>
          <Button>
            Start Your Project
            <ArrowRight />
          </Button>
        </div>

        {/* Mobile menu can be improved later the same way */}
      </div>
    </nav>
  );
};

export default NavBar;