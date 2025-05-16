import CertificateCard from "@/components/certificate-card";

export default function Certificates() {
    return (


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CertificateCard
                companyName="Cisco"
                recipientName="Guttula Sairam Santhosh"
                courseName="Python Essentials 1"
                issueDate={new Date('2025-05-06')}
                certificateId=""
                certLink="https://drive.google.com/file/d/14cRcnxyCQ_Lv2kk_lBgosP_R75S3irCv/preview"
            />

            {/* <CertificateCard
                companyName="Infosys"
                recipientName="Nagendra Kumar Gubbala"
                courseName="Continuous Integration and Delivery - DevOps"
                issueDate={new Date('2024-07-21')}
                certificateId=""
                certLink="https://drive.google.com/file/d/1alL5i1iCAOUWBwbZn8ZwPHmXWCzTipib/preview"
            /> */}


        </div>

    );
}