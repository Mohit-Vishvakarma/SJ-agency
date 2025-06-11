

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
};

const ServiceCTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlsLeft.start('visible');
      controlsRight.start('visible');
    }
  }, [isInView, controlsLeft, controlsRight]);

  return (
    <section className="py-16 bg-purple-light/10 text-black">
      <div className="container text-center" ref={ref}>
        <motion.h2
          className="text-3xl font-playfair mb-6"
          variants={slideLeft}
          initial="hidden"
          animate={controlsLeft}
        >
          Need a Custom Solution?
        </motion.h2>

        <motion.p
          className="text-gray-800 max-w-2xl mx-auto mb-8"
          variants={slideRight}
          initial="hidden"
          animate={controlsRight}
        >
          Let's discuss how our services can be tailored to meet your specific business requirements.
        </motion.p>

        <Button asChild className="bg-gold hover:bg-gold-dark text-white">
          <a href="/contact">
            Request a Custom Quote <ArrowRight size={16} className="ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ServiceCTA;
