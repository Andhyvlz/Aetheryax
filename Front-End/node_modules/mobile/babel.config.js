module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    ['module-resolver', {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      alias: {
        '@myorg/shared': '../../packages/shared/src'
      }
    }]
  ]
};
