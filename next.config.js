const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development",
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false, // false because of google-map-react
  swcMinify: true,
  images: {
    loader: "default",
    minimumCacheTTL: 5000,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    GITHUB_API_URL: process.env.GITHUB_API_URL,
    APP_URL: process.env.APP_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.child_process = false;
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // test: /\.(js|ts)x?$/,
        // for webpack 5 use
        and: [/\.(js|ts)x?$/],
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPWA(withBundleAnalyzer(nextConfig));
