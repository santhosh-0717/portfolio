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
                companyName="Letsupgrade"
                recipientName="sai ram santhosh guttula"
                courseName="python Bootcamp"
                issueDate={new Date('2025-05-31')}
                certificateId="LUEPYTMAY1251760"
                certLink="https://drive.google.com/file/d/1xUwrd4O6yornR39GpFk6iKLg67cpVPiS/preview"
             />
               <CertificateCard
                companyName="cicso"
                recipientName="sai ram santhosh guttula"
                courseName="Essentials 2"
                issueDate={new Date('2025-06-08')}
                certificateId=""
                certLink="https://drive.google.com/file/d/1hOP6-39QwNhx4HGHb_OTOAcL_SKsx4Wl/preview"
            /> 
               <CertificateCard
                companyName="lets upgrade "
                recipientName="sai ram santhosh guttula"
                courseName="GEN AI"
                issueDate={new Date('2025-06-02')}
                certificateId="LUEGENMAR1251066"
                certLink="https://drive.google.com/file/d/1LoBiY7W5TNjL7i-VYmVNhTuO_A8IsDYN/preview"
            />
        </div>

    );
}
