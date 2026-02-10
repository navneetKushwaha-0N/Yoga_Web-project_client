'use client';

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './FAQ.css'

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'Do I need to be flexible to start yoga?',
      answer: 'Absolutely not! Yoga is about meeting yourself where you are. Flexibility develops naturally through consistent practice. Everyone, regardless of their starting level, can benefit from yoga.'
    },
    {
      id: 2,
      question: 'What should I bring to a class?',
      answer: 'Bring a yoga mat (we have extras available), a water bottle, and wear comfortable clothing that allows you to move freely. Yoga is typically practiced barefoot, but socks are also acceptable.'
    },
    {
      id: 3,
      question: 'Can I do yoga if I have an injury or health condition?',
      answer: 'Yes, with modifications. Always inform your instructor about any injuries or health concerns before class. Most poses can be modified to accommodate different needs.'
    },
    {
      id: 4,
      question: 'How often should I practice yoga?',
      answer: 'Consistency is key. Practicing 3-4 times per week is ideal for seeing benefits. However, even once a week is better than none. Listen to your body and practice at your own pace.'
    },
    {
      id: 5,
      question: 'What\'s the difference between the online and offline classes?',
      answer: 'Offline classes offer hands-on adjustments, better alignment feedback, and a community atmosphere. Online classes provide flexibility and convenience. Both are equally effective with proper engagement.'
    },
    {
      id: 6,
      question: 'Do you offer trial classes?',
      answer: 'Yes! First-time students can attend a trial class at a discounted rate. Contact us via WhatsApp to schedule your trial and find the perfect class for you.'
    },
    {
      id: 7,
      question: 'Is yoga a religious practice?',
      answer: 'While yoga has roots in ancient Indian philosophy, modern yoga is accessible to people of all faiths. We teach yoga as a wellness and mindfulness practice, not as a religious activity.'
    },
    {
      id: 8,
      question: 'Can pregnant women do yoga?',
      answer: 'Yes! We offer specialized Prenatal Yoga classes designed specifically for expecting mothers. These classes are safe and beneficial throughout pregnancy. Always consult your doctor first.'
    }
  ]

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="faq alt">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Find answers to common questions about our yoga practice</p>

        <div className="faq-container">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <FaChevronDown className="faq-icon" />
              </button>
              
              {openId === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
