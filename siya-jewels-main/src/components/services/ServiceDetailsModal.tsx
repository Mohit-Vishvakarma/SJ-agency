

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import MediaCarousel from './MediaCarousel';

interface ServiceDetailsModalProps {
    item: {
        title: string;
        description: string;
        media?: string[];
    };
    category: string;
    onClose: () => void;
}

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);
const isImage = (src: string) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(src);

const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({ item, category, onClose }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollByAmount = 400;

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'right' ? scrollByAmount : -scrollByAmount,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        // Lock body scroll when modal is open
        document.body.style.overflow = 'hidden';

        // Push a new state to history
        const state = { modal: true };
        window.history.pushState(state, '');

        // Listen for browser back button
        const handlePopState = () => {
            onClose();
        };
        window.addEventListener('popstate', handlePopState);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('popstate', handlePopState);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
                <MediaCarousel title={item.title} media={item.media} onClose={onClose} />
                <div className="p-6">
                    <div className="mb-4">
                        <p className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full mb-2">
                            {category}
                        </p>
                        <h2 className="text-2xl font-playfair">{item.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-6">{item.description}</p>
                    <div className="flex justify-end mt-6">
                        <Button variant="outline" onClick={onClose} className="mr-2">
                            Close
                        </Button>
                        <Button asChild className="bg-gold hover:bg-gold-dark text-white">
                            <a href="/contact">Request Similar</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsModal;
