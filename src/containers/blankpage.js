import React from "react";
import Sidebar from "../containers/Sidebar/sidebar";
import Topbar from "../containers/Sidebar/topbar";

export default function () {
  const options = [
    {
      key: "skincare",
      label: "SKINCARE",
    },
    {
      key: "makeup",
      label: "MAKE UP",
    },
    {
      key: "body",
      label: "BODY",
    },
    {
      key: "hair",
      label: "HAIR",
    },
    {
      key: "fragrance",
      label: "FRAGRANCE",
    },
    {
      key: "nail",
      label: "NAIL",
    },
    {
      key: "tools",
      label: "TOOLS",
    },
    {
      key: "brands",
      label: "BRANDS",
    },
  ];
  return (
    <div>
      <Topbar />
      <Sidebar options={options} />
    </div>
  );
}
