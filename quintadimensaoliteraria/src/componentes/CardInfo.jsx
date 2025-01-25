import React from "react";



import '../styles/CardInfo.css';


function CardInfo({img, title, text, label}){
    return(
        <div className="card-info">
            <img src={img} alt="icon-card-info"/>
            <h1>{title}</h1>
            <p>{text}</p>
            <button>{label}</button>
        </div>
    );
}

export default CardInfo;