import React from "react";
import '../styles/BotaoSec.css';

function BotaoSec({label}){
    return(
        <button className="BotaoSecundario">{label}</button>
    );
}

export default BotaoSec;