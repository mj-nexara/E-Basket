import React from 'react';
import digitalInnovation from '../../img/digital-innovation.jpg';
import vitalAssets from '../../img/vital-assets.jpg';
import transparentGovernance from '../../img/transparent-governance.jpg';

const ThreePillars = () => {
  const pillars = [
    {
      id: 'pillar1',
      emoji: '💻',
      title: 'Digital Innovation',
      description: 'Cutting-edge CLI tools and development resources for modern workflows.',
      image: digitalInnovation,
    },
    {
      id: 'pillar2',
      emoji: '🌱',
      title: 'Vital Assets',
      description: 'Essential products for sustainable living, wellness, and symbolic connection.',
      image: vitalAssets,
    },
    {
      id: 'pillar3',
      emoji: '🗳️',
      title: 'Transparent Governance',
      description: 'Democratic tools and frameworks for ethical decision-making.',
      image: transparentGovernance,
    },
  ];

  return (
    <section style={{
      padding: '3rem 1rem',
      backgroundColor: '#fefefe',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Three Pillars of Ethical Commerce
      </h2>
      <p style={{
        maxWidth: '700px',
        margin: '0 auto 3rem auto',
        fontSize: '1rem',
        color: '#555'
      }}>
        Our carefully curated categories represent the foundation of conscious business—digital innovation, vital sustainability, and transparent governance working together to create a better commercial ecosystem.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        {pillars.map((pillar) => (
          <div key={pillar.id} style={{
            width: '300px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            overflow: 'hidden',
            textAlign: 'left',
            transition: 'transform 0.2s ease-in-out'
          }}>
            <img
              src={pillar.image}
              alt={pillar.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>
                {pillar.emoji} {pillar.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreePillars;
