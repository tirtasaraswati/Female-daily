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
        <Col span={5}>
          <Button type="link" onClick={() => {}} value={"About Us"} />
          <Button type="link" onClick={() => {}} value={"Feedback"} />
          <Button type="link" onClick={() => {}} value={"Contact"} />
        </Col>
        <Col span={5}>
          <Button type="link" onClick={() => {}} value={"Term & Conditions"} />
          <Button type="link" onClick={() => {}} value={"Privacy Policy"} />
          <Button type="link" onClick={() => {}} value={"Help"} />
        </Col>
        <Col span={5}>
          <Button type="link" onClick={() => {}} value={"Award"} />
          <Button type="link" onClick={() => {}} value={"Newsletter"} />
        </Col>
        <Col span={9}>
          <div>
            <h3 style={{ fontWeight: "bold" }}>Download our mobile App</h3>
          </div>
          <div>
            <img
              style={{ width: "30%", height: "54px", margin: "5px 10px 5px 0" }}
              src={Apple}
            />
            <img
              style={{ width: "30%", height: "55px", margin: "5px 10px" }}
              src={Google}
            />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col span={15}>
          <img style={{ width: "20%" }} src={Logo} />
          <div className="footer-text">
            Copyright <CopyrightOutlined /> 2015-2017 Female Daily Network{" "}
            <span> . </span> All rights reserved
          </div>
        </Col>
        <Col span={9}>
          <div>
            <img style={{ width: "40%" }} src={Sosmed} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
