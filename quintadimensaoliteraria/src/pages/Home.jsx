import React from "react";
import Hero from "../componentes/Hero";
import Pesquisa from "../componentes/Pesquisa";
import Carroussel from "../componentes/Carroussel";
import Coments from "../componentes/Coments";
import CardInfo from "../componentes/CardInfo";

import { FantasiaData } from "../assets/Data/FantasiaData";
import { RomanceData } from "../assets/Data/RomanceData";
import { AventuraData } from "../assets/Data/AventuraData";
import { ComentsData } from "../assets/Data/ComentsData";


import Icon1 from '../assets/img/icon-BookCard01.png';
import Icon2 from '../assets/img/icon-BookCard02.png';
import Icon3 from '../assets/img/icon-BookCard03.png';


import '../styles/Home.css';

function Home(){
    return(
        <div>

            <Hero 
                titulo="5ª Dimensão literária"
                texto="Aqui seus sonhos tomam forma, suas viajens e jornadas se prolongam e tudo mais que conseguir imaginar!"
            />
            <Pesquisa/>
            

            
            <Carroussel
                titulo="Fantasia"
                Data={FantasiaData}
            />    
            
            <Carroussel
                titulo="Romance"
                Data={RomanceData}
            />

            <Carroussel 
                titulo="Aventura"
                Data={AventuraData}
            />


            <Coments
                Data={ComentsData}
            />

            <div className="cards-info">
                <CardInfo
                    img={Icon1}
                    title="Recursos"
                    text="Nossa página está repleta de funcionalidades que visam o melhor para os usuários, além disso, presamos muito pelo estado dos livros"
                    label="Button Card"
                />

                <CardInfo
                    img={Icon2}
                    title="Público"
                    text="Livros para todas as idades e gostos. Maior facilidade e segurança para os pais no cuidado com o conteúdo visto pelos filhos"
                    label="Saiba Mais"
                />

                <CardInfo
                    img={Icon3}
                    title="E-Books"
                    text="Para aqueles que desejam o livro o mais depressa possível ou para aqueles que querem encontrar o precinho mais em conta ainda"
                    label="Button Card"
                />
            </div>
        </div>
    );
}

export default Home;