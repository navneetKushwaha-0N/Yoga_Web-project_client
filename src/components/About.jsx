import { FaLeaf, FaStar, FaHeart } from 'react-icons/fa'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about alt">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Welcome to my yoga sanctuary. I'm a passionate yoga instructor dedicated to helping students discover their inner strength and achieve holistic wellness. With over 10 years of experience in various yoga traditions, I've guided hundreds of students through transformative journeys.
            </p>
            <p>
              My teaching philosophy centers on creating a safe, welcoming space where students of all levels can explore their practice without judgment. I believe that yoga is not just about physical postures, but about connecting mind, body, and spirit.
            </p>

            <div className="credentials">
              <h3>My Credentials</h3>
              <ul>
                <li>200-Hour Yoga Teacher Training (RYT-200)</li>
                <li>500-Hour Advanced Yoga Certification</li>
                <li>Certified in Hatha, Vinyasa, and Yin Yoga</li>
                <li>Specialization in Yoga Therapy & Wellness</li>
                <li>Continuing Education in Pranayama & Meditation</li>
              </ul>
            </div>

            <div className="philosophy">
              <h3>My Teaching Philosophy</h3>
              <p>
                "Yoga is not about touching your toes, it's about what you learn on the way down." I create personalized experiences that meet students where they are, honoring their individual journey and limitations while inspiring growth.
              </p>
            </div>
          </div>

          <div className="about-values">
            <div className="value-card">
              <FaLeaf className="value-icon" />
              <h4>Natural Balance</h4>
              <p>Harmonizing body, mind, and spirit through mindful practice</p>
            </div>
            <div className="value-card">
              <FaStar className="value-icon" />
              <h4>Growth & Transformation</h4>
              <p>Supporting each student's unique path toward wellness</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h4>Compassion & Community</h4>
              <p>Building a supportive community centered on kindness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
