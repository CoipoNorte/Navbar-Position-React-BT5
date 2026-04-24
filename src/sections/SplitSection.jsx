// src/sections/SplitSection.jsx
import React from 'react';
import { HoverOverlay } from './FullSection';

const SplitSection = () => {
  return (
    <section id="seccion2">
      <div className="row g-0">
        <div className="col-12 col-md-6">
          <HoverOverlay
            bgImage="https://picsum.photos/id/1040/800/600"
            label="Sección 1"
            minHeight="60vh"
          />
        </div>
        <div className="col-12 col-md-6">
          <HoverOverlay
            bgImage="https://picsum.photos/id/1043/800/600"
            label="Sección 2"
            minHeight="60vh"
          />
        </div>
      </div>
    </section>
  );
};

export default SplitSection;