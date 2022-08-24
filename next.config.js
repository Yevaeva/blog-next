/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: "yeva",
        mongodb_password: "portfolio",
        mongodb_clustername: "cluster0",
        mongodb_database: "Cluster0",
      },
    };
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: "yeva",
      mongodb_password: "portfolio",
      mongodb_clustername: "cluster0",
      mongodb_database: "Cluster0",
    },
  };
};

module.exports = nextConfig;
