import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Rate } from "antd";
import Slider from "react-slick";
import Card from "../../components/card";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../assets/styles/home.scss";
// import "../../assets/styles/GlobalComponent/carousel.scss";

export default function () {
  let state = useSelector((state) => state.Home);

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  let dataSlider = state.listEditor.map((item) => {
    return (
      <div>
        <Card
          className="card"
          content={
            <div>
              <img className="img-product" src={item.product.image} />
              <div className="card-text">{item.title}</div>
              <div style={{ marginBottom: "8px" }}>
                <span className="rate-value">{item.product.rating}</span>
                <Rate
                  className="rate-star"
                  disabled
                  value={item.product.rating}
                />
                <span className="rate-count">(3)</span>
              </div>
              <div>
                <h3 className="card-title">{item.product.name}</h3>
                <div style={{ fontWeight: 500 }}>
                  {item.product.description}
                </div>
                <div style={{ color: "#8f8f8f" }}>Info</div>
              </div>
            </div>
          }
        />
      </div>
    );
  });

  return <Slider {...settings}>{dataSlider}</Slider>;
}
