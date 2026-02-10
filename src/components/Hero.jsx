'use client';

import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa'
import './Hero.css'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      title: 'Find Your Inner Peace',
      quote: '"Yoga is the journey of the self, through the self, to the self."',
      image: '/images/yoga1.jpeg'
    },
    {
      title: 'Transform Your Mind',
      quote: '"The body benefits from movement, and the mind benefits from stillness."',
      image: '/images/yoga2.jpeg'
    },
    {
      title: 'Balance Your Life',
      quote: '"Yoga teaches us how to listen to the wisdom of our body."',
      image: '/images/yoga1.jpeg'
    },
    {
      title: 'Embrace Wellness',
      quote: '"The greatest wealth is health."',
      image: '/images/yoga1.jpeg'
    }
  ]

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setAutoPlay(false)
  }

  const handleWhatsApp = () => {
    const phoneNumber = '+919756319093'
    const message = 'Hi! I am interested in joining your yoga classes.'
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <section id="home" className="hero">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="slide-overlay"></div>

            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-quote">{slide.quote}</p>

              <div className="slide-buttons">
                <button className="btn btn-primary" onClick={handleWhatsApp}>
                  <FaWhatsapp style={{ marginRight: '8px' }} />
                  Book via WhatsApp
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    document
                      .getElementById('classes')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View Classes
                </button>
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="autoplay-toggle">
        <button
          className={`toggle-btn ${autoPlay ? 'playing' : ''}`}
          onClick={() => setAutoPlay(!autoPlay)}
        >
          {autoPlay ? '⏸' : '▶'}
        </button>
      </div>
    </section>
  )
}
