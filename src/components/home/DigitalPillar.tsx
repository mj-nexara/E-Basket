import React from 'react';
import nexascendcli from '../../img/nexascendcli.jpg';
import NexAPI from '../../img/nexapi.jpg';
import NexSDLC from '../../img/nexsdlc.jpg';
import NexOSS from '../../img/nexoss.jpg';

const DigitalPillar = () => {
  const products = [
    {
      id: 'dp001',
      title: 'Nexascend CLI',
      description:
        'Advanced command-line interface for next-generation development workflows. Features integrated AI assistance, modular plugins, and seamless CI/CD integration.',
      image: nexascendcli,
    },
    {
      id: 'dp002',
      title: 'Nex API',
      description:
        'A secure, scalable API framework designed for ethical data exchange and modular commerce.',
      image: NexAPI,
    },
    {
      id: 'dp003',
      title: 'Nex SDLC',
      description:
        'Structured development lifecycle tools for ethical software creation.',
      image: NexSDLC,
    },
    {
      id: 'dp004',
      title: 'Nex OSS',
      description:
        'Open-source software suite supporting community-driven innovation.',
      image: NexOSS,
    },
  ];

  return (
    <section
      style={{
        padding: '3rem 1rem',
        backgroundColor: '#eef3ff',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻 Digital Pillar</h2>
        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1rem',
            color: '#555',
          }}
        >
          Cutting-edge digital solutions, CLI tools, and development resources for modern workflows.
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

export default DigitalPillar;
