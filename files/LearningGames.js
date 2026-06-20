import React from 'react';
import './Pages.css';

function LearningGames() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Learning Games</h1>
          <p>Interactive tools and resources to make learning engaging and fun.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', textAlign: 'center' }}>
            This section is being developed to include interactive games and learning tools that support reading fluency, phonics, vocabulary building, and English language learning. Check back soon!
          </p>

          <div className="coming-soon">
            <div className="coming-soon-card">
              <h3>🎮 Word Building Games</h3>
              <p>Interactive games to practice phonics, letter sounds, and word formation.</p>
            </div>

            <div className="coming-soon-card">
              <h3>📖 Reading Comprehension Activities</h3>
              <p>Story-based exercises with comprehension questions to build fluency and understanding.</p>
            </div>

            <div className="coming-soon-card">
              <h3>🎯 Vocabulary Builder</h3>
              <p>Engaging flashcard and matching games to expand vocabulary in English and other languages.</p>
            </div>

            <div className="coming-soon-card">
              <h3>🗣️ Pronunciation Practice</h3>
              <p>Audio-based activities to help with pronunciation and listening comprehension.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <h3 style={{ marginBottom: '20px' }}>Want to stay updated?</h3>
            <p style={{ marginBottom: '30px' }}>
              Get notified when new games and resources are available.
            </p>
            <a 
              href="mailto:david@learnwithlane.com?subject=Interested%20in%20Learning%20Games" 
              className="btn btn-primary"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LearningGames;
