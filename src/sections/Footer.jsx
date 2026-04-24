// src/sections/Footer.jsx
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="salir" className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          {/* Columna 1 - Marca */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-warning mb-3">📐 Navbar Position</h5>
            <p className="text-secondary">
              Proyecto demostrativo construido con React y Bootstrap 5.
              Sin CSS personalizado, 100% responsivo.
            </p>
          </div>

          {/* Columna 2 - Links */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-3">Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#inicio" className="text-secondary text-decoration-none">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="#seccion1" className="text-secondary text-decoration-none">Sección 1</a>
              </li>
              <li className="mb-2">
                <a href="#seccion2" className="text-secondary text-decoration-none">Sección 2</a>
              </li>
              <li className="mb-2">
                <a href="#seccion3" className="text-secondary text-decoration-none">Sección 3</a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <p className="text-secondary mb-1">📧 contacto@navbarposition.com</p>
            <p className="text-secondary mb-1">📞 +52 (555) 123-4567</p>
            <p className="text-secondary mb-0">📍 Ciudad de México, MX</p>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="row">
          <div className="col text-center">
            <p className="text-secondary mb-0 small">
              © {year} Navbar Position. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;