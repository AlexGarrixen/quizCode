module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev) config.plugins.push(new webpack.IgnorePlugin(/\/__mocks__\//));

    return config;
  },
};
