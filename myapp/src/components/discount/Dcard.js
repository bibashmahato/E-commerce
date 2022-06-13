import React from 'react';
import Ddata from "./Ddata";
import Slider from "react-slick";

function Dcard() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        marign: 200,
      };
  return (
    <>
    <div className="content">
        <Slider {...settings}>
            {Ddata.map((val,index) => {
                return(
                    <>
                   <div className="product" key={index}>
                   <div className="box">
                    <div className="img">
                        <img src={val.cover} alt="" width="100%" />
                    </div>
                    <h4>{val.name}</h4>
                    <span>{val.price}</span>
                   </div>
                   </div>
                   </>
                )
            })}
            </Slider>
    </div>
    </>
  )
}

export default Dcard;