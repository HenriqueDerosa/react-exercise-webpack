/* TODO: Apply @type here */
const optimization = {
  /* Separates all third-party runtime chunk files from the main chunk */
  moduleIds: 'deterministic', // Added this to retain hash of vendor chunks.
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
}

module.exports = optimization
