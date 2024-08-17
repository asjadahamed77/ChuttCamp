import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './NavBar.css'

import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const NavBar = () => {
    const[sticky,setSticky] = useState(false)

    const [mobile,setMobile] = useState(false)
    const toggleMenu = ()=>{
        mobile ? setMobile(false):setMobile(true)
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true):setSticky(false) 
        })
    },[])

  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobile?'':'hide-mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link> </li>
            <li><Link to='program' smooth={true} offset={-250} duration={500} >Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} >About Us</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-250} duration={500} >Testimonial</Link></li>
            <li><Link to='contact' smooth={true} offset={-250} duration={500} className='btn' >Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default NavBar