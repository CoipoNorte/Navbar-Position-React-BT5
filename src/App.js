// src/App.js
import React, { useState } from 'react';
import Navbar, { EXPANDED_WIDTH, COLLAPSED_WIDTH } from './components/Navbar';
import Hero from './sections/Hero';
import Carousel from './sections/Carousel';
import CirclePhotos from './sections/CirclePhotos';
import FullSection from './sections/FullSection';
import SplitSection from './sections/SplitSection';
import LocationSection from './sections/LocationSection';
import Footer from './sections/Footer';

function App() {
  const [navPosition, setNavPosition] = useState('top');
  const [collapsed, setCollapsed] = useState(false);

  const isVertical = navPosition === 'left' || navPosition === 'right';
  const sidebarWidth = collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

  // Al cambiar de posición, resetear colapso si pasamos a horizontal
  const handleChangePosition = (newPosition) => {
    setNavPosition(newPosition);
    const willBeHorizontal = newPosition === 'top' || newPosition === 'bottom';
    if (willBeHorizontal) {
      setCollapsed(false);
    }
  };

  const getContentStyle = () => {
    switch (navPosition) {
      case 'top':
        return { paddingTop: '56px' };
      case 'bottom':
        return { paddingBottom: '56px' };
      case 'left':
        return { marginLeft: `${sidebarWidth}px` };
      case 'right':
        return { marginRight: `${sidebarWidth}px` };
      default:
        return {};
    }
  };

  return (
    <div className="bg-white" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar
        position={navPosition}
        onChangePosition={handleChangePosition}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      <main style={{ ...getContentStyle(), transition: 'all 0.3s ease' }}>
        <Hero />
        <Carousel />
        <CirclePhotos />
        <FullSection />
        <SplitSection />
        <LocationSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;