import React from "react";
import { Menu } from "antd";
import options from "./options";
import "../../assets/styles/sidebar.scss";

export default function Sidebar() {
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
      <Menu className="menu" mode="horizontal" theme="light">
        {menus}
      </Menu>
    </div>
  );
}
