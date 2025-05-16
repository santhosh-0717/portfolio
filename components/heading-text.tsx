import {TextShimmer} from '@/components/ui/text-shimmer';

interface TextShimmerColorProps {
    children: string;
}

function TextShimmerColor({children}: TextShimmerColorProps) {
    return (
        <TextShimmer
            duration={1.2}
            className='[--base-color:theme(colors.violet.500)] [--base-gradient-color:theme(colors.violet.100)] dark:[--base-color:theme(colors.violet.600)] dark:[--base-gradient-color:theme(colors.violet.300)]'
        >
            {children}
        </TextShimmer>
    );
}

export default TextShimmerColor;
