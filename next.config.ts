import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Supabase Storage public buckets typically live on:
      // https://<project-ref>.supabase.co/storage/v1/object/public/<bucket>/<path>
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'http', hostname: 'localhost' }
    ]
  }
}

export default nextConfig

