import React from "react";
import Slider from "react-slick";
import { Carousel, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../assets/styles/GlobalComponent/carousel.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CustomCarousel = ({ content }) => {
  //   debugger;
  const NextArrows = (props) => {
    const { className, style, onClick } = props;
    return <RightOutlined className={"right-arrow"} onClick={onClick} />;
  };

  const PrevArrows = (props) => {
    const { className, style, onClick } = props;
    return <LeftOutlined className={"left-arrow"} onClick={onClick} />;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrows />,
    prevArrow: <PrevArrows />,
  };

  return (
    <Slider {...settings}>
      {content}
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
      <div>
        <h3>9</h3>
      </div> */}
    </Slider>
  );
};

export default CustomCarousel;
