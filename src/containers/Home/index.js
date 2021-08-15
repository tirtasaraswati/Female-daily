import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import Card from "../../components/card";
import CardProfile from "../../components/cardProfile";
import "../../assets/styles/home.scss";

export default function () {
  let dispatch = useDispatch();
  // let state = useSelector((state) => state.Home);
  let history = useHistory();
  const img =
    "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png";
  return (
    <div className="homeWrapper">
      <Row>
        <Col span={24}>
          <div style={{ marginBottom: "15px" }}>
            <h1 className="title">Editor's Choice</h1>
            <h3 className="sub-title">Curated with love</h3>
          </div>
        </Col>
        <Col span={4}>
          <CardProfile
            editor={"Andien"}
            role={"Senior Editor"}
            image={img}
            value={4.9}
            total={7}
            name={"Make Up"}
            desc={"Brush make up"}
          />
        </Col>
        {/* <Col span={4}>
          <Card />
        </Col> */}
      </Row>
    </div>
  );
}
