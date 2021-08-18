import React from "react";
import { Layout } from "antd";
import Topbar from "./Sidebar/topbar";
import Sidebar from "./Sidebar/sidebar";
import FooterBar from "./Sidebar/footer";
import Banner from "./Sidebar/banner";
import Routes from "../router";
import { DashboardContainer, DashboardGlobalStyles } from "./dashboard.styles";

export default function Dashboard() {
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

        <Footer>
          <FooterBar />
        </Footer>
      </Layout>
    </DashboardContainer>
  );
}
