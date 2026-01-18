'use client';
import React, {useState} from "react";
import Link from "next/link";
import {Download} from "lucide-react";
import {Button} from "@/components/ui/button";

export function DownloadResumeButton() {
    const [downloading, setDownloading] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setDownloading(true);

        setTimeout(() => {
            setDownloading(false);
        }, 2500); // simulate download time
    };

    return (
        <Button asChild size="sm" variant="outline" className="flex" disabled={downloading}>
            <Link
                href="santhosh_resume.pdf"
                download="santhosh_resume.pdf"
                target="_blank"
                onClick={handleClick}
            >
                {downloading ? (
                    <span className="flex items-center">
                        <span
                            className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-500 mx-2"></span>

                    </span>
                ) : (
                    <>
                        Resume <Download className="ml-1 md:ml-2 h-4 w-4"/>
                    </>
                )}
            </Link>
        </Button>
    );
}
