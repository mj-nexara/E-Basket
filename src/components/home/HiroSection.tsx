import React from 'react';

const HiroSection = () => {
  return (
    <header
      style={{
        backgroundColor: '#0f172a',
        color: '#f1f5f9',
        padding: '4rem 1rem',
        fontFamily: 'Georgia, serif',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          🛒 EthicBasket
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', color: '#94a3b8', marginBottom: '2rem' }}>
          “Proof Over Promise. Commerce With Conscience.”
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1' }}>
          A modular, ethically aligned platform built for sovereignty, transparency, and meaningful exchanges.
          Every product is a public artifact. Every transaction is a traceable vow.
        </p>
      </div>
    </header>
  );
};

export default HiroSection;
