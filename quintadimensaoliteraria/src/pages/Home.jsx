import React from "react";
import Hero from "../componentes/Hero";
import Pesquisa from "../componentes/Pesquisa";
import CardPromo from "../componentes/CardPromo";

import L01 from '../assets/img/L01.png';

import '../styles/Home.css';

function Home(){
    return(
        <div>
            <Hero 
                titulo="5ª Geração literária"
                texto="Aqui seus sonhos tomam forma, suas viajens e jornadas se prolongam e tudo mais que conseguir imaginar!"
            />
            <Pesquisa/>
            <div className="Cards">
                <CardPromo 
                    titulo="The Hobbit"
                    descricao="Uma jornada inesperado pelo universo de Tolkien, junte-se a Bilbo e à compania."
                    preco="R$ 50,00"
                    imagem={L01}
                />
            </div>
        </div>
    );
}

export default Home;