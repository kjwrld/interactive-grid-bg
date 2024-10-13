// App.tsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import GridBackground from "./GridBackground.tsx";
import { CursorProvider } from "./CursorContext.tsx";
import "./App.css";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* <CursorProvider> */}
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* <ambientLight /> */}
        <GridBackground cursorPosition={cursorPosition} />
      </Canvas>
      {/* </CursorProvider> */}
    </>
  );
}

export default App;
