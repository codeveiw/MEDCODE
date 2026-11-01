
import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      "next-intl/config": "./app/i18n/request.ts",
    },
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  webpack: (config) => {
    config.resolve.alias["next-intl/config"] = path.resolve(
      import.meta.dirname,
      "./app/i18n/request.ts"
    );

    return config;
  },
};

export default nextConfig;
