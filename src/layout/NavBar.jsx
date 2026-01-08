import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../public/assets/LOGO.svg";
import Image from "next/image";
import style from "@/Sass/navbar.module.scss";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  // Add or remove pages here
];
const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          <Image src={logo} alt="Logo" width={60} height={44} />
        </Link>

        {/* Desktop Menu (hidden on mobile) */}
        <div className={style.navLinks}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={style.navLink}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={style.navButtons}>
          <Button>AR</Button>

          <Button>
            Start Your Project
            <ArrowRight />
          </Button>
        </div>

        {/* Mobile Menu (visible only on mobile) */}
        {/* <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
           side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet> */}
      </div>
    </nav>
  );
};

export default NavBar;
