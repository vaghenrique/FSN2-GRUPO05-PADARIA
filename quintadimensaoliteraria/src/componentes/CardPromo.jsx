import React from "react";
import addCart from '../assets/img/iconCarShop.png';
import '../styles/CardPromo.css';


// import { ReceberId } from "../context/getId";
// import { useDispatch, useSelector } from "react-redux";


function CardPromo({titulo, descricao, preco, imagem, id, Onclick}){
    // const valor = useSelector((state) => state.id.valor);
    // const dispatch = useDispatch();

    return(
        <div className="card" onClick={Onclick}> 
            <div className="cabecalho">
                <img src={imagem} alt="Imagem Livro"/>
            </div>
            <br/>
            <h1>{titulo}</h1>
            <br/>
            <p>{descricao}</p>
            <br/>
            <button value={id}>{preco} <img src={addCart} alt="Icone shopping cart" /> </button>
            <br/>
            <br/>
        </div>
    );
}

export default CardPromo;