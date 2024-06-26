/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'x-hacker',
            value: 'If you found this, come work with us!',
          }
        ]
      },
      {
        // Routes this applies to
        source: '/api/(.*)',
        // Headers
        headers: [
          // Allow for specific domains to have access or * for all
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
            // DOES NOT WORK
            // value: process.env.ALLOWED_ORIGIN,
          },
          // Allows for specific methods accepted
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          // Allows for specific headers accepted (These are a few standard ones)
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      }
    ]
  },

  async rewrites () {
    return [
      {
        source: '/metrics',
        destination: '/api/metrics',
      },
    ]
  },

}

export default nextConfig
