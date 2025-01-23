import React, {useRef} from "react";
import '../styles/Carroussel.css';

function Carroussel({titulo, conteudo}){
    const livros = document.querySelectorAll(".card");
    var index = 0
    const max = livros.length;

    function MoveToLivro(isRight){
        

        if (isRight){
            index ++;
        } else{
            index --;
        }

        if(index >= max-1){
            index = 0;
        }
        if (index <= 0){
            index = max-1;
        }
        
        // const RefLivro = useRef(livros[index]);

        // RefLivro.current.scrollIntoView({
        //     behavior: "smooth",
        //     inline: "end",
        //     block: "nearest"
        // })
    }

    return(
        <div>
            <h1 className="titulo">{titulo}</h1>
            <section className="Carroussel-Conteiner">

                <button className="control left" onClick={() => MoveToLivro(false)}> &#10092; </button>
                
                {conteudo}
                

                <button className="control" onClick={() => MoveToLivro(true)}> &#10093; </button>
            </section>
        </div>
    );
}

export default Carroussel;