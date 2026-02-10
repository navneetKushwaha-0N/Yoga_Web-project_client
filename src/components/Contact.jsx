'use client';

import { FaWhatsapp, FaInstagram, FaTwitter, FaSnapchat } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  const phoneNumber = '+919756319093' // Replace with actual WhatsApp number
  const message = 'Hi! I am interested in your yoga classes.'

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const socialLinks = [
    {
      id: 1,
      icon: FaWhatsapp,
      name: 'WhatsApp',
      link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      color: '#25D366'
    },
    {
      id: 2,
      icon: FaInstagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/sumit_semwal1226?igsh=bjYxa2ZqZmoxOWxn',
      color: '#E4405F'
    },
    {
      id: 3,
      icon: FaTwitter,
      name: 'Twitter',
      link: 'https://x.com/sumitsemwal1226',
      color: '#1DA1F2'
    },
    {
      id: 4,
      icon: FaSnapchat,
      name: 'Snapchat',
      link: 'https://www.snapchat.com/add/xumit1226?share_id=vehE_EDCXTo&locale=en-IN',
      color: '#FFFC00'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Connect with us and start your yoga journey</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-block">
              <h4>Studio Location</h4>
              <p>123 Peaceful Lane<br />Wellness City, ZC 12345<br />United States</p>
            </div>

            <div className="info-block">
              <h4>Class Schedule</h4>
              <p>
                Monday - Friday: 6:00 AM - 8:00 PM<br />
                Saturday: 8:00 AM - 6:00 PM<br />
                Sunday: 9:00 AM - 5:00 PM
              </p>
            </div>

            <div className="info-block">
              <h4>Direct Contact</h4>
              <p>
                Phone: +1 (234) 567-8900<br />
                Email: hello@serenityoga.com<br />
                WhatsApp: <button onClick={handleWhatsAppClick} className="whatsapp-link">Chat Now</button>
              </p>
            </div>

            <div className="cta-block">
              <p>Have questions? Reach out anytime!</p>
              <button className="btn btn-primary" onClick={handleWhatsAppClick}>
                <FaWhatsapp style={{ marginRight: '8px' }} />
                Message us on WhatsApp
              </button>
            </div>
          </div>

          <div className="contact-social">
            <h3>Follow Us</h3>
            <p className="social-subtitle">Stay connected with us on social media for daily inspiration and updates</p>
            
            <div className="social-grid">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                    style={{ '--social-color': social.color }}
                  >
                    <IconComponent className="social-icon" />
                    <span>{social.name}</span>
                  </a>
                )
              })}
            </div>

            <div className="newsletter">
              <h4>Subscribe to Our Newsletter</h4>
              <p>Get wellness tips, class updates, and exclusive offers delivered to your inbox</p>
              <form onSubmit={(e) => { e.preventDefault() }} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
