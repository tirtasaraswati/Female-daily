import React from "react";
import { Card } from "antd";
import "../assets/styles/GlobalComponent/card.scss";

const CardBasic = ({ className, title, extra, content, bordered }) => {
  return (
    <div style={{ margin: "7px" }}>
      <Card
        className={className}
        title={title}
        extra={extra}
        bordered={bordered}
        style={{ margin: "8px 8px", width: "100%" }}
      >
        <div>{content}</div>
      </Card>
    </div>
  );
};

export default CardBasic;
