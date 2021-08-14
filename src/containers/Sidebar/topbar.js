import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/button";
import { Row, Col, Input } from "antd";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../../assets/images/female-daily-logo.png";
import "../../assets/styles/topbar.scss";

export default function Topbar() {
  const dispatch = useDispatch();
  //   const state = useSelector((state) => state.sidebar);

  return (
    <div className="topbar">
      <Row>
        <Col className="topbar-col" span={1}>
          <Button type="default" onClick={() => {}} value={<MenuOutlined />} />
        </Col>
        <Col className="topbar-col" span={3}>
          <img style={{ width: "100%" }} src={Logo} alt="Female daily" />
        </Col>
        <Col className="topbar-col" span={17}>
          <Input
            size="large"
            placeholder="Search products, article, topics, brands, etc"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col className="topbar-col" span={3}>
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
