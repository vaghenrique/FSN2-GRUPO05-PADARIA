import React from "react";
import Titulo from "./titulo";
import '../styles/CardComent.css'

function CardComent({nome, comentario}){
    return(
        <div className="CardComent">
            <span>&#10077;</span>

            <span>&#10078;</span>

            <Titulo text={nome}/>
            <p>{comentario}</p>
            <hr/>
            <br/>
        </div>
    );
}

export default CardComent;