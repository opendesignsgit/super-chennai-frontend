// import React from "react";
// import "./TextStyle.css";
// const AutoShrinkText = ({
//   text,
//   baseSize = 60,
//   minSize = 18,
//   maxChars = 40,
//   className = "",
//   maxLines = 2,
//   width = "100%",
//   align = "center",
// }) => {
//   const length = text?.length || 0;

//   const ratio = length > maxChars ? maxChars / length : 1;
//   const fontSize = Math.max(minSize, baseSize * ratio * 1.1);

//   return (
//     <h1 
//       className={`autoShrinkText ${className}`}
    

//       style={{
//         "--dynamic-font-size": `${fontSize}px`,
//         width,
//         lineHeight: "0.9",
//         margin: "0 auto",
//         textAlign: align,
//         whiteSpace: length < maxChars / 1.5 ? "nowrap" : "normal",
//       }}
//       title={text}
//     >
//       {text}
//     </h1>
//   );
// };

// export default AutoShrinkText;
import React from "react";
import "./TextStyle.css";

const AutoShrinkText = ({
  text = "",
  baseSize = 60,
  minSize = 18,
  maxChars = 40,
  className = "",
  maxLines = 2,
  width = "100%",
  align = "center",
}) => {
  const safeText = text || "";
  const length = safeText.length;

  // Calculate dynamic font size based on text length
  let fontSize = baseSize;
  if (length > maxChars) {
    const overflowFactor = length / maxChars;
    fontSize = Math.max(minSize, Math.floor(baseSize / overflowFactor));
  }

  return (
    <h1
      className={`autoShrinkText ${className}`}
      style={{
        fontSize: `${fontSize}px`,
        "--dynamic-font-size": `${fontSize}px`,
        width,
        lineHeight: "1.1",
        margin: "0 auto",
        textAlign: align,
        display: "-webkit-box",
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        wordBreak: "break-word",
      }}
      title={safeText}
    >
      {safeText}
    </h1>
  );
};

export default AutoShrinkText;