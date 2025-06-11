import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-purple-light/10 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to this state when visible
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gold opacity-10"
        initial={{ opacity: 0, scale: 0.5 }} // Initial state
        animate={isVisible ? { opacity: 1, scale: 1 } : {}} // Animate to this state when visible
        transition={{ duration: 0.5, delay: 0.2 }} // Duration and delay of the animation
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gold opacity-10"
        initial={{ opacity: 0, scale: 0.5 }} // Initial state
        animate={isVisible ? { opacity: 1, scale: 1 } : {}} // Animate to this state when visible
        transition={{ duration: 0.5, delay: 0.4 }} // Duration and delay of the animation
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }} // Initial state
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to this state when visible
            transition={{ duration: 0.5, delay: 0.6 }} // Duration and delay of the animation
          >
            <h2 className="font-playfair text-3xl md:text-4xl mb-6">
              About <span className="text-gold">Siya Jewels Infotech</span>
            </h2>
            <p className="mb-6 text-gray-700">
              Founded by Harish Soni, Siya Jewels Infotech combines deep expertise in both the Jewellery industry and cutting-edge technology solutions. Our unique dual specialization allows us to offer services that truly understand the specific needs of jewelers while delivering the latest in digital innovation.
            </p>
            <p className="mb-8 text-gray-700">
              We bridge the gap between traditional Jewellery craftsmanship and modern technology, helping businesses transform and thrive in the digital age.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <Link to="/about">
                Know More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 20 }} // Initial state
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to this state when visible
            transition={{ duration: 0.5, delay: 0.8 }} // Duration and delay of the animation
          >
            <div className="w-full h-80 bg-purple-dark rounded-lg relative overflow-hidden shadow-gold">
              {/* Placeholder for founder image */}
              <img src="/assets/images/owner01.jpg" alt="" className='h-[350px] md:h-[510px] lg:h-[525px]  xl:h-[600px] object-cover w-screen' />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-playfair text-2xl mb-1">Harish Soni</h3>
                <p className="text-gold">Founder, Siya Jewels Infotech</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutOverview;
