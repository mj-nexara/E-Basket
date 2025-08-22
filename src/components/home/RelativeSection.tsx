import React from 'react';

const RelativeSection = () => {
  const pillars = [
    {
      id: 'pillar01',
      title: '🧭 Modular Integrity',
      description:
        'Every component is designed to be inheritable, auditable, and ethically aligned. No shortcuts. No opacity.',
    },
    {
      id: 'pillar02',
      title: '📦 Transparent Commerce',
      description:
        'Products are not just items—they are public artifacts of trust. Every transaction is traceable and documented.',
    },
    {
      id: 'pillar03',
      title: '🧬 Contributor Dignity',
      description:
        'From the smallest commit to the largest delivery, every contributor is honored and every action is logged.',
    },
    {
      id: 'pillar04',
      title: '🌿 Sovereign Systems',
      description:
        'Built for autonomy and clarity. No central gatekeepers. Every node is a dignified participant in the ecosystem.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#f8fafc',
        padding: '4rem 1rem',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#0f172a' }}>
          🧱 EthicBasket Pillars
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                textAlign: 'left',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569' }}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelativeSection;
