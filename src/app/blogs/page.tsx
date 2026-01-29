

import React from 'react';
import BlogBanner from '@/features/blogs/components/BlogBanner';
import BlogGrid from '@/features/blogs/components/BlogGrid';

export default function BlogsPage() {
    return (
        <main className="min-h-screen">
            {/* Banner Section */}
            <BlogBanner />

            {/* Blogs Grid Section */}
            <BlogGrid />
        </main>
    );
}
