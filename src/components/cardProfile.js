import React from "react";
import { Card, Rate, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../assets/styles/GlobalComponent/card.scss";

const CardProfile = ({ data }) => {
  return (
    <Row>
      {data.map((item) => (
        <div style={{ margin: "0 5px" }}>
          <Row className="row-profile">
            <Col span={6}>
              <Avatar size={55} icon={<UserOutlined />} />
            </Col>
            <Col span={18}>
              <div style={{ marginLeft: "15px" }}>
                <div style={{ fontWeight: 700 }}>{item.editor}</div>
                <div style={{ fontSize: "12px", color: "#808080" }}>
                  {item.role}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card className="card">
                <img className="img-product" src={item.image} />
                <div style={{ marginBottom: "8px" }}>
                  <span className="rate-value">{item.value}</span>
                  <Rate className="rate-star" disabled value={item.value} />
                  <span className="rate-count">({item.total})</span>
                </div>
                <div>
                  <h3 className="card-title">{item.name}</h3>
                  <div style={{ fontWeight: 500 }}>{item.desc}</div>
                  <div style={{ color: "#808080" }}>{item.info}</div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      ))}
    </Row>
  );
};

export default CardProfile;
