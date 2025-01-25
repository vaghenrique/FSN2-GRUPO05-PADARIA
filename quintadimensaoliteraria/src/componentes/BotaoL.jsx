import React from "react";
import '../styles/BotaoL.css';

function BotaoL({label, click}){
    return(
        <button onClick={click} className="buttonLogin">{label}</button>
    );
}

export default BotaoL;