import WorkshopCertificateCard from "@/components/workshop-card";

export default function Workshops() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <WorkshopCertificateCard
                companyName="IBM Participation"
                recipientName="Nagendra Kumar Gubbala"
                courseName="Artificial Intelligence And Machine Learning"
                isworkshop={false}
                startDate={new Date()}
                endDate={new Date()}
                certificateId=""
                certLink="https://drive.google.com/file/d/1m6-THl8Xb5xEnnTibNU5gFj-IVY-XoGz/preview"
            />
            <WorkshopCertificateCard
                companyName="IBM Completion"
                recipientName="Nagendra Kumar Gubbala"
                courseName="Artificial Intelligence And Machine Learning"
                isworkshop={false}
                startDate={new Date()}
                endDate={new Date()}
                certificateId=""
                certLink="https://drive.google.com/file/d/1lzcDGZbmegz3thjG4HsLKOK_tmTOf-f6/preview"
            />

        </div>
    );
}