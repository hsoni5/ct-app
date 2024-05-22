import React, { RefObject, useEffect, useRef } from "react";
import logo from '../../assets/images/logo.png';
import { MenuLinks } from "../global/MenuLink";
import UserImg from '../../assets/images/avatar-icon.png'
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from 'react-icons/bi'

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
        <header className="header flex item-center" ref={headerRef}>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-gray" arial-label="navigation bar">
                <div className="container">
                    {/* ============== Logo ===============*/}
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon ">
                            <BiMenu color="black" />
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            {
                                MenuLinks.map((item, index) =>
                                    <li key={index} className="nav-link">
                                        <NavLink to={item.path} className={navClass => navClass.isActive ? 'text-primary' : 'text-dark'}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li>
                                <Link to="/login" className="nav-link bg-primary">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;