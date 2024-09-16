/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: process.env.APP_URL,
    INTERNAL_API_URL: process.env.INTERNAL_API_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    OPEN_BREWERY_API_URL: process.env.OPEN_BREWERY_API_URL,
  },
};

export default nextConfig;
