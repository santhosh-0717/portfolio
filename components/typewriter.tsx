'use client';

import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
    return (
        <TypeAnimation
            sequence={[
                'Designer',
                2000,
                'Photographer',
                2000,
                'Gamer',
                2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl font-bold"
        />
    );
};

export default TypeWriter;