import React from "react";
import { Button } from "antd";
import "../assets/styles/GlobalComponent/button.scss";

const CustomButton = ({
  onClick,
  value,
  disabled = false,
  size = "large",
  type = "primary", //primary ghost dashed link text default
  label = value,
  shape,
  icon,
}) => {
  return (
    <div>
      {type === "primary" ? (
        <Button
          className="button-primary"
          size={size}
          disabled={disabled}
          type={type}
          shape={shape}
          value={value}
          icon={icon}
          onClick={onClick}
        >
          {label}
        </Button>
      ) : type === "default" ? (
        <Button
          className="button-secondary"
          size={size}
          disabled={disabled}
          type={type}
          shape={shape}
          value={value}
          icon={icon}
          onClick={onClick}
        >
          {label}
        </Button>
      ) : type === "link" ? (
        <Button
          className="button-link"
          size={size}
          disabled={disabled}
          type={type}
          shape={shape}
          value={value}
          icon={icon}
          onClick={onClick}
        >
          {label}
        </Button>
      ) : null}
    </div>
  );
};

export default CustomButton;
