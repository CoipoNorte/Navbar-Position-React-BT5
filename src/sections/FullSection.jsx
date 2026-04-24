// src/sections/FullSection.jsx
import React, { useState } from 'react';

const HoverOverlay = ({ bgImage, label, minHeight = '100vh' }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
      style={{
        minHeight,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Overlay oscuro */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: hovered ? 'rgba(0,0,0,0.65)' : 'rgba(0,0,0,0)',
          transition: 'background-color 0.4s ease',
        }}
      >
        <h2
          className="text-white display-3 fw-bold"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.4s ease',
          }}
        >
          {label}
        </h2>
      </div>
    </div>
  );
};

const FullSection = () => {
  return (
    <section id="seccion1">
      {/* Sección completa */}
      <HoverOverlay
        bgImage="https://picsum.photos/id/1035/1600/900"
        label="Sección"
        minHeight="100vh"
      />
    </section>
  );
};

export { HoverOverlay };
export default FullSection;