import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
    companyName: String,
    recipientName: String,
    courseName: String,
    issueDate: Date,
    certificateId: String,
    certLink: String
}, {
    timestamps: true
});

export const Certificate = mongoose.models.Certificates || mongoose.model('Certificates', certificateSchema);
