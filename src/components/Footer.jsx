import { FaHeart } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4> IloveYoga</h4>
            <p>Transforming lives through the practice of yoga, mindfulness, and holistic wellness.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>More</h4>
            <ul>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <strong>Email:</strong><br />
             sumitsemwal508@gmail.com
            </p>
            <p>
              <strong>Phone:</strong><br />
              +91 97563 19093
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} IloveYoga. All rights reserved.</p>
          <p className="made-with">
           Developed <FaHeart className="heart-icon" /> by mollen_0_mist

          </p>
        </div>
      </div>
    </footer>
  )
}
