// app/lib/data.ts
export async function getCertificates() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl) {
            throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
        }

        const response = await fetch(`${baseUrl}/api/certificates`, {
            next: { revalidate: 3600 },
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch certificates');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching certificates:', error);
        return [];
    }
}

export async function getWorkshops() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl) {
            throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
        }

        const response = await fetch(`${baseUrl}/api/workshops`, {
            next: { revalidate: 3600 },
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch workshops');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching workshops:', error);
        return [];
    }
}