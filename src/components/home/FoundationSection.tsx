import React from 'react';

const FoundationSection = () => {
  const pillars = [
    {
      id: 'digital',
      icon: '💻',
      title: 'Digital Innovation',
      description:
        'Cutting-edge CLI tools and development resources for modern workflows.',
    },
    {
      id: 'vital',
      icon: '🌱',
      title: 'Vital Assets',
      description:
        'Essential products for sustainable living, wellness, and symbolic connection.',
    },
    {
      id: 'governance',
      icon: '🗳️',
      title: 'Transparent Governance',
      description:
        'Democratic tools and frameworks for ethical decision-making.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#f1f5f9',
        padding: '4rem 1rem',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#0f172a' }}>
          🏛️ Foundation of Ethical Commerce
        </h2>
        <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '3rem' }}>
          Our carefully curated categories represent the foundation of conscious business—
          digital innovation, vital sustainability, and transparent governance working together
          to create a better commercial ecosystem.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                textAlign: 'left',
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                {pillar.icon} {pillar.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569' }}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
