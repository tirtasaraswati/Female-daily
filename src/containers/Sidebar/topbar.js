import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Input } from "antd";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import Logo from "../../assets/images/female-daily-logo.png";
import "../../assets/styles/topbar.scss";

export default function Topbar() {
  const state = useSelector((state) => state.Home);

  return (
    <div className="topbar">
      <Row>
        <Col className="topbar-col" xs={0} sm={0} md={0} lg={1} xl={1}>
          <div style={{ textAlign: "center" }}>
            <Button
              type="default"
              onClick={() => {}}
              value={<MenuOutlined />}
            />
          </div>
        </Col>
        <Col className="topbar-col" xs={3} sm={3} md={2} lg={2} xl={2}>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%", maxHeight: "50px" }}
              src={Logo}
              alt="Female daily"
            />
          </div>
        </Col>
        <Col className="topbar-col" xs={12} sm={12} md={18} lg={18} xl={18}>
          <Input
            size="large"
            placeholder="Search products, article, topics, brands, etc"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col className="topbar-col" xs={3} sm={3} md={3} lg={3} xl={3}>
          <Button
            type="primary"
            size="large"
            onClick={() => {}}
            icon={<UserOutlined />}
            value={"LOGIN/SIGNUP"}
          />
        </Col>
      </Row>
    </div>
  );
}
