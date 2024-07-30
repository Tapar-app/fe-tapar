/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tapar.az",
        port: "",
      },
    ],
  },
};

export default nextConfig;
