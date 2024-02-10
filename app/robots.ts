import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: "https://stream-jet.vercel.app/nextjs-app-router-sitemap/sitemap.xml",
    }
}