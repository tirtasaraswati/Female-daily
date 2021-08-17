import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col, Rate, Avatar } from "antd";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import Button from "../../components/button";
import Card from "../../components/card";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../assets/styles/home.scss";
// import "../../assets/styles/GlobalComponent/carousel.scss";

export default function () {
  let dispatch = useDispatch();
  // let state = useSelector((state) => state.Home);
  let history = useHistory();

  const dataCard = [
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
  ];

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  let dataSlider = dataCard.map((item) => {
    return (
      <div>
        {/* <Col span={4}> */}
        <Card
          className="card"
          content={
            <div>
              <img className="img-product" src={item.image} />
              <div className="card-text">{item.title}</div>
              <div style={{ marginBottom: "8px" }}>
                <span className="rate-value">{item.value}</span>
                <Rate className="rate-star" disabled value={item.value} />
                <span className="rate-count">({item.total})</span>
              </div>
              <div>
                <h3 className="card-title">{item.name}</h3>
                <div style={{ fontWeight: 500 }}>{item.desc}</div>
                <div style={{ color: "#8f8f8f" }}>{item.info}</div>
              </div>
            </div>
          }
        />
        {/* </Col> */}
      </div>
    );
  });

  return <Slider {...settings}>{dataSlider}</Slider>;
}
