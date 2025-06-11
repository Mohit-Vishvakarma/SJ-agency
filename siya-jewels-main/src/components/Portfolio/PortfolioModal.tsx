import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface PortfolioModalProps {
    item: {
        title: string;
        image: string;
        description: string;
        category: string;
        link: string;
    };
    onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
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
                <div className="relative overflow-hidden">
                    <div className="w-full flex p-0 justify-center items-center ">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover"
                        />
                    </div>
                    <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors" >
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    <div className="mb-4">
                        <p className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full mb-2">
                            {item.category}
                        </p>
                        <h2 className="text-2xl font-playfair">{item.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-6">{item.description}</p>
                    {/* <div className="border-t border-gray-200 pt-6 mt-6">
                        <h3 className="font-medium mb-4">Project Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <span className="font-medium w-24">Client:</span>
                                <span className="text-gray-600">Confidential</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium w-24">Date:</span>
                                <span className="text-gray-600">2023</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium w-24">Services:</span>
                                <span className="text-gray-600">{item.category}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium w-24">Duration:</span>
                                <span className="text-gray-600">4 weeks</span>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex justify-end mt-6">
                        <Button variant="outline" onClick={onClose} className="mr-2">
                            Close
                        </Button>
                        <Button asChild className="bg-gold hover:bg-gold-dark text-white">
                            <a href={item.link} target="_blank">View Project</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;

