import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaCarouselProps {
    title: string;
    media?: string[];
    onClose: () => void;
}

const getMediaType = (src: string) => {
    if (/\.(mp4|webm|ogg)$/i.test(src)) return 'video';
    if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(src)) return 'image';
    return 'unknown';
};

const getGridClass = (length: number) => {
    if (length === 1) return 'flex md:p-0 justify-center overflow-hidden items-center !h-[22rem]';
    if (length === 2) return 'flex md:grid md:grid-cols-2';
    if (length === 3) return 'flex md:grid md:grid-cols-3';
    if (length === 4) return 'flex md:grid md:grid-cols-4';
    return 'flex md:grid md:grid-cols-5';
};

const MediaCarousel: React.FC<MediaCarouselProps> = ({ title, media = [], onClose }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollByAmount = 400;

    const scroll = (dir: 'left' | 'right') => {
        scrollRef.current?.scrollBy({
            left: dir === 'right' ? scrollByAmount : -scrollByAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative my-1 md:my-0">
            <div ref={scrollRef} className="overflow-x-scroll md:overflow-hidden scrollbar-hide">
                {media.length > 0 ? (
                    <div className={cn('gap-1 p-1 items-center h-72 w-full md:h-full', getGridClass(media.length))}>
                        {media.map((src, idx) => {
                            const type = getMediaType(src);
                            return type === 'video' ? (
                                <video
                                    key={idx}
                                    controls
                                    muted
                                    // loop
                                    className="w-full h-60 sm:h-64 md:h-72 object-cover rounded-lg">
                                    <source src={src} type="video/mp4" />
                                </video>
                            ) : type === 'image' ? (
                                <img key={idx} src={src} alt={`${title} ${idx + 1}`} className="w-full object-cover rounded-lg" />
                            ) : null;
                        })}
                    </div>
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500">No Media Available</span>
                    </div>
                )}
            </div>

            {
                media.length > 1 && ['left', 'right'].map((dir) => (
                    <button
                        key={dir}
                        onClick={() => scroll(dir as 'left' | 'right')}
                        className={cn(
                            'absolute top-1/2 -translate-y-1/2 z-10 md:hidden',
                            dir === 'left' ? 'left-2' : 'right-2'
                        )}
                    >
                        <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center">
                            {dir === 'left' ? <ArrowLeft className="text-gold h-6 w-6" /> : <ArrowRight className="text-gold h-6 w-6" />}
                        </div>
                    </button>
                ))
            }

            <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Close modal"
            >
                <X size={24} />
            </button>
        </div >
    );
};

export default MediaCarousel;
