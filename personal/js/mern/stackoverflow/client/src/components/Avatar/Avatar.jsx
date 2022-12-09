import React from "react";

const Avatar = ({
  user,
  props,
  backgroundColor,
  padding,
  color,
  cursor,
  borderRadius,
  fontSize,
  textAlign,
  px,
  py,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
  };
  console.log("props",props)
  return <div style={style}>{props}</div>;
};

export default Avatar;
