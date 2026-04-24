// src/sections/CirclePhotos.jsx
import React from 'react';

const photos = [
  {
    img: 'https://picsum.photos/id/1005/300/300',
    name: 'Creatividad',
    desc: 'Diseño innovador para cada proyecto.',
  },
  {
    img: 'https://picsum.photos/id/1012/300/300',
    name: 'Tecnología',
    desc: 'Soluciones modernas y escalables.',
  },
  {
    img: 'https://picsum.photos/id/1027/300/300',
    name: 'Comunidad',
    desc: 'Construimos juntos el futuro digital.',
  },
];

const CirclePhotos = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-5">Nuestro Equipo</h2>
        <div className="row g-4 justify-content-center">
          {photos.map((photo, i) => (
            <div className="col-12 col-md-4" key={i}>
              <img
                src={photo.img}
                alt={photo.name}
                className="rounded-circle mb-3 shadow"
                style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />
              <h5 className="fw-semibold">{photo.name}</h5>
              <p className="text-muted">{photo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CirclePhotos;