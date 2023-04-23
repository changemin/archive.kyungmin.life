import React, { useState, useEffect } from "react";
import styled from 'styled-components';

function CircleCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <CursorWrapper>
      <BlurCircle
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></BlurCircle>
    </CursorWrapper>
  );
}

export default CircleCursor;

const CursorWrapper = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`

const BlurCircle = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: rgba(0,0,255, 0.8);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
`