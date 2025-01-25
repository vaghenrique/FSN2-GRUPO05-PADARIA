import React from "react";
import '../styles/titulo.css';


function Titulo({text}){
    return(
        <h1 className="title">{text}</h1>
    );
}

export default Titulo;