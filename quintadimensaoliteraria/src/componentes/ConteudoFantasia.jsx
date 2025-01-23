import React from "react";
import CardPromo from "./CardPromo";

import L01 from '../assets/img/L01.png';
import L02 from '../assets/img/L02.png';
import L03 from '../assets/img/L03.png';
import L04 from '../assets/img/L04.png';
import L05 from '../assets/img/L05.png';
import L06 from '../assets/img/L06.png';

import '../styles/Carroussel.css';

function ConteudoFantasia(){
    return(
        <div className="Carroussel">
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
                    descricao="E a Pedra Filosofal, o início de uma das sagas sagas mais aplaudidas"
                    preco="R$ 20,00"
                    imagem={L03}
                />
                <CardPromo 
                    titulo="Harry Potter"
                    descricao="E a câmara secreta. Quais os perigos que aguardam Harry para o segundo ano letivo?"
                    preco="R$ 25,00"
                    imagem={L04}
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
    );
}

export default ConteudoFantasia;