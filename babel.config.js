module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
    'transform-inline-environment-variables',
  ],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathSuffix: 'src',
          },
        ],
        'transform-inline-environment-variables',
      ],
    },
  },
};
