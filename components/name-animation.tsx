'use client';

import {useEffect, useState} from 'react';

const NameAnimation = () => {
    const firstName ='SANTHOSH';
    const lastName = 'GUTTULA';
    const finalText = `${firstName} ${lastName}`;
    const [displayText, setDisplayText] = useState('N' + finalText.slice(1).replace(/[A-Z]/g, ' ')); // Start with N visible
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    useEffect(() => {
        const displayArray: string[] = Array(finalText.length).fill(' ').map((_, index) =>
            index === 0 ? 'S' : ' '
        );

        let currentPosition = 1; // Start from second letter

        const randomizeCurrentLetter = () => {
            while (currentPosition < finalText.length && finalText[currentPosition] === ' ') {
                currentPosition++;
            }

            if (currentPosition >= finalText.length) return;

            let randomCount = 0;
            const letterInterval = setInterval(() => {
                if (randomCount < 3) { // Reduced from 5 to 3 for better pace
                    displayArray[currentPosition] = alphabet[Math.floor(Math.random() * alphabet.length)];
                    setDisplayText(displayArray.join(''));
                    randomCount++;
                } else {
                    displayArray[currentPosition] = finalText[currentPosition];
                    setDisplayText(displayArray.join(''));
                    clearInterval(letterInterval);
                    currentPosition++;

                    if (currentPosition < finalText.length) {
                        setTimeout(randomizeCurrentLetter, 40); // Reduced from 50 to 40 for smoother animation
                    }
                }
            }, 40); // Reduced from 50 to 40 for smoother animation
        };

        // Start animating from second letter
        randomizeCurrentLetter();

        return () => {
            currentPosition = finalText.length; // Ensure cleanup halts any further animations
        };
    }, []);

    return (
        <span className="inline-flex select-none"> {/* Added select-none to prevent text selection during animation */}
            <span className="text-primary font-bold">
                {displayText.slice(0, firstName.length)}
            </span>
            <span className="mx-1"></span> {/* Consistent spacing between names */}
            <span className="font-bold">
                {displayText.slice(firstName.length + 1)}
            </span>
        </span>
    );
};

export default NameAnimation;