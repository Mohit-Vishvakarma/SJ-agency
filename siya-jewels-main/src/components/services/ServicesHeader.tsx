

import React, { Suspense, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServicesHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  serviceCategories: any[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
});

const fadeRight = (delay: number = 0) => ({
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay } },
});

const ServicesHeader: React.FC<ServicesHeaderProps> = ({
  activeCategory,
  onCategoryChange,
  serviceCategories,
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      className="container py-12 pb-0"
      variants={fadeUp}
      initial="hidden"
      animate={controls}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <motion.div variants={fadeLeft(0.2)}>
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">
            Our <span className="text-gold">Services</span>
          </h1>

          <motion.p
            className="text-gray-700 max-w-2xl mb-10"
            variants={fadeLeft(0.4)}
          >
            From Jewellery design to cutting-edge technology solutions, we offer a wide range of premium services designed to elevate your business.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 md:gap-4 mb-12"
            variants={fadeLeft(0.6)}
          >
            <button
              onClick={() => onCategoryChange('all')}
              className={cn(
                'px-4 py-2 rounded-full text-sm md:text-base transition-colors',
                activeCategory === 'all'
                  ? 'bg-gold text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              )}
            >
              All Services
            </button>

            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm md:text-base transition-colors',
                  activeCategory === category.id
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                )}
              >
                {category.title}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesHeader;
