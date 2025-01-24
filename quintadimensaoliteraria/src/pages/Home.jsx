import React from "react";
import Hero from "../componentes/Hero";
import Pesquisa from "../componentes/Pesquisa";
import CardPromo from "../componentes/CardPromo";
import Carroussel from "../componentes/Carroussel";

import L01 from '../assets/img/L01.png';
import L02 from '../assets/img/L02.png';
import L03 from '../assets/img/L03.png';
import L04 from '../assets/img/L04.png';
import L05 from '../assets/img/L05.png';
import L06 from '../assets/img/L06.png';
import L07 from '../assets/img/L07.png';

import LR01 from '../assets/img/LR01.png';
import LR02 from '../assets/img/LR02.png';
import LR03 from '../assets/img/LR03.png';
import LR04 from '../assets/img/LR04.jpg';
import LR05 from '../assets/img/LR05.png';
import LR06 from '../assets/img/LR06.webp';

import LA01 from '../assets/img/LA01.png';
import LA02 from '../assets/img/LA02.png';
import LA03 from '../assets/img/LA03.png';
import LA04 from '../assets/img/LA04.png';
import LA05 from '../assets/img/LA05.png';
import LA06 from '../assets/img/LA06.png';
import LA07 from '../assets/img/LA07.png';


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
        </div>
    );
}

export default Home;


// Datas 
const FantasiaData = [
    {
        id: 0,
        titulo: "The Hobbit",
        descricao: "Uma jornada inesperado pelo universo de Tolkien, junte-se a Bilbo e à compania.",
        preco: "R$ 50,00",
        imagem: L01
    },
    {
        id: 1,
        titulo: "O senhor dos anéis",
        descricao: "Será que Frodo e seus amigos finalmentes destruíram o maldito anel?",
        preco: "R$ 40,00",
        imagem: L02
    },
    {
        id: 2,
        titulo: "Harry Potter 1",
        descricao: "E a Pedra Filosofal, o início de uma das sagas sagas mais aplaudidas.",
        preco: "R$ 20,00",
        imagem: L03
    },
    {
        id: 3,
        titulo: "Harry Potter 2",
        descricao: "E a câmara secreta. Quais os perigos que aguardam Harry para o segundo ano letivo?",
        preco: "R$ 25,00",
        imagem: L04
    },
    {
        id: 4,
        titulo: "Harry Potter 3",
        descricao: "Harry entra em contato com o passado de sua família, mas não é o que ele esperava.",
        preco: "R$ 24,00",
        imagem: L05
    },
    {
        id: 5,
        titulo: "A Ascensão do Dragão",
        descricao: "Jamais vire as costas para aquilo que não lhe pode deter confiança suficiente para ser leal",
        preco: "R$ 60,00",
        imagem: L06
    },
    {
        id: 6,
        titulo: "O Principe Cruel",
        descricao: "Acompenha a aventura de Jude através de sua nada voluntária entrada no reino das fadas.",
        preco: "R$ 100,00",
        imagem: L07
    }

]

const RomanceData = [
    {
        id: 0,
        titulo: "O Fantasma Da Ópera",
        descricao: "Um romance misterioso e contagiante, mistério e espectativa se condensam",
        preco: "R$ 30,00",
        imagem: LR02
    },
    {
        id: 1,
        titulo: "As Táticas do Amor",
        descricao: "Um pequeno romance adolescente que lhe comoverá até os menores sentimentos",
        preco: "R$ 30,00",
        imagem: LR01
    },
    {
        id: 2,
        titulo: "Dom Casmurro",
        descricao: "Conheça uma das maiores histórias de um dos maiores escritores do Brasil",
        preco: "R$ 45,00",
        imagem: LR03
    },
    {
        id: 3,
        titulo: "Memórias Póstumas de Brás Cubas",
        descricao: "Relatos de um defunto autor",
        preco: "R$ 40,00",
        imagem: LR04
    },
    {
        id: 4,
        titulo: "O Pequeno Principe",
        descricao: "Um dos maiores e mais memoráveis clássicos da literatura humana",
        preco: "R$ 60,00",
        imagem: LR05
    },
    {
        id: 5,
        titulo: "A Marca do Zorro",
        descricao: "A velha lenda de um dos maiores espadachins da ficção e dos livros de aventura",
        preco: "R$ 35,00",
        imagem: LR06
    }
    
]

const AventuraData = [
    {
        id: 0,
        titulo: "O Portal do Dragão",
        descricao: "Descubra o destino de Bren e Mouse e os perigos que eles enfrentaram daqui a frente",
        preco: "R$ 70,00",
        imagem: LA01
    },
    {
        id: 1,
        titulo: "A Ilha Perdida",
        descricao: "Mergulhe em mais um dos clássicos da saga 'As Crônicas da Tulipa Negra'",
        preco: "R$ 60,00",
        imagem: LA02
    },
    {
        id: 2,
        titulo: "20.000 Léguas Submarinas",
        descricao: "Clássicos do Júlio",
        preco: "R$ 40,00",
        imagem: LA03
    },
    {
        id: 3,
        titulo: "As Crônicas de Spiderwick",
        descricao: "Mistério e aventura ",
        preco: "R$ 70,00",
        imagem: LA04
    },
    {
        id: 4,
        titulo: "Duna",
        descricao: "Aproite também as páginas de um dos grandes sucessos da atualidade",
        preco: "R$ 50,00",
        imagem: LA05
    },
    {
        id: 5,
        titulo: "As Crônicas de Nárnia",
        descricao: "Embarque nessa também e não espere por outra oportunidade de viver",
        preco: "R$ 60,00",
        imagem: LA06
    },
    {
        id: 7,
        titulo: "O Dragão de Gelo",
        descricao: "Viva a incrível história de uma menina e o dragão de gelo que se apresenta",
        preco: "R$ 40,00",
        imagem: LA07
    }


]