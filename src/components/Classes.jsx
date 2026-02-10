import { FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'
import './Classes.css'

export default function Classes() {
  const classes = [
    {
      id: 1,
      name: 'Hatha Yoga',
      description: 'A gentle, foundational practice perfect for beginners. Focus on basic poses held longer to build strength and flexibility.',
      duration: '60 minutes',
      time: 'Mon & Wed 10:00 AM',
      mode: 'Online & Offline',
      level: 'Beginner',
      price: 'Per Class: ₹150'
    },
    {
      id: 2,
      name: 'Vinyasa Flow',
      description: 'Dynamic, flowing practice that links breath with movement. Build heat, strength, and endurance.',
      duration: '75 minutes',
      time: 'Tue & Thu 6:00 PM',
      mode: 'Online & Offline',
      level: 'Intermediate',
      price: 'Per Class: ₹180'
    },
    {
      id: 3,
      name: 'Yin Yoga',
      description: 'Slow-paced practice focusing on deep stretches and relaxation. Perfect for recovery and mindfulness.',
      duration: '60 minutes',
      time: 'Sat 9:00 AM',
      mode: 'Offline Only',
      level: 'All Levels',
      price: 'Per Class: ₹150'
    },
    {
      id: 4,
      name: 'Power Yoga',
      description: 'Challenging, strength-building practice. Improves power, endurance, and mental focus.',
      duration: '75 minutes',
      time: 'Mon & Fri 5:30 PM',
      mode: 'Offline Only',
      level: 'Advanced',
      price: 'Per Class: ₹200'
    },
    {
      id: 5,
      name: 'Prenatal Yoga',
      description: 'Specially designed for expecting mothers. Safe, gentle practice supporting pregnancy and preparing for birth.',
      duration: '60 minutes',
      time: 'Wed 2:00 PM',
      mode: 'Online Only',
      level: 'Beginner',
      price: 'Per Class: ₹170'
    },
    {
      id: 6,
      name: 'Yoga Meditation',
      description: 'Pure meditation and pranayama. Develop inner peace, focus, and spiritual connection.',
      duration: '45 minutes',
      time: 'Daily 7:00 AM & 7:00 PM',
      mode: 'Online & Offline',
      level: 'All Levels',
      price: 'Per Class: ₹120'
    }
  ]

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return '#a8c4a8'
      case 'Intermediate': return '#d4a574'
      case 'Advanced': return '#7b9a7f'
      default: return '#6b9a7f'
    }
  }

  return (
    <section id="classes" className="classes">
      <div className="container">
        <h2 className="section-title">Our Yoga Classes</h2>
        <p className="section-subtitle">Choose the perfect class for your level and schedule</p>

        <div className="classes-grid">
          {classes.map((yogaClass) => (
            <div key={yogaClass.id} className="class-card">
              <div className="class-header">
                <h3>{yogaClass.name}</h3>
                <span className="level-badge" style={{ backgroundColor: getLevelColor(yogaClass.level) }}>
                  {yogaClass.level}
                </span>
              </div>

              <p className="class-description">{yogaClass.description}</p>

              <div className="class-info">
                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div>
                    <strong>Duration</strong>
                    <p>{yogaClass.duration}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <strong>Schedule</strong>
                    <p>{yogaClass.time}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaUsers className="info-icon" />
                  <div>
                    <strong>Mode</strong>
                    <p>{yogaClass.mode}</p>
                  </div>
                </div>
              </div>

              <div className="class-footer">
                <span className="price">{yogaClass.price}</span>
                <button className="btn btn-primary btn-small">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
