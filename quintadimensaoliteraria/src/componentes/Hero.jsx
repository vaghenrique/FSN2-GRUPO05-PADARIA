import React from "react";
import imagemB from '../assets/img/imgHerosbg.png';
import BotaoSec from "./BotaoSec";
import BotaoL from "./BotaoL";
import Titulo from "./titulo";

import '../styles/Hero.css';

function Hero({titulo, texto}){
    return(
        <header className="Hero">
            <img src={imagemB} alt="imagem-livros"/>

            <div className="text">
                <Titulo text={titulo} size="5rem" />
                <p>{texto}</p>
                <BotaoSec label="Conheça Mais" /> &nbsp;&nbsp;&nbsp;&nbsp;
                <BotaoL label="Destaques"/>
            </div>
        </header>
    );
}

export default Hero;