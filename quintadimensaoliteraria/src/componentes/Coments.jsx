import React from "react";
import CardComent from "./CardComent";
import Titulo from "./titulo";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";   
import '../styles/Carroussel.css';


import '../styles/Coments.css';


function Coments({Data}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        adaptiveHeight: true,
        // cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return(
        
        
        <div className="slider-coments">
            <br/><br/><br/>
            <Titulo text="Comentários"/>
            <hr className="hrR"/>
            <Slider {...settings}>
                {Data.map((d) => (
                    <CardComent
                        key={d.id}
                        nome={d.nome}
                        comentario = {d.coment}
                    />
                ))}
            </Slider>
        </div>

    );
}

export default Coments;