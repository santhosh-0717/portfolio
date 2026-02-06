'use client';
import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {TechLogosAnimation} from './tech-logos-animation';

const PageLoader = ({children}: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-md">
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6}}
                    className="w-full max-w-sm"
                >
                    <TechLogosAnimation />
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.8, duration: 0.5}}
                    className="mt-12 flex flex-col items-center gap-3"
                >
                    <h2 className="text-xl font-semibold text-foreground">Welcome</h2>
                    <motion.div
                        animate={{opacity: [0.6, 1, 0.6]}}
                        transition={{duration: 1.5, repeat: Infinity}}
                        className="text-sm text-foreground/60"
                    >
                        Loading your portfolio...
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return <>{children}</>;
};

export default PageLoader;