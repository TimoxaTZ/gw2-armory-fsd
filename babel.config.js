const isTest = process.env.NODE_ENV === 'test';

const config = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '^effector$': 'effector/compat',
          '^effector-react$': 'effector-react/compat',
        },
      },
    ],
  ],
};

if (!isTest) {
  config.plugins = [
    ...config.plugins,
    ['styled-components', { namespace: 'ttz' }],
    'lodash',
    'effector/babel-plugin',
  ];
}

module.exports = config;
