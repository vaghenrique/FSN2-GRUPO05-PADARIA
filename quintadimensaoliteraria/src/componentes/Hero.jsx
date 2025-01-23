import React from "react";
import imagemB from '../assets/img/imgHerosbg.png';
import BotaoSec from "./BotaoSec";
import BotaoL from "./BotaoL";

import '../styles/Hero.css';

function Hero({titulo, texto}){
    return(
        <header className="Hero">
            <img src={imagemB} alt="imagem-livros"/>

            <div className="text">
                <h1>{titulo}</h1>
                <p>{texto}</p>
                <BotaoSec label="Conheça Mais" /> &nbsp;&nbsp;&nbsp;&nbsp;
                <BotaoL label="Destaques"/>
            </div>
        </header>
    );
}

export default Hero;