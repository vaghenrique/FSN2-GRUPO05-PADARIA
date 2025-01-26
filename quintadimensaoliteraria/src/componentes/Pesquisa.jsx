import React from "react";
import iconPesquisa from '../assets/img/icon-search.png';
import { GeneralData } from "../assets/Data/GeneralData";
import CardPromo from "./CardPromo";

import '../styles/Pesquisa.css';

function Pesquisa(){
    const [pesquisa, setpesquisa] = React.useState('');

    const pesquisaLowerCase = typeof pesquisa === 'string' ? pesquisa.toLowerCase() : '';

    const livros = GeneralData.filter(livro => livro.titulo.toLowerCase().includes(pesquisaLowerCase));

    return(
        <div>
            <div className="Pesquisa">
                    <form>
                        <input value={pesquisa} onChange={(e) => setpesquisa(e.target.value)} type="text" placeholder="Buscar Livros . . ."/>
                        <button type="button">  <img src={iconPesquisa} alt="icon pesquisa" />    </button>
                        {/* <button> <img src={iconPesquisa} alt="icon-pesquisas"/> </button> */}
                    </form>
                    
            </div>

            <div className="Cards Hide">
                {livros.map((d) => (
                    <CardPromo key={d.id}
                        titulo={d.titulo}
                        descricao={d.descricao}
                        preco={d.preco}
                        imagem={d.imagem}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pesquisa;