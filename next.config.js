/**
	* @type {import('next').NextConfig}
	*/
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
			},
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
			},
		],
	},
}

export default nextConfig
