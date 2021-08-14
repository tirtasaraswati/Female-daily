import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Menu, Button } from "antd";
import options from "./options";
import "../../assets/styles/sidebar.scss";
// import { MenuOutlined } from "@ant-design/icons";

export default function Sidebar() {
  const dispatch = useDispatch();
  //   const state = useSelector((state) => state.sidebar);
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  //List menu
  const menus = options.map((singleOption) => {
    return (
      <Menu.Item key={singleOption.key} icon={singleOption.icon}>
        {singleOption.label}
      </Menu.Item>
    );
  });

  return (
    <div className="menuWrapper">
      {/* <Button type="default" onClick={toggleCollapsed}>
            {React.createElement(collapsed ? MenuOutlined : MenuOutlined)}
          </Button> */}
      <Menu className="menu" mode="horizontal" theme="light">
        {menus}
      </Menu>
    </div>
  );
}
