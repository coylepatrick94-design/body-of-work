/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure it builds as a dynamic app, not static export
  output: undefined,
  trailingSlash: false,
  // Force dynamic rendering
  generateEtags: false,
}

module.exports = nextConfig
