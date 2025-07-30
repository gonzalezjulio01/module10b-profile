// Profile.jsx
// A musician profile card with toggleable quote using props and state.

import { useState } from 'react';

function Profile({ name, occupation, quote }) {
  const [showQuote, setShowQuote] = useState(false);

  const toggleQuote = () => setShowQuote((prev) => !prev);

  return (
    <div
      style={{
        width: '450px',
        padding: '30px',
        margin: '40px auto',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <h1 style={{ fontSize: '28px', margin: '0 0 10px' }}>{name}</h1>
      <h3 style={{ fontSize: '20px', margin: '0 0 20px', fontWeight: '400' }}>
        {occupation}
      </h3>

      <button
        onClick={toggleQuote}
        style={{
          backgroundColor: '#fff',
          color: '#1e3c72',
          border: 'none',
          padding: '10px 18px',
          fontSize: '15px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        {showQuote ? 'Hide Quote' : 'Show Quote'}
      </button>

      {showQuote && (
        <p
          style={{
            marginTop: '20px',
            fontSize: '16px',
            lineHeight: '1.4',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '12px',
            borderRadius: '8px',
          }}
        >
          "{quote}"
        </p>
      )}
    </div>
  );
}

export default Profile;
