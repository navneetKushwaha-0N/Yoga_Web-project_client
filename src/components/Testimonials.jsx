import { FaStar } from 'react-icons/fa'
import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Yoga Student',
      text: 'This class completely transformed my life. I came in stressed and left feeling peaceful. The instructor\'s guidance is impeccable!',
      rating: 5,
      avatar: '👩‍🦰'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Student',
      text: 'After 6 months of practice, I\'ve noticed incredible improvements in my flexibility, strength, and mental clarity.',
      rating: 5,
      avatar: '👨‍🦱'
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Online Student',
      text: 'The online classes are so convenient and the quality is just as good as in-person. Highly recommended!',
      rating: 5,
      avatar: '👩‍🦱'
    },
    {
      id: 4,
      name: 'David Smith',
      role: 'Corporate Client',
      text: 'We brought in the instructor for our company wellness program. The team loved it and requested ongoing classes.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 5,
      name: 'Jessica Martinez',
      role: 'New Student',
      text: 'As a complete beginner, I felt welcomed and supported. No judgment, just pure encouragement and growth.',
      rating: 5,
      avatar: '👩‍🦳'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      role: 'Long-term Student',
      text: 'Been practicing for 2 years now. This instructor has genuinely changed my approach to health and wellness.',
      rating: 5,
      avatar: '👨‍🦲'
    }
  ]

  return (
    <section id="testimonials" className="testimonials alt">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <p className="section-subtitle">Hear from those who've transformed their lives through yoga</p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <span className="avatar">{testimonial.avatar}</span>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </div>
              </div>

              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
