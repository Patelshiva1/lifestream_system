import React from 'react';
import { motion } from 'framer-motion';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2 className="title">Donate Blood, Save Lives</h2>
      <div className="hero-gallery">
        {[hero1, hero2, hero3].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`blood-campaign-${i}`}
            className="hero-img"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;