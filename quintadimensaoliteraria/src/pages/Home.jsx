import React from "react";
import Hero from "../componentes/Hero";
import Pesquisa from "../componentes/Pesquisa";
import CardPromo from "../componentes/CardPromo";
import Carroussel from "../componentes/Carroussel";
import ConteudoFantasia from "../componentes/ConteudoFantasia";

import L01 from '../assets/img/L01.png';
import L02 from '../assets/img/L02.png';
import L05 from '../assets/img/L05.png';
import L06 from '../assets/img/L06.png';

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
                <CardPromo 
                    titulo="O senhor dos anéis"
                    descricao="Será que Frodo e seus amigos finalmentes destruíram o maldito anel?"
                    preco="R$ 40,00"
                    imagem={L02}
                />
                <CardPromo 
                    titulo="Harry Potter"
                    descricao="Harry entra em contato com o passado de sua família, mas não é o que ele esperava."
                    preco="R$ 20,00"
                    imagem={L05}
                />
                <CardPromo 
                    titulo="A Ascensão do Dragão"
                    descricao="Jamais vire as costas para aquilo que não lhe pode deter confiança suficiente para ser leal"
                    preco="R$ 50,00"
                    imagem={L06}
                />
            </div>

            <Carroussel titulo="Fantasia" 
                conteudo={<ConteudoFantasia/>}
            />
                
            

        </div>
    );
}

export default Home;