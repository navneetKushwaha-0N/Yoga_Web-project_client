import { FaBookmark } from 'react-icons/fa'
import './Sessions.css'

export default function Sessions() {
  const sessions = [
    {
      id: 1,
      name: 'Hatha Yoga',
      description: 'A gentle, foundational practice perfect for beginners. Focus on basic poses held longer to build strength and flexibility.'
    },
    {
      id: 2,
      name: 'Ashtanga Yoga',
      description: 'Dynamic, flowing practice that links breath with movement. Build heat, strength, and endurance through repetitive sequences.'
    },
    {
      id: 3,
      name: 'Meditation',
      description: 'Slow-paced practice focusing on deep stretches and relaxation. Perfect for recovery, mindfulness, and inner peace.'
    },
    {
      id: 4,
      name: 'Balancing Yoga',
      description: 'Challenging practice focused on stability and coordination. Improve power, endurance, and mental focus with advanced poses.'
    },
    {
      id: 5,
      name: 'Yoga Nidra',
      description: 'Restorative practice designed for deep relaxation and rejuvenation. An ancient technique for complete mind-body restoration.'
    },
    {
      id: 6,
      name: 'Sound Healing',
      description: 'Therapeutic practice combining yoga with harmonic vibrations. Experience healing through sacred sounds and vibrations.'
    },
    {
      id: 7,
      name: 'Spa Therapy',
      description: 'Luxurious wellness experience combining yoga, massage, and aromatherapy. Complete rejuvenation for body, mind, and spirit.'
    },
    {
      id: 8,
      name: 'Power Yoga',
      description: 'High-intensity practice building strength and endurance. Perfect for those seeking a more challenging physical workout.'
    }
  ]

  const handleBookNow = (sessionName) => {
    alert(`Booked: ${sessionName}\nPrice: ₹1000 per session`)
  }

  return (
    <section id="sessions" className="sessions">
      <div className="container">
        <h2 className="section-title">Our Yoga Sessions</h2>
        <p className="section-subtitle">Choose the perfect session for your wellness journey</p>

        <div className="sessions-grid">
          {sessions.map((session) => (
            <div key={session.id} className="session-card">
              <div className="session-icon">
                <FaBookmark />
              </div>
              
              <h3 className="session-name">{session.name}</h3>
              
              <p className="session-description">{session.description}</p>
              
              <div className="session-footer">
                <span className="session-price">₹1000 per session</span>
                <button 
                  className="btn-book"
                  onClick={() => handleBookNow(session.name)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
