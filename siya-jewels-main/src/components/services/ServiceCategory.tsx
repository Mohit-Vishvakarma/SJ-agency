

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceDetailsModal from '@/components/services/ServiceDetailsModal';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceItem {
  id: string;
  title: string;
  icon: any;
  description: string;
  benefits: string[];
  image?: string;
  category: string;
}

interface ServiceCategoryProps {
  id: string;
  title: string;
  color: string;
  description: string;
  services: ServiceItem[];
  isLoaded: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  id,
  title,
  color,
  description,
  services,
  isLoaded,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id={id}
      className={cn(
        'py-8',
        id === 'tech' || id === 'creative' || id === 'branding'
          ? 'bg-white'
          : 'bg-purple-light/5'
      )}
    >
      <div className="container">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="mb-10"
        >
          <h2
            className={cn(
              'text-3xl font-playfair mb-3',
              `bg-gradient-to-r ${color} text-transparent bg-clip-text`
            )}
          >
            {title}
          </h2>
          <p className="text-gray-700">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                'opacity-0 translate-y-8',
                isLoaded && 'opacity-100 translate-y-0 transition-all duration-700',
                isLoaded && `transition-delay-[${index * 100}ms]`
              )}
            >
              <ServiceCard
                title={service.title}
                icon={service.icon}
                description={service.description}
                benefits={service.benefits}
                categoryId={id}
                categoryColor={color}
                onLearnMore={() => {
                  setSelectedService({ ...service, category: title });
                  document.body.style.overflow = 'hidden';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceDetailsModal
          item={selectedService}
          category={selectedService.category}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default ServiceCategory;
