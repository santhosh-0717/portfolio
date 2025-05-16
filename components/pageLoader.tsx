'use client';
import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

const PageLoader = ({children}: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) return null;

    if (isLoading) {
        return (
            <div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-background to-background/90 backdrop-blur-sm">
                <div className="relative">
                    <motion.div
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        className="flex flex-col items-center gap-8"
                    >
                        <div className="flex gap-3">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{y: 0}}
                                    animate={{
                                        y: [-20, 0, -20],
                                        backgroundColor: ['#3b82f6', '#8b5cf6', '#3b82f6']
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                    className="h-4 w-4 rounded-full bg-blue-500"
                                />
                            ))}
                        </div>
                        <motion.div
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5}}
                            className="text-foreground/80 font-medium tracking-wider text-sm"
                        >
                            Loading...
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default PageLoader;