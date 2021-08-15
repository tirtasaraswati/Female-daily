import React from "react";
import { Card, Rate, Row } from "antd";
import "../assets/styles/GlobalComponent/card.scss";

const CustomCard = ({ data }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Row>
        {data.map((item) => (
          <div style={{ margin: "0 5px" }}>
            <Card className="card">
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
            </Card>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default CustomCard;
