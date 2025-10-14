import React from 'react';

const AutoShrinkText = ({
  text,
  baseSize = 60,
  minSize = 18,
  maxChars = 40,
  className = '',
  maxLines = 2,
  width = '100%', // 👈 optional width prop
  align = 'center', 
}) => {
  const length = text?.length || 0;

  // soft shrink only for very long titles
  const ratio = length > maxChars ? maxChars / length : 1;
  const fontSize = Math.max(minSize, baseSize * ratio * 1.1);

  return (
    <h3
      className={className}
      style={{
        width, // 👈 ensure width is applied
        fontSize: `${fontSize}px`,
        lineHeight: '0.9',
        // wordBreak: 'break-word',
        // overflowWrap: 'break-word',
        // whiteSpace: 'normal',
        // display: 'block',
        // textOverflow: 'ellipsis',
         margin: '0 auto', // 👈 centers the block itself
        textAlign: align, // 👈 centers the text
      }}
      title={text}
    >
      {text}
    </h3>
  );
};

export default AutoShrinkText;
