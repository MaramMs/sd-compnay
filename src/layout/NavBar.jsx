// import React from "react";
// import Link from "next/link";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { ArrowRight, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "../../public/assets/LOGO.svg";
// import Image from "next/image";
// import style from "@/Sass/navbar.module.scss";
// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about-us" },
//   { label: "Services", href: "/services" },
//   { label: "Projects", href: "/projects" },
//   { label: "Contact", href: "/contact" },
//   // Add or remove pages here
// ];
// const NavBar = () => {
//   return (
//     <nav className={style.navbar}>
//       <div className={style.container}>
//         {/* Logo */}
//         <Link href="/" className="text-lg font-semibold">
//           <Image src={logo} alt="Logo" width={60} height={44} />
//         </Link>

//         {/* Desktop Menu (hidden on mobile) */}
//         <div className={style.navLinks}>
//           {navItems.map((item) => (
//             <Link key={item.href} href={item.href} className={style.navLink}>
//               {item.label}
//             </Link>
//           ))}
//         </div>

//         <div className={style.navButtons}>
//           <Button>AR</Button>

//           <Button>
//             Start Your Project
//             <ArrowRight />
//           </Button>
//         </div>

//         {/* Mobile Menu (visible only on mobile) */}
//         {/* <Sheet>
//           <SheetTrigger asChild className="md:hidden">
//             <Button variant="ghost" size="icon">
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Open menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent
//            side="right" className="w-72">
//             <div className="flex flex-col gap-6 mt-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="text-lg font-medium hover:text-primary transition-colors"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <Button className="w-full">Get Started</Button>
//             </div>
//           </SheetContent>
//         </Sheet> */}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;



'use client'; // ← very important!

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ← add this
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