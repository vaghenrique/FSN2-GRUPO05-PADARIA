import React from "react";
import '../styles/LinkA.css';

function LinkA({Href, text, cor}){
    return(
        <a className="LinkA" style={{color: cor === "claro" ? "#000" : "#fff"}} href={Href} >{text} <hr style={{backgroundColor: cor === "claro" ? "#000" : "#fff"}}/></a>
    );
}

export default LinkA;
