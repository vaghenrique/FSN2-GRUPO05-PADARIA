import React from "react";
import iconPesquisa from '../Img/icon-search.png';
import BotaoL from "./BotaoL";
import './Pesquisa.css';

function Pesquisa(){
    return(
        <div className="menuButtons">
                <form>
                    <input type="text" name="Pesquias" placeholder="Digite aqui"/>
                    <button> <img src={iconPesquisa} alt="icon-pesquisas"/> </button>
                </form>
                <BotaoL/>
            </div>
    );
}

export default Pesquisa;