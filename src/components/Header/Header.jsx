import React from 'react'
import logo from "../../assets/logos/Logo.png"
import logoTxt from "../../assets/logos/logo-text.svg"
import { FaLink } from "react-icons/fa6";

export default function Header() {
  return (
    <header>
        <div className="logo">
            <img src={logo.src} alt="" />
        </div>
        <div className="logo-text">
            <img src={logoTxt.src} alt="" />
        </div>
        <p className="description">Des expériences uniques. Par un studio indépendant 100 % créatif 🐝</p>
    
        <a href="hornetsoftent.com" className="link"><FaLink className='icon'/>hornetsoftent.com</a>
    </header>
  )
}
