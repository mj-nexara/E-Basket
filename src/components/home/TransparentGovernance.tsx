import React from 'react';
import constitutionKit from '../../img/constitutionkit.jpg';
import lumidVault from '../../img/lumidvault.jpg';
import nexaraSdk from '../../img/nexarasdk.jpg';
import nexvote from '../../img/nexvote.jpg';

const TransparentGovernance = () => {
  const tools = [
    {
      id: 'tg001',
      title: '📘 Constitution Kit',
      description:
        'Complete framework for transparent organizational governance. Includes templates, decision protocols, and ethical charters.',
      image: constitutionKit,
    },
    {
      id: 'tg002',
      title: '🗳️ NexVote',
      description:
        'Democratic decision-making platform for communities and organizations.',
      image: nexvote,
    },
    {
      id: 'tg003',
      title: '🔐 Lumid Vault',
      description:
        'Secure document storage and management system. Designed for transparency and traceability.',
      image: lumidVault,
    },
    {
      id: 'tg004',
      title: '💡 Nexara SDK',
      description:
        'Software development kit for building governance tools and integrations.',
      image: nexaraSdk,
    },
  ];

  return (
    <section
      style={{
        padding: '3rem 1rem',
        backgroundColor: '#f8f8fc',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏛️ Transparent Governance</h2>
        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1rem',
            color: '#444',
          }}
        >
          Governance is the backbone of ethical commerce. NexaraOne empowers communities to lead with transparency and trust.
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
        {tools.map((tool) => (
          <div
            key={tool.id}
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
              src={tool.image}
              alt={tool.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{tool.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransparentGovernance;
