import React from "react";
import '../styles/CardPromo.css';

function CardPromo({titulo, descricao, preco, imagem}){
    return(
        <div class="card">
            <div class="cabecalho dark">
                <img src={imagem} alt="Imagem Livro"/>
            </div>
            <br/>
            <h1>{titulo}</h1>
            <br/>
            <p>{descricao}</p>
            <br/>
            <button id="darkbutton">{preco}</button>
            <br/>
            <br/>
        </div>
    );
}

export default CardPromo;