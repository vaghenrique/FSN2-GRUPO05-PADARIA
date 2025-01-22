import React from "react";
import iconPesquisa from '../assets/img/icon-search.png';
import BotaoL from "./BotaoL";
import '../styles/Pesquisa.css';

function Pesquisa(){
    return(
        <div className="menuButtons">
                <form>
                    <input type="text" name="Pesquias" placeholder="Digite aqui"/>
                    <button> <img src={iconPesquisa} alt="icon-pesquisas"/> </button>
                </form>
                <BotaoL label="Login"/>
            </div>
    );
}

export default Pesquisa;