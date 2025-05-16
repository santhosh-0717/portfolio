'use client';
import React from 'react';

const Button = () => {
    return (
        <button
            className="bg-background text-center w-36 rounded-xl h-10 relative text-base font-semibold group"
            type="button" onClick={() => window.history.back()}>
            <div
                className="bg-primary rounded-lg h-8 w-1/4 flex items-center justify-center absolute left-1 top-[4px] ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="18px" width="18px">
                    <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"/>
                    <path
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                        fill="#000000"/>
                </svg>
            </div>
            <p className="translate-x-1">Go Back</p>
        </button>
    );
}

export default Button;