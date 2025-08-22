import React from 'react';
import auditJournal from '../../img/audit-journal.jpg';
import identityToken from '../../img/identity-token.jpg';
import devHoodie from '../../img/dev-hoodie.jpg';

const FutureProducts = () => {
  const products = [
    {
      id: 'fp001',
      title: 'Nexara Audit Journal',
      description: 'Hand-bound logbook for offline rituals and legacy documentation.',
      image: auditJournal,
      link: '/products/audit-journal',
    },
    {
      id: 'fp002',
      title: 'Contributor Identity Token',
      description: 'Wearable NFC tag linking to your public proof and onboarding trail.',
      image: identityToken,
      link: '/products/identity-token',
    },
    {
      id: 'fp003',
      title: 'Minimalist Dev Hoodie',
      description: 'Ethical cotton hoodie with “Silent Impact” stitched inside the sleeve.',
      image: devHoodie,
      link: '/products/dev-hoodie',
    },
  ];

  return (
    <section style={{
      padding: '3rem 1rem',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>🌱 Future Products</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        {products.map((product) => (
          <a
            key={product.id}
            href={product.link}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              width: '300px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              backgroundColor: '#fff',
              transition: 'transform 0.2s ease-in-out'
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem', textAlign: 'left' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{product.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{product.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FutureProducts;

