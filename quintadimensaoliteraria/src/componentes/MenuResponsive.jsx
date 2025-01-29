import React, {useState} from "react";
import LinkA from "./linkA";
import IconNav from '../assets/img/iconNavegacao.png';
import ModalLogin from "./ModalLogin";
import '../styles/MenuResponsive.css';


import count from '../assets/img/iconPerfil.png';
import shop from '../assets/img/iconCarShop.png';
import settings from '../assets/img/iconSettings.png';

function MenuResponsive(){
    const [IsVisible, setVisibility] = useState(false);

    const ShowMenu = () =>{
        setVisibility(!IsVisible);
    }
    var classe = '';
    IsVisible ? classe = "MenuLinksResponsive ShowLinks" : classe = "MenuLinksResponsive";
    
    return(
        <div>
            <button id="OtherMenu" onClick={ShowMenu}>
            <img src={IconNav} alt="icon-navegação"/> </button>

            <div className={classe} id="MenuR">    
                <LinkA Href="/" text="Home" cor="claro" />
                <LinkA Href="/OtherPage" text="OtherPage" cor="claro" />
                <LinkA Href="/OtherPage2" text="OtherPage2" cor="claro" />
                <div className="Mobile">
                    <div>
                        <button className="buttons"><img src={count} alt="icon-perfil" /></button>&nbsp; &nbsp;
                        <button className="buttons"><img src={shop} alt="icon-shopping cart" /></button>&nbsp; &nbsp;
                        <button className="buttons"><img src={settings} alt="icon-configuracoes" /></button>
                    </div>
                    <br/>                    
                    <ModalLogin/>
                </div>
            </div>
        </div>
    );
}

export default MenuResponsive;