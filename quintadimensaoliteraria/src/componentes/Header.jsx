import React from "react";
import LinkA from "./linkA";
import '../styles/Header.css';
import Pesquisa from "./Pesquisa";
import MenuResponsive from "./MenuResponsive";
import logo from '../logo.svg';


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

            <div id="MenuDesk">
                <Pesquisa/>
            </div>
        </header>
    );
}

export default Header;