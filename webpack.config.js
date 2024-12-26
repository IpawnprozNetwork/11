// In your webpack.config.js
module.exports = {
  devtool: 'eval-source-map', // Or use 'source-map' based on your preference
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  performance: {
    hints: false, // This disables warnings for large files
  },
};
