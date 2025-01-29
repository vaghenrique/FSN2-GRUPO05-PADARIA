import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GeneralData } from "../assets/Data/GeneralData";
import { FantasiaData } from "../assets/Data/FantasiaData";
import { RomanceData } from "../assets/Data/RomanceData";
import { AventuraData } from "../assets/Data/AventuraData";

import addCart from '../assets/img/iconCarShop.png';

import BotaoL from "./BotaoL";
import Titulo from "./titulo";

import '../styles/DetalhesProduto.css';

// import { ReceberId } from "../context/getId";
import { useDispatch, useSelector } from "react-redux";


function DetalhesProduto() {
    const id = useSelector((state) => state.id.valor);
    const dispatch = useDispatch();

    // const { id } = useParams(); 
    const navigate = useNavigate();
    console.log(id);
    const todosOsProdutos = GeneralData;

    const produto = todosOsProdutos.find((prod) => prod.id === Number(id));

    if (!produto) {
        return <h2>Produto não encontrado!</h2>;
    }

    return (
        // <div className="detalhes-produto">
        //     <button onClick={() => navigate(-1)}>Voltar</button>
        //     <div>
        //         <img src={produto.imagem} alt={produto.titulo} />
        //         <h1>{produto.titulo}</h1>
        //         <p>{produto.descricao}</p>
        //         <p>{produto.resumo}</p>
        //         <p>{produto.preco}</p>
        //     </div>
        // </div>
        <div className="ConteinerProd">
            <br/>
            <br/>
            {/* <button onClick={() => navigate(-1)}>Voltar</button> */}
            <BotaoL label="Voltar" click={() => navigate(-1)}/>
            <br/><br/>
            <div className="ProdutoDetalhe">
                <div className="ImagemProd">
                    <img src={produto.imagem} alt={produto.titulo} />
                </div>
                <div className="DescProd">
                    <Titulo text={produto.titulo} />
                    <h2>{produto.descricao}</h2>
                    <br/>
                    <p>{produto.resumo}</p>
                    <br/>
                    <BotaoL label={`Add to Cart ${produto.preco}`} />
                </div>
            </div>
        </div>
    );
}

export default DetalhesProduto;