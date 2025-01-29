import React from "react";
// import { ReceberId } from "../context/getId";
import { useDispatch, useSelector } from "react-redux";


function OtherPage(){
    const valor = useSelector((state) => state.id.valor);
    const dispatch = useDispatch();

    return(
        <div>Outher page {valor}</div>
    );
}

export default OtherPage;