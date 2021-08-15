import React from "react";
import { Card, Rate, Row, Col } from "antd";
import "../assets/styles/GlobalComponent/card.scss";

const CustomCard = ({ image, text, value, total, title, desc, info }) => {
  const img =
    "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png";
  return (
    <Row>
      <Col span={24}>
        <Card className="card">
          <img className="img-product" src={img} />
          <div className="card-text">Macth Skin Type</div>
          <div style={{ marginBottom: "8px" }}>
            <span className="rate-value">4.9</span>
            <Rate className="rate-star" disabled value={4.9} />
            <span className="rate-count">(7)</span>
          </div>
          <div>
            <h3 className="card-title">VAL BY VALERIE THOMAS</h3>
            <div style={{ fontWeight: 500 }}>Pure Pressed Blush</div>
            <div style={{ color: "#8f8f8f" }}>Neutral Rose</div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default CustomCard;
