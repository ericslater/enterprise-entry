'use client'
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const SlaterHeader = () => {
    const [text] = useTypewriter({
        words: ['Artificial Intelligence', 'Tech Roadmapping', 'Software Architecture'],
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 0,
        delaySpeed: 2000,
    });

    return (
        <header className="w-full bg-primary py-12">
            <h1 className="text-7xl font-extrabold text-text text-center">
                SL<span className="text-secondary">ai</span>TER
            </h1>
            <p className="text-2xl text-text text-center mt-4">
                Applied{' '}
                <span className="text-secondary font-bold">
                    {text}
                    <Cursor cursorColor="#4CAF50" />
                </span>
            </p>
            <p className="text-2xl text-text text-center mt-2">For Your Business.</p>
        </header>
    );
};

export default SlaterHeader;