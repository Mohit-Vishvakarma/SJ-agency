import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  categoryId: string;
  categoryColor: string;
  onLearnMore?: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon: Icon,
  description,
  benefits,
  categoryId,
  categoryColor,
  onLearnMore,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      className="h-full"
    >
      <Card className="flex flex-col justify-between border-0 overflow-hidden h-full transform transition-all duration-500 hover:-translate-y-1 hover:shadow-gold">
        <CardHeader className={cn('bg-gradient-to-r p-6', categoryColor)}>
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 relative">
            <Icon className="text-white h-7 w-7 relative z-10" />
          </div>
          <h3 className="text-white text-xl font-playfair">{title}</h3>
        </CardHeader>

        <CardContent className="flex flex-col justify-between flex-grow pt-6">
          <div>
            <p className="text-gray-700 mb-6">{description}</p>
            <h4 className="font-medium mb-3">Key Benefits:</h4>
            <ul className="space-y-2 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gold"></div>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button
            asChild
            variant="outline"
            onClick={onLearnMore}
            className="w-full border-gold text-gold hover:bg-gold/10 mt-auto cursor-pointer"
          >
            <p>Learn More</p>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
