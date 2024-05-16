import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  link,
  disabled,
  variant = "primary",
  classCss,
  loading,
  ...restProps
}) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "btn-primary";
      break;
  }
  if (link) {
    return (
      <Link to={link} className={`${variantClass}`} {...restProps}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`${variantClass} ${classCss} h-7 py-4`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
