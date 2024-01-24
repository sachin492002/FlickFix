import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {

  return {
    name: 'StreamJet - The best streaming platform for cinematic experiences',
    short_name: 'StreamJet',
    description: 'Generate a SiteMap',
    start_url: "https://stream-jet.vercel.app",
    display: 'standalone',
    background_color: '#1F1F1F',
    categories: ["action", "adventure", "comedy",'thriller'],
    theme_color: '#E50000',
  }
}