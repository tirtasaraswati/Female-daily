import React from "react";
import { Card, Row } from "antd";
import "../assets/styles/GlobalComponent/card.scss";

const CardBasic = ({ className, title, extra, content, bordered }) => {
  return (
    <Row>
      <Card
        className={className}
        title={title}
        extra={extra}
        bordered={bordered}
        style={{ margin: "8px 8px", width: "100%" }}
      >
        <div>{content}</div>
      </Card>
    </Row>
  );
};

export default CardBasic;
