"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface CertificateViewerProps {
    link: string;
}

export default function CertificateViewer({ link }: CertificateViewerProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative flex justify-center items-center">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            )}
            <iframe
                src={link}
                className="w-auto h-[400px] md:w-[400px] md:h-[500px]"
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
}