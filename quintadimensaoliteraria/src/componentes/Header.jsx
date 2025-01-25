import React from "react";
import LinkA from "./linkA";
import '../styles/Header.css';
import MenuResponsive from "./MenuResponsive";
import ModalLogin from "./ModalLogin";

import logo from '../assets/img/ImgLogoSbg.png';
import count from '../assets/img/iconPerfil.png';
import shop from '../assets/img/iconCarShop.png';
import settings from '../assets/img/iconSettings.png';


function Header(){
    
    return(
        <header className="navbar">            
            <div className="menuLinks">
                <div className="logo">
                    <img src={logo} alt="Logo-react"/>
                </div>

                <LinkA Href="/" text="Home" cor="claro" />
                <LinkA Href="/OtherPage" text="OtherPage" cor="claro" />
                <LinkA Href="/OtherPage2" text="OtherPage2" cor="claro" />
            </div>
            <MenuResponsive/>

            <div id="MenuDesk" className="cont-buttons">
                <button className="buttons"><img src={count} alt="icon-perfil" /></button>
                <button className="buttons"><img src={shop} alt="icon-shopping cart" /></button>
                <button className="buttons"><img src={settings} alt="icon-configuracoes" /></button>

                <ModalLogin/>
                
            </div>
        </header>
    );
}

export default Header;