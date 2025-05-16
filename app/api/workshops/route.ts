// app/api/workshops/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Workshop } from '@/lib/models/Workshop';

export async function GET() {
    try {
        await dbConnect();
        const workshops = await Workshop.find({}).sort({ startDate: -1 });
        return NextResponse.json({ success: true, data: workshops });
    } catch (error) {
        console.error('Error fetching workshops:', error);
        return NextResponse.json(
            { success: false, error: 'Error fetching workshops' },
            { status: 500 }
        );
    }
}