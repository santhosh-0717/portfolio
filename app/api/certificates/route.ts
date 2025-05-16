// app/api/certificates/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Certificate } from '@/lib/models/Certificates';

export async function GET() {
    try {
        await dbConnect();
        console.log('Connected to database');

        const certificates = await Certificate.find({});

        return NextResponse.json({ success: true, data: certificates });
    } catch (error) {
        console.error('Error fetching certificates:', error);
        return NextResponse.json(
            { success: false, error: 'Error fetching certificates' },
            { status: 500 }
        );
    }
}

