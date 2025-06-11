import React from 'react';
import { motion } from 'framer-motion';

const robotoFontLink = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";

const AboutUs = () => {
  React.useEffect(() => {
    if (!document.getElementById('roboto-font')) {
      const link = document.createElement('link');
      link.id = 'roboto-font';
      link.rel = 'stylesheet';
      link.href = robotoFontLink;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        padding: '2rem',
        maxWidth: '700px',
        margin: '2rem auto',
        textAlign: 'left',         // Changed here
        fontFamily: "'Roboto', sans-serif",
        color: '#333',
        lineHeight: 1.6,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '2rem', color: '#c62828' }}>
        About Us
      </h2>
      <p style={{ fontWeight: 400, fontSize: '1.1rem' }}>
        Our Blood Bank Management System is designed to streamline and digitize the process of
        blood donation, storage, and distribution. We aim to bridge the gap between blood donors
        and recipients through a reliable, transparent, and efficient platform. By integrating modern
        technology, we simplify donor registration, manage blood requests, and ensure timely availability 
        of blood to those in need. Our mission is to save lives by building a connected and responsive 
        blood donation network that empowers communities, hospitals, and individuals with critical access to safe blood.
      </p>
    </motion.div>
  );
};

export default AboutUs;
