import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
  let history = useHistory();

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },

      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const handleClick = () => {
    history.push("/");
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
                <div className="card-desc">{item.product.desc}</div>
              </Col>
            </Row>
          }
          content={
            <div>
              <div>
                <Rate className="rate-star" disabled value={item.star} />
                <span className="card-info">2 hours</span>
              </div>
              <div className="card-desc">
                {item.comment}...
                <span className="pink" onClick={handleClick}>
                  {" "}
                  Read more
                </span>
              </div>
            </div>
          }
        />
        <div className="profile-bottomCenter">
          <Avatar size={55} icon={<UserOutlined />} />
          <div>
            <div className="card-desc">{item.user}</div>
            <div className="card-detail">{item.profile}</div>
          </div>
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{dataSlider}</Slider>;
}
