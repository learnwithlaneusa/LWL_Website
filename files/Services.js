import React from 'react';
import './Pages.css';

function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Services & Scheduling</h1>
          <p>Flexible, professional tutoring tailored to your needs and schedule.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Our Offerings</h2>

          <div className="services-grid">
            <div className="service-card">
              <h3>📚 Reading Remediation</h3>
              <h4>One-on-One Intensive</h4>
              <p><strong>Ideal for:</strong> Students struggling with phonics, fluency, comprehension, or who have been diagnosed with dyslexia or reading delays.</p>
              
              <div className="pricing">
                <h5>Pricing</h5>
                <ul>
                  <li><strong>30 minutes:</strong> $45 USD</li>
                  <li><strong>45 minutes:</strong> $65 USD</li>
                  <li><strong>60 minutes:</strong> $85 USD</li>
                </ul>
              </div>

              <h5>What's Included</h5>
              <ul className="features">
                <li>Initial assessment to identify reading level and gaps</li>
                <li>Personalized lesson plans based on student needs</li>
                <li>Evidence-based interventions (Orton-Gillingham, Wilson Reading, etc.)</li>
                <li>Regular progress tracking and parent communication</li>
                <li>Take-home activities to reinforce learning</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>🌍 ESL (English as a Second Language)</h3>
              <h4>Conversational & Foundational English</h4>
              <p><strong>Ideal for:</strong> Students of all ages learning English, from complete beginners to intermediate speakers.</p>
              
              <div className="pricing">
                <h5>Pricing</h5>
                <ul>
                  <li><strong>30 minutes:</strong> $40 USD</li>
                  <li><strong>45 minutes:</strong> $55 USD</li>
                  <li><strong>60 minutes:</strong> $70 USD</li>
                </ul>
              </div>

              <h5>What's Included</h5>
              <ul className="features">
                <li>Conversational English practice focused on real-world situations</li>
                <li>Grammar and vocabulary building tailored to your goals</li>
                <li>Pronunciation coaching</li>
                <li>Flexible curriculum (business English, travel, daily life, academics)</li>
                <li>Cultural context and natural language patterns</li>
              </ul>
            </div>
          </div>

          <div className="booking-section">
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Schedule Your Session</h3>
            <p style={{ textAlign: 'center', marginBottom: '30px' }}>
              Use the calendar below to book a session at a time that works for you. All sessions are conducted online via Zoom.
            </p>
            
            <div style={{ textAlign: 'center' }}>
              <a href="https://calendar.app.google/TBRQG8K4HoBTJaXe6" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Open Booking Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>

          <div className="faq">
            <div className="faq-item">
              <h4>What's your cancellation policy?</h4>
              <p>I ask for 24 hours notice if you need to reschedule. Life happens, so let me know as soon as you can.</p>
            </div>

            <div className="faq-item">
              <h4>Do you offer package discounts?</h4>
              <p>Yes! Purchase a 5-session or 10-session package and save. Contact me for details.</p>
            </div>

            <div className="faq-item">
              <h4>Can I do a trial lesson first?</h4>
              <p>Absolutely. Your first session includes an assessment. We'll use that time to identify your needs and see if we're a good fit.</p>
            </div>

            <div className="faq-item">
              <h4>What timezone are you in?</h4>
              <p>I'm in Central Time (CT). I'm happy to work with international students and can often accommodate early mornings or evenings.</p>
            </div>

            <div className="faq-item">
              <h4>What platform do you use for lessons?</h4>
              <p>All sessions are conducted via Zoom. You'll receive a direct link when you book.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
