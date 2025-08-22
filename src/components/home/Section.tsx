

import React from 'react';


export default function Home() {

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      color: '#f0f0f0',
      textAlign: 'center',
      padding: '1rem',
      fontSize: '0.875rem',
      marginTop: 'auto'
    }}>
      <div style={{ marginBottom: '0.5rem' }}>
        © 2025 Nexara. All actions logged with dignity.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <a href="/privacy" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="/terms" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Terms & Conditions</a>
        <a href="/docs" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Docs</a>
        <a href="/contributors" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Contributors</a>
      </div>
    </div>
  );
}



