

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
}

interface PortfolioCardProps {
    item: PortfolioItem;
    onClick: (item: PortfolioItem) => void;
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
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
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className=" group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-gold transition-all duration-500 transform"
            onClick={() => onClick(item)}
        >
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/90 via-purple-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-gold/80 text-white text-xs rounded-full mb-2">
                    {item.category}
                </span>
                <h3 className="text-white text-xl font-playfair mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;
