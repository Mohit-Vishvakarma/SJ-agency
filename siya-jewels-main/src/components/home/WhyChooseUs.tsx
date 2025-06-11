import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  { title: 'Dual Expertise', description: 'Unique combination of Jewellery industry knowledge and technical prowess' },
  { title: 'Premium Quality', description: 'High-end designs and development with attention to detail' },
  { title: 'Custom Solutions', description: "Tailored approaches for each client's specific needs" },
  { title: 'Modern Technologies', description: 'Latest tools and frameworks for optimal performance' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
    },
  }),
};

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-gold font-playfair text-3xl md:text-4xl mb-4">Why Choose Us</h2>
          <p className="text-charcoal text-lg">
            We combine artistry with technology to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-gold/50 transition-colors duration-300 hover:shadow-gold"
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={cardVariants}
              custom={index}
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Check className="text-gold" />
              </div>
              <h3 className="font-playfair text-xl mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
