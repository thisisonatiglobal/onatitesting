"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = document.getElementById('features').offsetTop;
      setIsVisible(scrollTop > offsetTop - window.innerHeight / 2);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="features" className="py-8 md:py-20 lg:py-28 px-4 md:px-20 lg:px-28 bg-white dark:bg-black">
        <div className="container relative z-10">
          <div className="relative">
            <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/usp_img/promise.jpg')" }}></div>
            <motion.div className="shadow-2xl rounded-full bg-transparent dark:bg-transparent" initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }} transition={{ duration: 1.5 }}>
              <SectionTitle
                title="Our Promise"
                paragraph="At OGIFT Bangalore, we're committed to providing an unparalleled learning experience. Our approach is built on six pillars."
                center
              />
            </motion.div>
            <motion.div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 bg-transparent dark:bg-transparent rounded-2xl p-5" initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }} transition={{ duration: 1.5 }}>
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
