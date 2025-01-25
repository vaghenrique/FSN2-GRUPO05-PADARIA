import React from "react";
import '../styles/Direitos.css'

function Direitos({empresa}){
    return(
        <div className="Direitos">
            <p>&copy; {empresa}</p>
        </div>
    );
}

export default Direitos;