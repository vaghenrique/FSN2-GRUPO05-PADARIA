import React from "react";
import Hero from "../componentes/Hero";
import '../styles/Home.css';

function Home(){
    return(
        <Hero 
            titulo="5ª Geração literária"
            texto="Aqui seus sonhos tomam forma, suas viajens e jornadas se prolongam e tudo mais que conseguir imaginar!"
        />
    );
}

export default Home;