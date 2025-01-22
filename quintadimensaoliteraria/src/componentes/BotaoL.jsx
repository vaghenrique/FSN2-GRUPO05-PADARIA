import React from "react";
import '../styles/BotaoL.css';

function BotaoL({label}){
    return(
        <button className="buttonLogin">{label}</button>
    );
}

export default BotaoL;