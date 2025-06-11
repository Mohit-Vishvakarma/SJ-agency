import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
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
      className="py-20 bg-neutral-50 text-black relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Background decorative element */}
      <motion.div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMzAgMzAgbDMwIC0zMCBMMzAgMzAgbC0zMCAtMzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-30"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.3 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Whether you need Jewellery design or tech solutions, we're here to help transform your vision into reality.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="tel:8652429808"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gold/20 hover:bg-gold/30 rounded-md transition-colors duration-300"
            >
              <Phone size={20} className="text-gold" />
              <span>+91 8652429808</span>
            </a>
            <a
              href="mailto:Harish@siyajewelsinfotech.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gold/20 hover:bg-gold/30 rounded-md transition-colors duration-300"
            >
              <Mail size={20} className="text-gold" />
              <span>Harish@siyajewelsinfotech.com</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-white">
              <Link to="/contact">
                Get in Touch <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
