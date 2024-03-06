/** @type {import('next').NextConfig} */
const nextConfig = {
	images: { unoptimized: true },
	// async headers() {
	// 	return [
	// 		{
	// 			source: "/api/v1:path*",
	// 			headers: [
	// 				{ key: "Access-Control-Allow-Credentials", value: "true" },
	// 				{
	// 					key: "Access-Control-Allow-Origin",
	// 					value: "https://zhijing.bigdust.space",
	// 				},
	// 				{
	// 					key: "Access-Control-Allow-Methods",
	// 					value: "GET,DELETE,PATCH,POST,PUT",
	// 				},
	// 				{
	// 					key: "Access-Control-Allow-Headers",
	// 					value:
	// 						"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
	// 				},
	// 			],
	// 		},
	// 	];
	// },
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: "/api/v1:path*",
	// 			destination: `https://zhijing.bigdust.space/api/v1:path*`,
	// 		},
	// 	];
	// },
};

export default nextConfig;
