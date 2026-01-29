import { createDirectus, rest, staticToken } from '@directus/sdk';

// Base types for Directus collections
// You can expand these as you add more collections
export interface Schema {
    jackpot: any[];
    promotions: any[];
    blogs: any[];
    about_us: any;
    // Add more collections here
}

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://api-pallazo.tsx.vn';

// Create a Directus client
// Note: If you have a static token, you can add .with(staticToken('YOUR_TOKEN'))
export const directus = createDirectus<Schema>(DIRECTUS_URL)
    .with(rest());

/**
 * Common fetch options for Directus
 */
export const commonQueryOptions = {
    // You can add default fields, filters, etc. here
};
