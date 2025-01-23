import React from "react";
import addCart from '../assets/img/iconCarShop.png';
import '../styles/CardPromo.css';

function CardPromo({titulo, descricao, preco, imagem}){
    return(
        <div class="card">
            <div class="cabecalho">
                <img src={imagem} alt="Imagem Livro"/>
            </div>
            <br/>
            <h1>{titulo}</h1>
            <br/>
            <p>{descricao}</p>
            <br/>
            <button>{preco} <img src={addCart} /> </button>
            <br/>
            <br/>
        </div>
    );
}

export default CardPromo;