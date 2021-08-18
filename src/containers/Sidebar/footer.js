import React from "react";
import { Row, Col } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import Google from "../../assets/images/google-play.png";
import Apple from "../../assets/images/app-store.png";
import Logo from "../../assets/images/female-daily-logo.png";
import Sosmed from "../../assets/images/Sosmed.png";
import "../../assets/styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col xs={12} sm={6} md={6} lg={5} xl={5}>
          <Button
            className="button-link"
            type="link"
            onClick={() => {}}
            value={"About Us"}
          />
          <Button
            className="button-link"
            type="link"
            onClick={() => {}}
            value={"Feedback"}
          />
          <Button
            className="button-link"
            type="link"
            onClick={() => {}}
            value={"Contact"}
          />
        </Col>
        <Col xs={12} sm={7} md={7} lg={5} xl={5}>
          <Button
            className="button-link"
            type="link"
            onClick={() => {}}
            value={"Term & Conditions"}
          />
          <Button
            className="button-link"
            type="link"
            onClick={() => {}}
            value={"Privacy Policy"}
          />
          <Button
            className="button-link"
            type="link"
            onClick={() => {}}
            value={"Help"}
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={5} xl={5}>
          <Button
            className="button-link"
            type="link"
            onClick={() => {}}
            value={"Award"}
          />
          <Button
            className="button-link"
            type="link"
            onClick={() => {}}
            value={"Newsletter"}
          />
        </Col>
        <Col xs={24} sm={4} md={4} lg={9} xl={9}>
          <div>
            <h3 style={{ fontWeight: "bold" }}>Download our mobile App</h3>
          </div>
          <div>
            <img alt="" className="img-download" src={Apple} />
            <img alt="" className="img-download" src={Google} />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col xs={20} sm={19} md={19} lg={18} xl={16}>
          <img alt="" style={{ width: "20%" }} src={Logo} />
          <div className="footer-text">
            Copyright <CopyrightOutlined /> 2015-2017 Female Daily Network{" "}
            <span> . </span> All rights reserved
          </div>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <div style={{ textAlign: "center" }}>
            <img alt="" style={{ width: "100%" }} src={Sosmed} />
          </div>
        </Col>
      </Row>
      <div className="bottom-frame">
        <h1>Bottom Frame 970x50, 468x60, 320x50</h1>
      </div>
    </div>
  );
}
