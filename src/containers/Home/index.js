import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col, Rate, Avatar } from "antd";
import {
  TeamOutlined,
  BarsOutlined,
  CommentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Button from "../../components/button";
import Card from "../../components/card";
import Review from "./review";
import Trending from "./trending";
import Poster from "../../assets/images/poster.jpg";
import Brands from "../../assets/images/top-brands.jpg";
import Profile from "../../assets/images/profile-user.png";
import "../../assets/styles/home.scss";

import allFunctionHome from "../../redux/Home/action";

const { getData } = allFunctionHome;

export default function () {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.Home);
  let history = useHistory();

  useEffect(() => {
    dispatch(getData());
  }, []);

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

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="homeWrapper">
      <div className="mt-50">
        <Row>
          <Col span={24}>
            <div style={{ marginBottom: "15px" }}>
              <h1 className="title">Editor's Choice</h1>
              <h3 className="sub-title">Curated with love</h3>
            </div>
          </Col>
        </Row>
        <Row>
          {state.listEditor.map((item) => (
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Row>
                <div className="profile-topLeft">
                  <Avatar
                    size={{ xs: 40, sm: 40, md: 55, lg: 55, xl: 60, xxl: 80 }}
                    icon={<UserOutlined />}
                  />
                  <div style={{ marginLeft: "15px" }}>
                    <div className="title-small">{item.editor}</div>
                    <div className="info">{item.role}</div>
                  </div>
                </div>
              </Row>
              <Card
                className="card"
                content={
                  <div>
                    <div className="margin">
                      <img className="img-product" src={item.product.image} />
                    </div>
                    <div style={{ marginBottom: "8px" }}>
                      <span className="rate-value">{item.product.rating}</span>
                      <Rate
                        className="rate-star"
                        disabled
                        value={item.product.rating}
                      />
                      <span className="rate-count">(3)</span>
                    </div>
                    <div>
                      <h3 className="card-title">{item.product.name}</h3>
                      <div className="card-desc">
                        {item.product.description}
                      </div>
                      <div className="card-detail">Info</div>
                    </div>
                  </div>
                }
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className="pink-banner mt-50">
        <Row gutter={{ xs: 16, sm: 2, md: 8 }}>
          <Col xs={0} sm={0} md={10} lg={0} xl={5}>
            <img className="img-poster" src={Poster} />
          </Col>
          <Col
            xs={20}
            sm={20}
            md={12}
            lg={4}
            xl={5}
            style={{ margin: "0 25px" }}
          >
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
          {dataCard.map((item) => (
            <Col xs={20} sm={12} md={8} lg={6} xl={4}>
              <Card
                className="card"
                content={
                  <div>
                    <div className="margin">
                      <img className="img-product" src={item.image} />
                    </div>
                    <div className="card-title-pink">{item.title}</div>
                    <div style={{ marginBottom: "8px" }}>
                      <span className="rate-value">{item.value}</span>
                      <Rate className="rate-star" disabled value={item.value} />
                      <span className="rate-count">({item.total})</span>
                    </div>
                    <div>
                      <h3 className="card-title">{item.name}</h3>
                      <div className="card-desc">{item.desc}</div>
                      <div className="card-detail">{item.info}</div>
                    </div>
                  </div>
                }
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className="banner-horizontal mt-50">
        <h1>Horizontal 970x250 (Internal Campaign Only)</h1>
      </div>
      <div>
        <Row>
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
        <Row>
          {state.listArticles.map((item) => (
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Card
                className="card-article "
                bordered={false}
                content={
                  <div>
                    <div className="frame-articles">
                      <img className="img-article" src={item.image} />
                    </div>
                    <div>
                      <div
                        className="card-title"
                        type="button"
                        onClick={handleClick}
                      >
                        {item.title}
                      </div>
                      <div className="card-desc">
                        {item.author} |{" "}
                        <span className="card-detail">{item.published_at}</span>
                      </div>
                    </div>
                  </div>
                }
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className="mt-50">
        <Row>
          <Col span={14}>
            <div style={{ marginBottom: "15px" }}>
              <h1 className="title">Latest Reviews</h1>
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
        <Row>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <Review />
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div className="banner-mr">
              <h1>MR 2 300x250</h1>
            </div>
          </Col>
        </Row>
      </div>

      <div className="mt-50">
        <Row>
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
        <Row>
          {dataCard.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                className="card-shadow"
                content={
                  <div>
                    <div style={{ textAlign: "center" }}>
                      <img className="img-profile" src={Profile} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        className="card-title"
                        type="button"
                        onClick={handleClick}
                      >
                        {item.name}
                      </div>
                    </div>
                    <div className="icon">
                      <TeamOutlined className="icon-list" />
                      <span>{item.totalMember}</span>
                      <BarsOutlined className="icon-list" />
                      <span>{item.totalContent}</span>
                      <CommentOutlined className="icon-list" />
                      <span>{item.comment}</span>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div className="card-desc">{item.desc}</div>
                    </div>
                  </div>
                }
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className="mt-50 height-xl">
        <Row>
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
        <Row className="height-l">
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <iframe
              width="98%"
              height="100%"
              src="https://www.youtube.com/embed/hm8tJXPog8I"
            />
          </Col>

          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <iframe
              width="98%"
              height="50%"
              src="https://www.youtube.com/embed/m8r_68vSkNU"
            />

            <iframe
              width="98%"
              height="50%"
              src="https://www.youtube.com/embed/im4wR5t2Yyg"
            />
          </Col>
        </Row>
      </div>

      <div className="mt-50">
        <Row>
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
        <Row>
          <Col span={24}>
            <Trending />
          </Col>
        </Row>
      </div>

      <div className="mt-50">
        <Row>
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
        <Row>
          <Col span={24}>
            <div>
              <img src={Brands} width="100%" />
            </div>
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
      <Row>
        <Col>{/* <Review /> */}</Col>
      </Row>
    </div>
  );
}
