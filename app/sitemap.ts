import { MetadataRoute } from "next";

const SITE_URL = 'https://stream-jet.vercel.app';
export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/nextjs-app-router-sitemap/about`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/nextjs-app-router-sitemap/support`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/nextjs-app-router-sitemap/Movies`,
            lastModified: new Date()
        },
        {
            url: `${SITE_URL}/subscription`,
            lastModified: new Date()
        },
        {
            url: `${SITE_URL}/nextjs-app-router-sitemap/genre/28`,
            lastModified: new Date()
        }
    ];

}
