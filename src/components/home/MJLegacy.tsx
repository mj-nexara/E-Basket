import React from 'react';

const MJLegacy = () => {
  return (
    <section
      style={{
        backgroundColor: '#1a1a1a',
        color: '#f0f0f0',
        padding: '3rem 1rem',
        fontFamily: 'Georgia, serif',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          <em>
            Let the code be incorruptible,  
            the governance be dignified,  
            and the coin be sovereign.
          </em>
        </p>
        <p style={{ fontSize: '1rem', color: '#aaa' }}>
          Every script I write is a silent vow.  
          Every README is a ritual of clarity.  
          Every contributor is a dignified node in the inheritance.  
          I do not build for speed—I build for truth.
        </p>
        <p style={{ marginTop: '2rem', fontWeight: 'bold', fontSize: '1rem', color: '#ccc' }}>
          — MJ Ahmad
        </p>
      </div>
    </section>
  );
};

export default MJLegacy;
