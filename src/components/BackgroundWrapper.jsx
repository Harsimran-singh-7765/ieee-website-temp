import React, { useEffect, useRef } from "react";
import { ThpaceGL } from "thpace";  // ✅ Using local install, not CDN
import * as THREE from "three";

const BackgroundWrapper = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let thpaceInstance;

    if (canvasRef.current) {
      thpaceInstance = ThpaceGL.create(canvasRef.current, {
        colors: ["#ff0000ff", "#ffffffff", "#1e1e2f"], // 🖤💙 color scheme
        triangleSize: 100,
        bleed: 50,
        noise: 20,
        noiseScalar: 1.5,
        pointVariationX: 25,
        pointVariationY: 25,
        pointAnimationSpeed: 0.1,
        particleCount: 50,
        particleOpacity: 0.4,
        particleRadius: 2,
        maxFps: 45,
        THREE, 
      });
    }

    return () => {
      if (thpaceInstance) thpaceInstance.stop(); // 💣 clean exit
    };
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
