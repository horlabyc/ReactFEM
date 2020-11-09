/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const NavBar = () => {
  const [padding, setPadding] = useState(15);
  const [spintime, setSpinTime] = useState(4);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <header
      style={{ padding: padding }}
      // onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: pink;
      `}
    >
      <Link to="/">Adopt me</Link>
      <span
        onClick={() => setSpinTime(spintime * 0.8)}
        css={css` 
          font-size: 90px; 
          animation: ${spin} ${spintime}s linear infinite;
          /* &:hover {
            animation: none;
          } */
        `}
        role="img" aria-label="logo">🥋</span>
    </header>
  );
}

export default NavBar;