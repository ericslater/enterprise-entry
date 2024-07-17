'use client'
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const SlaterHeader = () => {
    const [text] = useTypewriter({
        words: ['Artificial Intelligence', 'Tech Roadmapping', 'Software Architecture'],
        loop: 0, // Set to 0 for infinite loop
        typeSpeed: 70,
        deleteSpeed: 0,
        delaySpeed: 2000,
    });

    return (
        <header className="w-full bg-blue-600 py-6">
            <h1 className="text-6xl font-extrabold text-white text-center">
                SL<span className="text-yellow-400">ai</span>TER
            </h1>
            <p className="text-xl text-white text-center">
                Applied{' '}
                <span className="text-yellow-400 font-bold">
                    {text}
                    <Cursor />
                </span>
            </p>
            <p className="text-xl text-white text-center">For Your Business.</p>
        </header>
    );
};

export default SlaterHeader;