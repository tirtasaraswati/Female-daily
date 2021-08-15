import React from "react";
import { Row, Col } from "antd";
import "../assets/styles/GlobalComponent/card.scss";

const Articles = ({ data }) => {
  return (
    <Row>
      {data.map((item) => (
        <Col span={8}>
          <div style={{ margin: "20px 20px" }}>
            <div className="frame-articles">
              <img className="img-article" src={item.image} />
            </div>
            <div>
              <h2 className="card-title">{item.title}</h2>
              <div
                style={{ color: "#626262", fontWeight: 500, marginTop: "5px" }}
              >
                {item.username} |{" "}
                <span style={{ color: "#b2b2b2" }}>{item.publish}</span>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Articles;
