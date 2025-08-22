import React from 'react';
import { NavLink } from "react-router-dom";
import honey from '../../img/honey.jpg';
import moringa from '../../img/green-vitality.jpg';
import water from '../../img/healthy-habits.jpg';

  const products = [
    {
      id: 'lf001',
      title: 'Organic Honey',
      description:
        'Pure, natural honey sourced transparently from diverse regions of Bangladesh. Bottled with integrity for global distribution.',
      image: honey,
      price: 450,
    },
    {
      id: 'lf002',
      title: 'Moringa Powder',
      description:
        'Ethically harvested from local farmers. Packaged with zero tolerance for adulteration and distributed worldwide.',
      image: moringa,
      price: 380,
    },
    {
      id: 'lf003',
      title: 'Smart Water Bottle',
      description:
        'A hydration companion with built-in software to track intake, remind drinking times, and promote wellness rituals.',
      image: water,
      price: 1200,
    },
  ];
const LifeFuelSection = () => {


  const handleClick = () => {
  };

  return (
    <section
      style={{
        padding: '3rem 1rem',
        backgroundColor: '#f0fdf4',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌱 LifeFuel</h2>
        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1rem',
            color: '#444',
          }}
        >
          Essential products for sustainable living, wellness, and symbolic connection—each crafted with purity, purpose, and public proof.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
              <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>৳{product.price}</p>
             <NavLink to="product/LifeFuel">
              <button
                style={{
                  marginTop: '1rem',
                  padding: '0.6rem 1rem',
                  backgroundColor: '#22c55e',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                ➕ Add to Cart
              </button>
             </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeFuelSection;
