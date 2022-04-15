/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

export const Hover = (props) => {
  return (
    <div
      onMouseEnter={() => props.hover(true)}
      onMouseLeave={() => props.hover(false)}
    >
      {props.children}
    </div>
  );
};

export const DivHover = (props) => {
  const defaultStyles = {
    marginTop: '15px',
    padding: '10px 20px 10px 20px',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    borderRadius: '5px',
    boxShadow: '2px 2px 1px rgba(223, 230, 233, 0.3)',
    ...(props.defaultStyles ? props.defaultStyles : {}),
  };

  const hoverStyles = {
    ...defaultStyles,
    backgroundColor: 'rgba(108, 92, 231,1.0)',
    cursor: 'pointer',
    color: 'rgba(223, 230, 233,1.0)',
    boxShadow: '0px 0px 7px rgba(223, 230, 233, 0.5)',
    transform: 'scale(0.95)',
    ...(props.hoverStyles ? props.hoverStyles : {}),
  };

  const [styles, setStyles] = useState(defaultStyles);

  return (
    <Hover
      hover={(isHover) => {
        setStyles(isHover ? hoverStyles : defaultStyles);
      }}
    >
      <div style={props.isClick ? hoverStyles : styles} onClick={props.onClick}>
        {props.children}
      </div>
    </Hover>
  );
};
