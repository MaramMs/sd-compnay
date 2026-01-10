import React from "react";
import style from "../Sass/footer.module.scss";
import Image from "next/image";
import logo from "../../public/assets/LOGO.svg";
import { Facebook } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentInfo}>
            <Image src={logo} width={78} height={59} />
            <p>
              We build exceptional software that helps businesses grow in the
              digital age
            </p>
            <div className={style.social}>
              <div className={style.icon}>
                <FaFacebook  size={24} />
              </div>
              <div className={style.icon}>
                <FaInstagram size={24} />
              </div>
              <div className={style.icon}>
                <FaXTwitter size={24} />
              </div>
              <div className={style.icon}>
                <FaLinkedin size={24} />
              </div>
            </div>
          </div>

          <div className={style.company}>
            <h2>Company</h2>
            <ul>
              <li>About us</li>
              <li>Our Services</li>
              <li>Our Projects</li>
              <li>Consultation</li>
            </ul>
          </div>
            <div className={style.services}>
            <h2>Services</h2>
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Tech Consulting</li>
            </ul>
          </div>
            <div className={style.resources}>
           <div className={style.blog}>
             <h2>Resources</h2>
           <span>Blog</span>
           </div>
           <div className={style.contact}>
            <div className={style.contactItem}>
              <span>info@sdcompany.com</span>

            </div>
             <div className={style.contactItem}>
              <span>i+1 (555) 123-4567</span>

            </div>

           </div>
          </div>
        </div>
        <div className={style.copy}>
          <p>© 2025 SD. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
