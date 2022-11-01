/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
// https://github.com/developit/nextjs-preact-demo/
function preactModifications({ config, dev, isServer }) {
  // const splitChunks = config.optimization && config.optimization.splitChunks;
  // if (splitChunks) {
  //   const cacheGroups = splitChunks.cacheGroups;
  //   const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
  //   if (cacheGroups.framework) {
  //     cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
  //       test: preactModules,
  //     });
  //     cacheGroups.commons.name = "framework";
  //   } else {
  //     cacheGroups.preact = {
  //       name: "commons",
  //       chunks: "all",
  //       test: preactModules,
  //     };
  //   }
  // }

  // inject Preact DevTools
  if (dev && !isServer) {
    const entry = config.entry;
    config.entry = () =>
      entry().then((entries) => {
        entries["main.js"] = ["preact/debug"].concat(entries["main.js"] || []);
        return entries;
      });
  }
  return config;
}