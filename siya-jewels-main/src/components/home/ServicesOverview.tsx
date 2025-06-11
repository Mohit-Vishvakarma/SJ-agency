import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code, Watch, PenTool, Bot, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ExpertiseCard from './ExpertiseCard';

const serviceCategories = [
  {
    id: 'tech',
    title: 'Tech',
    icon: Code,
    gradient: 'from-blue-500 to-purple-500',
    description: 'Websites, E-commerce platforms, and Mobile apps development for modern businesses.'
  },
  {
    id: 'jewellery',
    title: 'Jewellery',
    icon: Watch,
    gradient: 'from-gold-light to-gold-dark',
    description: 'Expert CAD designing, 3D rendering, and premium Jewellery design solutions.'
  },
  {
    id: 'creative',
    title: 'Creative',
    icon: PenTool,
    gradient: 'from-pink-500 to-purple-500',
    description: 'Professional photography, animated videos and social media marketing assets.'
  },
  {
    id: 'ai',
    title: 'AI',
    icon: Bot,
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Smart chatbots, WhatsApp automation, and AI-powered business solutions.'
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: Briefcase,
    gradient: 'from-amber-500 to-red-500',
    description: 'Logo design and trademark registration assistance for your business identity.'
  }
];

const ServicesOverview = () => {
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
      className="py-20 px-4 sm:px-6 bg-gray-50"
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to this state when visible
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-gold font-playfair text-3xl md:text-4xl mb-4">Our Expertise</h2>
          <p className="text-charcoal text-lg">
            Discover our wide range of premium services designed to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceCategories.map((category, index) => (
            <ExpertiseCard
              id={category.id}
              title={category.title}
              icon={category.icon}
              description={category.description}
              gradient={category.gradient}
            />
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state for the button
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to this state when visible
            transition={{ duration: 0.5, delay: isVisible ? serviceCategories.length * 0.1 : 0 }} // Delay to appear after cards
          >
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <Link to="/services">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesOverview;
