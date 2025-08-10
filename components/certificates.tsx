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

       <CertificateCard
                companyName="cisco"
                recipientName="sai ram santhosh guttula"
                courseName="python essentials 2"
                issueDate={new Date('2025-05-31')}
                certificateId=""
                certLink="https://drive.google.com/file/d/1hOP6-39QwNhx4HGHb_OTOAcL_SKsx4Wl/preview"

            /> 
        </div>

    );
}
