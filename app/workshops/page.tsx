// app/certificates/page.tsx
import {Suspense} from 'react';

import WorkshopCard from "@/components/workshop-card";
import {getWorkshops} from '@/lib/data';
import {Loading} from '@/components/ui/loading';
import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import Button from "@/components/goBack";
import TextShimmerColor from "@/components/heading-text";


async function WorkshopsSection() {
    const workshops = await getWorkshops();

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {workshops.map((workshop: any) => (
                    <WorkshopCard
                        key={workshop._id}
                        companyName={workshop.companyName}
                        recipientName={workshop.recipientName}
                        courseName={workshop.courseName}
                        isworkshop={workshop.isworkshop}
                        startDate={new Date(workshop.startDate)}
                        endDate={new Date(workshop.endDate)}
                        certificateId={workshop.certificateId}
                        certLink={workshop.certLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default function CertificatesPage() {
    return (
        <div className="container mx-auto p-4 sm:p-6">
            <Button/>
            <h2 className="text-3xl font-bold flex-1 text-center my-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                <TextShimmerColor>Workshops & Training</TextShimmerColor>
            </h2>

            <Suspense fallback={<Loading/>}>
                <WorkshopsSection/>
            </Suspense>
        </div>
    );
}