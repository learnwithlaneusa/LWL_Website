import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Master English and Reading with Confidence</h1>
          <p>Expert, patient instruction for ESL learners and students needing reading remediation. Build fluency and foundational skills in a supportive environment.</p>
          <a href="https://calendar.app.google/TBRQG8K4HoBTJaXe6" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Book a Free Assessment
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Over Two Decades of Educational Excellence</h2>
          
          <div className="about-content">
            <div className="about-text">
              <h3>Your Education, Your Way</h3>
              <p>Finding the right educator isn't just about credentials; it's about connection. With over 20 years of classroom experience, a Master's degree in Educational Leadership, and TESOL certification, I bring a wealth of professional expertise to every single lesson.</p>
              
              <p>But beyond the degrees, I understand the deep commitment required to tailor an education to a child's specific needs, navigating that exact journey every day while homeschooling my own teenager. I know what it takes to build a curriculum that actually engages a student. Whether we are breaking down complex phonics to overcome reading hurdles or building conversational English fluency, my goal is to create a space where students feel safe, encouraged, and ready to succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Specialized Instruction Tailored to Your Goals</h2>
          <p style={{ textAlign: 'center', marginBottom: '50px', color: '#666' }}>Choose the learning track that fits your needs.</p>
          
          <div className="grid grid-3">
            <div className="card">
              <h3>📚 Reading Remediation</h3>
              <p>Targeted, intensive intervention designed to close reading gaps. We focus on phonemic awareness, reading fluency, and deep comprehension so students can read with confidence and joy.</p>
              <Link to="/services-scheduling" className="btn btn-secondary">
                Learn More & See Rates
              </Link>
            </div>

            <div className="card">
              <h3>🌍 ESL (English as a Second Language)</h3>
              <p>Dynamic, conversational, and foundational English coaching. Perfect for students looking to improve their pronunciation, vocabulary, and practical communication skills.</p>
              <Link to="/services-scheduling" className="btn btn-secondary">
                Learn More & See Rates
              </Link>
            </div>

            <div className="card">
              <h3>👥 Coming Soon: Local Homeschool Cohorts</h3>
              <p>In-person, specialized group classes are currently in development for homeschool families in the local area. Combining rigorous academic standards with a flexible, engaging environment.</p>
              <p><small><strong>Space will be highly limited.</strong> Join the priority waitlist to receive updates on scheduling, curriculum, and enrollment dates.</small></p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSepHWYzAKwjUVVo8gxnC5fgnx8sLqB41khKDYa26ZaXRmYhiw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Get Started?</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto' }}>
            Schedule a free 15-minute assessment to discuss your learning goals and see how we can work together.
          </p>
          <a href="https://calendar.app.google/TBRQG8K4HoBTJaXe6" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Book Your Free Assessment
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
