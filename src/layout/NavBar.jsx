"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import style from "@/Sass/navbar.module.scss";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../public/assets/LOGO.svg";

const navItems = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.about", href: "/about-us" },
  { labelKey: "nav.services", href: "/services" },
  { labelKey: "nav.projects", href: "/projects" },
  // { labelKey: "nav.blogs", href: "/blogs" },
  // { labelKey: "nav.consultation", href: "/consultation" },
  { labelKey: "nav.contact", href: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const { mounted, currentLanguage } = useLanguage();

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
                {mounted ? t(item.labelKey) : ""}
              </Link>
            );
          })}
        </div>

        <div className={style.navButtons}>
          <LanguageSwitcher />
          <Button className={style.start}>
            {mounted ? t("common.start") : ""}
            <ArrowRight />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className={style.mobileMenuIcon}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={style.mobileMenu}>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${style.mobileNavLink} ${isActive ? style.active : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {mounted ? t(item.labelKey) : ""}
              </Link>
            );
          })}
          <div className={style.mobileButtons}>
            <LanguageSwitcher />
            <Button>
              {mounted ? t("common.learn") : ""}
              <ArrowRight />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
