import React, {useState} from "react";
import iconPesquisa from '../assets/img/icon-search.png';
import { GeneralData } from "../assets/Data/GeneralData";
import CardPromo from "./CardPromo";
import { Link } from "react-router-dom";
import '../styles/Pesquisa.css';

import { ReceberId } from "../context/getId";
import { useDispatch, useSelector } from "react-redux";

function Pesquisa(){
    const valor = useSelector((state) => state.id.valor);
    const dispatch = useDispatch();

    const [pesquisa, setpesquisa] = useState('');

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
                     <Link to={`/Livrodetalhe`} key={d.id} className="LinkCard">
                        <CardPromo Onclick={() => {dispatch(ReceberId(d.id))}}
                            key={d.id}
                            titulo={d.titulo}
                            descricao={d.descricao}
                            imagem={d.imagem}
                            preco={d.preco}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Pesquisa;