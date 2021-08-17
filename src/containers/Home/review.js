import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Rate, Avatar } from "antd";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
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
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  let dataSlider = state.listReview.map((item) => {
    return (
      <div>
        <Card
          title={
            <Row>
              <Col span={6}>
                <img className="img-product-small" src={item.product.image} />
              </Col>
              <Col span={2}>
                <h3 className="card-title">{item.product.name}</h3>
                <div>{item.product.desc}</div>
              </Col>
            </Row>
          }
          content={
            <div>
              <div>
                <Rate className="rate-star" disabled value={item.star} />
                <span style={{ color: "#8f8f8f" }}>2 hours</span>
              </div>
              <div>{item.comment}</div>
            </div>
          }
        />
        <div className="profile-bottomCenter">
          <Avatar size={55} icon={<UserOutlined />} />
          <div>
            <div style={{ fontWeight: 700 }}>{item.user}</div>
            <div style={{ fontSize: "12px", color: "#808080" }}>
              {item.profile}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{dataSlider}</Slider>;
}
