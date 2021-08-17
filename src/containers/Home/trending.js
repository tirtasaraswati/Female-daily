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
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const dataCard = [
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
  ];

  let dataSlider = dataCard.map((item) => {
    return (
      <div>
        <Card
          className="card"
          content={
            <div>
              <div className="margin">
                <img className="img-product" src={item.product.image} />
              </div>
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
                <div className="card-desc">{item.product.description}</div>
                <div className="card-detail">Info</div>
              </div>
            </div>
          }
        />
      </div>
    );
  });

  return <Slider {...settings}>{dataSlider}</Slider>;
}
