// src/sections/LocationSection.jsx
import React from 'react';

const LocationSection = () => {
  return (
    <section id="seccion3" className="py-5 bg-white">
      <div className="container-fluid">
        <h2 className="display-5 fw-bold text-center mb-5">Ubicación</h2>
        <div className="row g-0" style={{ minHeight: '450px' }}>

          {/* Columna delgada - Info */}
          <div className="col-12 col-md-3 bg-dark text-white p-4 d-flex flex-column justify-content-center">
            <h4 className="fw-bold mb-4">📍 Encuéntranos</h4>

            <div className="mb-3">
              <small className="text-warning text-uppercase fw-semibold">Dirección</small>
              <p className="mb-0">Av. Principal #123, Centro</p>
            </div>

            <div className="mb-3">
              <small className="text-warning text-uppercase fw-semibold">Teléfono</small>
              <p className="mb-0">+52 (555) 123-4567</p>
            </div>

            <div className="mb-3">
              <small className="text-warning text-uppercase fw-semibold">Email</small>
              <p className="mb-0">contacto@navbarposition.com</p>
            </div>

            <div className="mb-3">
              <small className="text-warning text-uppercase fw-semibold">Horario</small>
              <p className="mb-0">Lun - Vie: 9:00 - 18:00</p>
              <p className="mb-0">Sáb: 10:00 - 14:00</p>
            </div>

            <div className="mt-3">
              <a href="#!" className="text-warning me-3 fs-5">
                <i className="bi bi-facebook"></i> FB
              </a>
              <a href="#!" className="text-warning me-3 fs-5">
                <i className="bi bi-twitter"></i> TW
              </a>
              <a href="#!" className="text-warning fs-5">
                <i className="bi bi-instagram"></i> IG
              </a>
            </div>
          </div>

          {/* Columna ancha - Mapa */}
          <div className="col-12 col-md-9">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661419637088!2d-99.16869708509413!3d19.427023786884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sZócalo%2C%20Centro%20Histórico%2C%20Ciudad%20de%20México!5e0!3m2!1ses!2smx!4v1690000000000!5m2!1ses!2smx"
              className="w-100 h-100 border-0"
              style={{ minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;