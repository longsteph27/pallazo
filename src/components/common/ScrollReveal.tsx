'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    delay?: number;
    distance?: number;
    once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    direction = 'up',
    duration = 0.8,
    delay = 0,
    distance = 50,
    once = true,
    ...props
}) => {
    const getInitialProps = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: distance };
            case 'down':
                return { opacity: 0, y: -distance };
            case 'left':
                return { opacity: 0, x: distance };
            case 'right':
                return { opacity: 0, x: -distance };
            case 'none':
                return { opacity: 0 };
            default:
                return { opacity: 0, y: distance };
        }
    };

    return (
        <motion.div
            className="w-full"
            initial={getInitialProps()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: '-10% 0px -10% 0px' }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
