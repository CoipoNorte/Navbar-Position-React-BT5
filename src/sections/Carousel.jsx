// src/sections/Carousel.jsx
import React from 'react';

const slides = [
  {
    img: 'https://picsum.photos/id/1015/1200/500',
    title: 'Primer Slide',
    text: 'Paisaje impresionante capturado en alta resolución.',
  },
  {
    img: 'https://picsum.photos/id/1018/1200/500',
    title: 'Segundo Slide',
    text: 'La naturaleza en todo su esplendor.',
  },
  {
    img: 'https://picsum.photos/id/1025/1200/500',
    title: 'Tercer Slide',
    text: 'Momentos que inspiran creatividad.',
  },
];

const Carousel = () => {
  return (
    <section className="bg-dark py-0">
      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <img
                src={slide.img}
                className="d-block w-100"
                alt={slide.title}
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="fw-bold">{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;