import React from "react";
import iconPesquisa from '../assets/img/icon-search.png';
import BotaoL from "./BotaoL";
import '../styles/Pesquisa.css';

function Pesquisa(){
    return(
        <div className="Pesquisa">
                <form>
                    <input type="text" name="Pesquias" placeholder="Buscar Livros . . ."/>
                    <button>  <img src={iconPesquisa} alt="icon pesquisa" />    </button>
                    {/* <button> <img src={iconPesquisa} alt="icon-pesquisas"/> </button> */}
                </form>
                
            </div>
    );
}

export default Pesquisa;