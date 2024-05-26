import React, { RefObject, useEffect, useRef } from "react";
import logo from '../../../assets/images/logo.png';
import { MenuLinks } from "../../global/MenuLink";
import UserImg from '../../../assets/images/avatar-icon.png'
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from 'react-icons/bi'
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const Header = () => {
    const headerRef: RefObject<HTMLDivElement> = useRef(null);
    const menuRef: RefObject<HTMLDivElement> = useRef(null);
 

    const handleStickyheader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef?.current?.classList.add('sticky_header');
            } else {
                headerRef?.current?.classList.remove('sticky_header');
            }
        })
    }

    useEffect(() => {
        handleStickyheader()
        return () => window.removeEventListener('scroll', handleStickyheader)
    })

    const toggleMenu = () => menuRef?.current?.classList.toggle('show_menu')
    return (
        <div className="header-container" ref={headerRef}>
        <header className="border-bottom lh-1 py-1">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <img src={logo}></img>
            </div>
            <div className="col-4 text-center">
            <div className="nav-scroller py-1 mb-1 border-bottom">
          <nav className="nav nav-underline justify-content-between">
            { MenuLinks.map((menu, index) =>
                <NavLink key={index} to={menu.path} className={navClass => navClass.isActive ? 'nav-item nav-link link-body-emphasis text-primary active' : 'nav-item nav-link link-body-emphasis'}>
                 {menu.label}
               </NavLink>
            )}
          </nav>
        </div>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
            <Link to="/auth/login">
                Login
             </Link>   
            </div>
          </div>
        </header>
       </div>
    )
}
export default Header;