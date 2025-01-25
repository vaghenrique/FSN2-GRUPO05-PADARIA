import React from "react";
import '../styles/Footer.css';

function Footer({title, text, Data}){
    return(
        <footer className="Footer">
            <h1>{title}</h1>
            <p> &#10077; {text} &#10078;</p>
            <span>
                {Data.map((d) => (
                    <img key={d.id} src={d.img} alt={d.alt}/>
                ))}
            </span>
        </footer>
    );
}

export default Footer;