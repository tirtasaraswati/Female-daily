import styled, { createGlobalStyle } from "styled-components";
// import { palette } from "styled-theme";

export const DashboardGlobalStyles = createGlobalStyle`

`;

export const DashboardContainer = styled.div`
  .ant-layout-header {
    height: 20%;
    color: rgb(255 255 255);
    background: #fff;
    line-height: unset;
    padding: 12px 5px;
  }

  .ant-layout-content {
    flex: auto;
    min-height: 0;
    height: 60%;
    background: #fff;
  }

  .ant-layout-footer {
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    background: #fff;
    border-top: 1px solid #cecece;
  }
  ${
    "" /* button {
    border-radius: 0;
  } */
  };
`;
