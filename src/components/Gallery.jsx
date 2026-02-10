'use client';

import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import './Gallery.css'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, title: 'Sunset Vinyasa', image: '/images/yoga1.jpeg' },
    { id: 2, title: 'Meditation Circle', image: '/images/yoga2.jpeg' },
    { id: 3, title: 'Outdoor Yoga', image: '/images/yoga3.jpeg' },
    { id: 4, title: 'Studio Class', image: '/images/yoga4.jpeg' },
    { id: 5, title: 'Group Session', image: '/images/yoga5.jpeg' },
    { id: 6, title: 'Morning Stretch', image: '/images/yoga6.jpeg' },
    { id: 7, title: 'Balance Practice', image: '/images/yoga7.jpeg' },
    { id: 8, title: 'Peaceful Breathing', image: '/images/yoga8.jpeg' },
  ]

  return (
    <section id="gallery" className="gallery alt">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Moments from our yoga sessions and community
        </p>

        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <div
                className="gallery-image"
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="gallery-overlay">
                  <p>{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <div
              className="lightbox-image"
              style={{
                backgroundImage: `url(${selectedImage.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
