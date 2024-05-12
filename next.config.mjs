/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'https://ciaochow.plusnarrative.biz/api/' // development api
        : 'https://ciaochow.plusnarrative.biz/api/', // production api
    token: process.env.TOKEN,
    imgUrl: 'https://ciaochow.plusnarrative.biz/uploads/'
  }
};

export default nextConfig;
