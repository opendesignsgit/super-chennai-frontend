import React from "react";
import "./TextStyle.css";
const AutoShrinkText = ({
  text,
  baseSize = 60,
  minSize = 18,
  maxChars = 40,
  className = "",
  maxLines = 2,
  width = "100%",
  align = "center",
}) => {
  const length = text?.length || 0;

  const ratio = length > maxChars ? maxChars / length : 1;
  const fontSize = Math.max(minSize, baseSize * ratio * 1.1);

  return (
    <h1 // prasanth Told from SEO TEAM
      className={`autoShrinkText ${className}`}
      // style={{
      //   width,
      //   fontSize: `${fontSize}px`,
      //   lineHeight: '0.9',
      //    margin: '0 auto',
      //   textAlign: align,
      //   whiteSpace: length < maxChars / 1.5 ? 'nowrap' : 'normal',
      // }}

      style={{
        "--dynamic-font-size": `${fontSize}px`,
        width,
        lineHeight: "0.9",
        margin: "0 auto",
        textAlign: align,
        whiteSpace: length < maxChars / 1.5 ? "nowrap" : "normal",
      }}
      title={text}
    >
      {text}
    </h1>
  );
};

export default AutoShrinkText;
