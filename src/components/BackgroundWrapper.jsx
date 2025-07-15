import React, { useEffect, useRef, useState } from "react";

const BackgroundWrapper = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Delay Vanta setup to give DOM time + reduce jank
    const timeout = setTimeout(() => {
      if (!vantaEffect && window.VANTA && window.VANTA.TOPOLOGY) {
        setVantaEffect(
          window.VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            scale: 1.0,
            scaleMobile: 1.5,
            color: 0x1891f0,
            backgroundColor: 0x000000,
            points: 5.0,         // 🔽 fewer elements
            spacing: 30.0,       // 🔼 wider spacing
            showDots: true,
            // frameRate: 30,    // NOTE: Not officially supported but can try
          })
        );
      }
    }, 100); // small delay helps smooth things out

    return () => {
      clearTimeout(timeout);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000", // fallback
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
