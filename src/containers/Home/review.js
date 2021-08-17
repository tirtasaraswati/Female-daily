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
  ];

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  let dataSlider = dataCard.map((item) => {
    return (
      <div>
        <Card
          title={
            <Row>
              <Col span={6}>
                <img
                  className="img-product-small"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </Col>
              <Col span={2}>
                <h3 className="card-title">{item.name}</h3>
                <div>{item.desc}</div>
              </Col>
            </Row>
          }
          content={
            <div>
              <div>
                <Rate className="rate-star" disabled value={item.value} />
                <span style={{ color: "#8f8f8f" }}>2 hours</span>
              </div>
              <div>
                Suka pake produk ini lalalalallalalalala Suka pake produk ini
                lalalalallalalalalaSuka pake produk ini lalalalallalalalalaSuka
                pake produk ini lalalalallalalalala
              </div>
            </div>
          }
        />
        <div className="profile-bottomCenter">
          <Avatar size={55} icon={<UserOutlined />} />
          <div>
            <div style={{ fontWeight: 700 }}>{item.editor}</div>
            <div style={{ fontSize: "12px", color: "#808080" }}>
              {item.role}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{dataSlider}</Slider>;
}
