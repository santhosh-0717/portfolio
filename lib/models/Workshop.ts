// app/lib/models/Workshop.ts
import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
    companyName: String,
    recipientName: String,
    courseName: String,
    isworkshop: Boolean,
    startDate: Date,
    endDate: Date,
    certificateId: String,
    certLink: String
}, {
    timestamps: true
});

export const Workshop = mongoose.models.Workshops || mongoose.model('Workshops', workshopSchema);
