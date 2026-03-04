import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, title, images }) => {
    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-[2px] cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-[95vw] max-w-7xl max-h-[95vh] bg-[#111111] border border-[#333333] rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#333333] bg-[#000000]/50 z-10 shrink-0">
                            <h2 className="text-2xl font-black text-[#FF3FA4] tracking-widest uppercase truncate">{title}</h2>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF3FA4]/20 hover:rotate-90 transition-all duration-300 border border-[#333333] text-[#CFCFCF] hover:text-[#FF3FA4] shrink-0 ml-4"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Images Grid Area */}
                        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar bg-[#000000]/50">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start">
                                {/* All images mapped out in a row */}
                                {images.map((img, idx) => (
                                    <div key={idx} className="w-full flex justify-center sticky top-4">
                                        <img
                                            src={img}
                                            alt={`${title} detail ${idx + 1}`}
                                            className="w-full max-w-sm xl:max-w-md h-auto rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] object-contain border border-[#333333] transition-transform duration-500 hover:scale-[1.02]"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EventModal;
