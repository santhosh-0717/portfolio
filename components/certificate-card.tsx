import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

import CertificateViewer from "@/components/certificate-view";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

interface CertificateCardProps {
    companyName: string;
    recipientName: string;
    courseName: string;
    issueDate: Date;
    certificateId?: string;
    certLink: string;
}

export default function CertificateCard({
                                            companyName,
                                            recipientName,
                                            courseName,
                                            issueDate,
                                            certificateId,
                                            certLink
                                        }: CertificateCardProps) {
    return (
        <Card className="overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:scale-105">
            <CardHeader>
                <CardTitle className="text-primary">{companyName}</CardTitle>
                <CardDescription>
                    {certificateId && `Certificate ID: ${certificateId}`}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">This certifies that</p>
                    <h2 className="text-2xl font-bold mt-2">{recipientName}</h2>
                    <p className="text-sm text-muted-foreground mt-4">
                        has successfully completed the course
                    </p>
                    <h3 className="text-xl font-semibold mt-2">
                        {courseName}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-4">
                        Awarded on {issueDate?.toLocaleDateString()}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button  size="sm" className="border-primary">
                            View Certificate
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-4xl max-h-[90vh] overflow-auto">
                        <DialogHeader>
                            <DialogTitle className="text-center text-lg md:text-xl">
                                Certificate Preview
                            </DialogTitle>
                        </DialogHeader>
                        <div className="flex justify-center items-center">
                            <CertificateViewer link={certLink}/>
                        </div>
                    </DialogContent>
                </Dialog>

            </CardFooter>
        </Card>
    );
}