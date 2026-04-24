// src/sections/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="d-flex align-items-center justify-content-center text-white text-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      }}
    >
      <div className="container">
        <h1 className="display-1 fw-bold mb-3">Navbar Position</h1>
        <p className="lead fs-4 mb-4">
          Landing page con React + Bootstrap 5 — sin CSS personalizado
        </p>
        <a href="#seccion1" className="btn btn-warning btn-lg px-5 py-3 fw-semibold">
          Explorar
        </a>
      </div>
    </section>
  );
};

export default Hero;