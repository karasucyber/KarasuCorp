module.exports = {
    async rewrites() {
      return [
        {
          source: '/karasu/public/mac/:path*',
          destination: '/karasu/public/mac/:path*' 
        }
      ]
    }
  }
  