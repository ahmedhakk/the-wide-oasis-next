/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bbvmzbuivnugulewfngb.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/cabin-images/**',
            },
        ],
    },

    // and run `npm run build` to generate the static files in the `out` directory. You can then deploy the contents of the `out` directory to any static hosting provider.
    // output: 'export', // This is needed to make sure that the app can be deployed to static hosting providers like Netlify or Vercel. as it SSG (Static Site Generation) all pages are staticly rendered at build time and does not require a Node.js server to run.
};

export default nextConfig;
