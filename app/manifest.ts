import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {

  return {
    name: 'StreamJet - Stream, Explore, Enjoy',
    short_name: 'StreamJet',
    description: 'Dive into a world of movies with StreamJet. Discover a curated collection ranging from classics to the latest releases',
    start_url: "https://stream-jet.vercel.app",
    display: 'standalone',
    background_color: '#1F1F1F',
    categories: ["action", "adventure", "comedy",'thriller'],
    theme_color: '#E50000',
  }
}