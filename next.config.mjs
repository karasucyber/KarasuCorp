/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/karasu/public/mac/:path*',
          destination: '/karasu/public/mac/:path*' 
        }
      ];
    }
  };
  
  export default nextConfig;
  