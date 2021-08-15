import React from "react";
import { Card, Rate, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../assets/styles/GlobalComponent/card.scss";

const CardProfile = ({
  editor,
  role,
  image,
  value,
  total,
  name,
  desc,
  info,
}) => {
  const img =
    "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png";
  return (
    <div id="card-profile">
      <Row className="row-profile">
        <Col span={6}>
          <Avatar size={55} icon={<UserOutlined />} />
        </Col>
        <Col span={18}>
          <div style={{ marginLeft: "15px" }}>
            <div style={{ fontWeight: 700 }}>{editor}</div>
            <div style={{ fontSize: "12px", color: "#808080" }}>{role}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card className="card">
            <img className="img-product" src={image} />
            <div style={{ marginBottom: "8px" }}>
              <span className="rate-value">{value}</span>
              <Rate className="rate-star" disabled value={value} />
              <span className="rate-count">({total})</span>
            </div>
            <div>
              <h3 className="card-title">{name}</h3>
              <div style={{ fontWeight: 500 }}>{desc}</div>
              <div style={{ color: "#808080" }}>{info}</div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardProfile;
