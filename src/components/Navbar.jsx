// src/components/Navbar.jsx
import React, { useState } from 'react';

const positions = ['top', 'left', 'right', 'bottom'];

const links = [
  { label: 'Inicio', href: '#inicio', icon: '🏠' },
  { label: 'Sección 1', href: '#seccion1', icon: '⭐' },
  { label: 'Sección 2', href: '#seccion2', icon: '🔥' },
  { label: 'Sección 3', href: '#seccion3', icon: '📍' },
  { label: 'Salir', href: '#salir', icon: '🚪' },
];

const EXPANDED_WIDTH = 220;
const COLLAPSED_WIDTH = 62;

const Navbar = ({ position, onChangePosition, collapsed, onToggleCollapse }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentIndex = positions.indexOf(position);
  const isVertical = position === 'left' || position === 'right';
  const isHorizontal = position === 'top' || position === 'bottom';

  const cyclePosition = () => {
    const nextIndex = (currentIndex + 1) % positions.length;
    onChangePosition(positions[nextIndex]);
    setMobileOpen(false);
  };

  const sidebarWidth = collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

  // ═══════════════════════════════════════════
  //  NAVBAR HORIZONTAL (top / bottom)
  // ═══════════════════════════════════════════
  if (isHorizontal) {
    const fixedStyle = {
      position: 'fixed',
      left: 0,
      right: 0,
      zIndex: 1050,
      ...(position === 'top' ? { top: 0 } : { bottom: 0 }),
    };

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={fixedStyle}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#inicio">
            📐 Navbar Position
          </a>

          <div className="d-flex align-items-center order-md-last">
            <button
              className="btn btn-outline-warning btn-sm"
              onClick={cyclePosition}
              title={`Posición: ${position}`}
            >
              🔄 {position.toUpperCase()}
            </button>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              {links.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    className="nav-link"
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="me-1">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  // ═══════════════════════════════════════════
  //  NAVBAR VERTICAL (left / right)
  // ═══════════════════════════════════════════
  const sideStyle = {
    position: 'fixed',
    top: 0,
    [position]: 0,
    width: `${sidebarWidth}px`,
    height: '100vh',
    zIndex: 1050,
    overflowX: 'hidden',
    overflowY: 'auto',
    transition: 'width 0.3s ease',
  };

  // Flecha del botón colapsar según posición y estado
  const getCollapseIcon = () => {
    if (position === 'left') {
      return collapsed ? '▶' : '◀';
    }
    return collapsed ? '◀' : '▶';
  };

  return (
    <nav
      className="navbar navbar-dark bg-dark flex-column align-items-start p-0"
      style={sideStyle}
    >
      {/* ── HEADER: Logo / Emoji ── */}
      <div
        className="w-100 d-flex align-items-center border-bottom border-secondary"
        style={{
          minHeight: '60px',
          padding: collapsed ? '0' : '0 12px',
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}
      >
        <a
          className="navbar-brand mb-0 fw-bold text-decoration-none"
          href="#inicio"
          title="Navbar Position"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            fontSize: collapsed ? '1.4rem' : '1rem',
            transition: 'font-size 0.3s ease',
          }}
        >
          {collapsed ? '📐' : '📐 Navbar Position'}
        </a>
      </div>

      {/* ── LINKS ── */}
      <ul className="navbar-nav flex-column w-100 mt-2 flex-grow-1">
        {links.map((link) => (
          <li className="nav-item" key={link.href}>
            <a
              className="nav-link d-flex align-items-center"
              href={link.href}
              title={collapsed ? link.label : ''}
              style={{
                padding: collapsed ? '12px 0' : '10px 16px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                transition: 'padding 0.3s ease',
              }}
            >
              <span
                style={{
                  fontSize: '1.2rem',
                  minWidth: '28px',
                  textAlign: 'center',
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </span>
              {!collapsed && (
                <span
                  className="ms-2"
                  style={{
                    opacity: collapsed ? 0 : 1,
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  {link.label}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* ── BOTTOM BUTTONS ── */}
      <div className="w-100 border-top border-secondary p-2 mt-auto">
        {/* Botón cambiar posición */}
        <button
          className={`btn btn-outline-warning btn-sm w-100 mb-2 ${
            collapsed ? 'px-0' : ''
          }`}
          onClick={cyclePosition}
          title={`Posición: ${position}`}
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {collapsed ? '🔄' : `🔄 ${position.toUpperCase()}`}
        </button>

        {/* Botón colapsar / expandir */}
        <button
          className={`btn btn-outline-light btn-sm w-100 ${
            collapsed ? 'px-0' : ''
          }`}
          onClick={onToggleCollapse}
          title={collapsed ? 'Expandir menú' : 'Colapsar menú'}
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {collapsed ? getCollapseIcon() : `${getCollapseIcon()} Colapsar`}
        </button>
      </div>
    </nav>
  );
};

export { EXPANDED_WIDTH, COLLAPSED_WIDTH };
export default Navbar;