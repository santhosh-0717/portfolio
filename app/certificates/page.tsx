// app/certificates/page.tsx
import {Suspense} from 'react';
import CertificateCard from "@/components/certificate-card";
import Link from 'next/link';
import {getCertificates} from '@/lib/data';
import {Loading} from '@/components/ui/loading';
import {ArrowLeftIcon} from "lucide-react";
import Button from "@/components/goBack";
import TextShimmerColor from "@/components/heading-text";

async function CertificatesSection() {
    const certificates = await getCertificates();

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {certificates.map((cert: any) => (
                    <CertificateCard
                        key={cert._id}
                        companyName={cert.companyName}
                        recipientName={cert.recipientName}
                        courseName={cert.courseName}
                        issueDate={new Date(cert.issueDate)}
                        certificateId={cert.certificateId}
                        certLink={cert.certLink}
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
                <TextShimmerColor>Certificates </TextShimmerColor>
            </h2>

            <Suspense fallback={<Loading/>}>
                <CertificatesSection/>
            </Suspense>
        </div>
    );
}