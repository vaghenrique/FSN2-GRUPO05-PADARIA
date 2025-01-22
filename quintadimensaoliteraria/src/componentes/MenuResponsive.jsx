import React, {useState} from "react";
import LinkA from "./linkA";
import IconNav from '../assets/img/iconNavegacao.png';
import Pesquisa from "./Pesquisa";
import '../styles/MenuResponsive.css';


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
                <LinkA Href="/" text="OtherPage" cor="claro" />
                <LinkA Href="/" text="OtherPage2" cor="claro" />
                <div className="Mobile">
                    <Pesquisa />
                </div>
            </div>
        </div>
    );
}

export default MenuResponsive;