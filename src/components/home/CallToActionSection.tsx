import React from 'react';
import { NavLink } from "react-router-dom";

const CallToActionSection = () => {


  const handleClick = () => {
  };

  return (
    <section
      style={{
        backgroundColor: '#0f172a',
        padding: '3rem 1rem',
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2 style={{ color: '#f1f5f9', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
        Ready to explore ethical commerce?
      </h2>
      <NavLink to="product/LifeFuel">
      <button
        style={{
          backgroundColor: '#38bdf8',
          color: '#fff',
          padding: '0.8rem 1.6rem',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        🛍️ Explore Products      
</button>
</NavLink>
    </section>
  );
};

export default CallToActionSection;
