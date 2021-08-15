import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import Card from "../../components/card";
import CardProfile from "../../components/cardProfile";
import Button from "../../components/button";
import Articles from "../../components/cardArticle";
import Poster from "../../assets/images/poster.jpg";
import "../../assets/styles/home.scss";

export default function () {
  let dispatch = useDispatch();
  // let state = useSelector((state) => state.Home);
  let history = useHistory();

  const dataCard = [
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      title: "Match Skin Type",
      value: 4.9,
      total: 7,
      name: "Y.O.U Lip Cream",
      desc: "Lip cream",
      info: "Neutral Rose",
      editor: "Andien",
      role: "Senior Editor",
    },
  ];

  const dataArticles = [
    {
      image:
        "https://editorial.femaledaily.com/wp-content/uploads/2017/09/Teknik-Contouring-yang-Salah.png",
      title: "9 Best Oils for Sensitive Skin",
      username: "Username",
      publish: "2 hours ago",
    },
    {
      image:
        "https://editorial.femaledaily.com/wp-content/uploads/2017/09/Teknik-Contouring-yang-Salah.png",
      title: "6 Color Pallete Trends to Look Out for in 2018",
      username: "Username",
      publish: "2 hours ago",
    },
    {
      image:
        "https://editorial.femaledaily.com/wp-content/uploads/2017/09/Teknik-Contouring-yang-Salah.png",
      title:
        "Top Beauty Buys to Be On the Lookout for in 2918, According to Beauty Pros",
      username: "Username",
      publish: "2 hours ago",
    },
    {
      image:
        "https://editorial.femaledaily.com/wp-content/uploads/2017/09/Teknik-Contouring-yang-Salah.png",
      title: "9 Best Oils for Sensitive Skin",
      username: "Username",
      publish: "2 hours ago",
    },
    {
      image:
        "https://editorial.femaledaily.com/wp-content/uploads/2017/09/Teknik-Contouring-yang-Salah.png",
      title: "6 Color Pallete Trends to Look Out for in 2018",
      username: "Username",
      publish: "2 hours ago",
    },
    {
      image:
        "https://editorial.femaledaily.com/wp-content/uploads/2017/09/Teknik-Contouring-yang-Salah.png",
      title:
        "Top Beauty Buys to Be On the Lookout for in 2918, According to Beauty Pros",
      username: "Username",
      publish: "2 hours ago",
    },
  ];
  return (
    <div className="homeWrapper">
      <Row className="mr20">
        <Col span={24}>
          <div style={{ marginBottom: "15px" }}>
            <h1 className="title">Editor's Choice</h1>
            <h3 className="sub-title">Curated with love</h3>
          </div>
        </Col>
        <Col span={24}>
          <CardProfile data={dataCard} />
        </Col>
      </Row>
      <div className="pink-banner">
        <Row className="mr20">
          <img className="img-poster" src={Poster} />
          <Col span={5} style={{ marginRight: "10px" }}>
            <h1 className="banner-title">
              Looking for products that are just simply perfect for you?
            </h1>
            <div className="banner-desc">
              Here are some products that we believe match your skin, hair, and
              body! Have we mentioned that they solve your concerns too?
            </div>
            <div className="custom-button">
              <Button
                type="primary"
                size="large"
                onClick={() => {}}
                value={"See My Matches"}
              />
            </div>
          </Col>
          <Col span={12}>
            <Card data={dataCard} />
          </Col>
        </Row>
      </div>
      <div className="banner-horizontal">
        <h1>Horizontal 970x250 (Internal Campaign Only)</h1>
      </div>
      <div>
        <Row className="mr20">
          <Col span={22}>
            <div style={{ marginBottom: "15px" }}>
              <h1 className="title">Latest Articles</h1>
              <h3 className="sub-title">
                So you can make better purchase decision
              </h3>
            </div>
          </Col>
          <Col span={2}>
            <Button
              type="link"
              size="large"
              onClick={() => {}}
              value={"See More >"}
            />
          </Col>
        </Row>
        <Row className="mr20">
          <Col span={24}>
            <Articles data={dataArticles} />
          </Col>
        </Row>
      </div>

      <div>
        <Row className="mr20">
          <Col span={14}>
            <div style={{ marginBottom: "15px" }}>
              <h1 className="title">Latest Reviews</h1>
              <h3 className="sub-title">
                So you can make better purchase decision
              </h3>
            </div>
            <div>Component Review</div>
          </Col>
          <Col span={2}>
            <Button
              type="link"
              size="large"
              onClick={() => {}}
              value={"See More >"}
            />
          </Col>
          <Col span={5} offset={2}>
            <div className="banner-mr">
              <h1>MR 2 300x250</h1>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row className="mr20">
          <Col span={22}>
            <div style={{ marginBottom: "15px" }}>
              <h1 className="title">Popular Groups</h1>
              <h3 className="sub-title">Where the beauty TALK are</h3>
            </div>
          </Col>
          <Col span={2}>
            <Button
              type="link"
              size="large"
              onClick={() => {}}
              value={"See More >"}
            />
          </Col>
        </Row>
        <Row className="mr20">
          <Col span={24}>Component Popular Groups</Col>
        </Row>
      </div>

      <div>
        <Row className="mr20">
          <Col span={22}>
            <div style={{ marginBottom: "15px" }}>
              <h1 className="title">Latest Videos</h1>
              <h3 className="sub-title">Watch and learn, ladies</h3>
            </div>
          </Col>
          <Col span={2}>
            <Button
              type="link"
              size="large"
              onClick={() => {}}
              value={"See More >"}
            />
          </Col>
        </Row>
        <Row className="mr20">
          <Col span={16}>Big Videos 1</Col>
          <Col span={8}>
            <div>Small videos 2</div>
            <div>Small videos 3</div>
          </Col>
        </Row>
      </div>

      <div>
        <Row className="mr20">
          <Col span={22}>
            <div style={{ marginBottom: "15px" }}>
              <h1 className="title">Trending This Week</h1>
              <h3 className="sub-title">
                See our weekly most reviewed products
              </h3>
            </div>
          </Col>
          <Col span={2}>
            <Button
              type="link"
              size="large"
              onClick={() => {}}
              value={"See More >"}
            />
          </Col>
        </Row>
        <Row className="mr20">
          <Col span={24}>
            <Card data={dataCard} />
          </Col>
        </Row>
      </div>

      <div>
        <Row className="mr20">
          <Col span={22}>
            <div style={{ marginBottom: "15px" }}>
              <h1 className="title">Top Brands</h1>
              <h3 className="sub-title">We all know and love</h3>
            </div>
          </Col>
          <Col span={2}>
            <Button
              type="link"
              size="large"
              onClick={() => {}}
              value={"See More >"}
            />
          </Col>
        </Row>
        <Row className="mr20">
          <Col span={24}>
            <div>Image Brands</div>
            <h1>
              Female Daily - Find everything you want to know about beauty on
              Female Daily
            </h1>
            <p>
              Product Reviews, Tips & Tricks, Expert and Consumer Opinions,
              Beauty Tutorials, Discussions, Beauty Workshop, anything! We are
              here to be your friendly solution to all things beauty, inside and
              out!
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
