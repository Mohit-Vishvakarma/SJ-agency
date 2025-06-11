import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom'; // adjust if you're using next/link instead

interface ExpertiseCardProps {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    gradient: string; // e.g., 'from-purple-500 to-pink-500'
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ id, title, icon: Icon, description, gradient }) => {
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
            className="group"
        >
            <Card className="luxury-card h-full transition-all hover:-translate-y-1 duration-300 overflow-hidden border-0 bg-white">
                <CardHeader className={cn(`bg-gradient-to-r p-6`, gradient)}>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                        <Icon className="text-white h-8 w-8" />
                    </div>
                    <CardTitle className="text-white text-xl font-playfair">{title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-6">
                    <p className="text-gray-600">{description}</p>
                </CardContent>

                <CardFooter>
                    <Link
                        to={`/services#${id}`}
                        className="text-gold hover:text-gold-dark flex items-center font-medium"
                    >
                        Learn More <ArrowRight size={16} className="ml-1" />
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default ExpertiseCard;
