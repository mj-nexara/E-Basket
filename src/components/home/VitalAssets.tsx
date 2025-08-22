import React from 'react';
import organicHoney from '../../img/organichoney.jpg';
import symbolicThreads from '../../img/symbolicthreads.jpg';
import essentialKits from '../../img/essentialkits.jpg';
import recoveryEssence from '../../img/recoveryessence.jpg';

const VitalAssets = () => {
  const products = [
    {
      id: 'va001',
      title: 'Organic Honey',
      description:
        'Pure, ethically sourced honey from sustainable beekeepers. Supports biodiversity and local economies.',
      image: organicHoney,
    },
    {
      id: 'va002',
      title: 'Symbolic Threads',
      description:
        'Premium cotton t-shirt with conscious commerce messaging. Manufactured using ethical labor and eco-friendly dyes.',
      image: symbolicThreads,
    },
    {
      id: 'va003',
      title: 'Essential Kits',
      description:
        'Curated packages for sustainable living. Includes reusable goods, natural wellness items, and eco-conscious tools.',
      image: essentialKits,
    },
    {
      id: 'va004',
      title: 'Recovery Essence',
      description:
        'Wellness products designed to restore balance and vitality.',
      image: recoveryEssence,
    },
  ];

  return (
    <section
      style={{
        padding: '3rem 1rem',
        backgroundColor: '#f4f9f4',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌱 Vital Assets</h2>
        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1rem',
            color: '#555',
          }}
        >
          🌍 Vital Assets are the heartbeat of sustainable commerce. Every product nurtures well-being and respects the planet.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              transition: 'transform 0.2s ease-in-out',
              textAlign: 'left',
              minWidth: '250px',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{product.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VitalAssets;
