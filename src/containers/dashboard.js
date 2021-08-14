import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import Topbar from "./Sidebar/topbar";
import Sidebar from "./Sidebar/sidebar";
import FooterBar from "./Sidebar/footer";
import Banner from "./Sidebar/banner";
import Routes from "../router";
import { DashboardContainer, DashboardGlobalStyles } from "./dashboard.styles";

export default function Dashboard() {
  const dispatch = useDispatch();
  //   const state = useSelector((state) => state.sidebar);
  const { Header, Content, Footer } = Layout;

  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout>
        <Header>
          <Topbar />
        </Header>

        <Content>
          <Sidebar />
          <Banner />
          <Routes />
        </Content>

        {/* <Layout> */}
        <Footer>
          <FooterBar />
        </Footer>
        {/* </Layout> */}
      </Layout>
    </DashboardContainer>
  );
}
