module.exports = {
  setupFilesAfterEnv: ['./configs/jest/setup.js'],
  moduleNameMapper: {
    '\\.(pdf)$': require.resolve('./configs/jest/file-mock.js'),
  },
  testMatch: ['<rootDir>/packages//src//*.spec.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  globals: {
    JEST: true,
    ENV: 'local',
    NAME: 'name',
    VERSION: '1.0.0',
    RBO: true,
    URLS: {},
  },
};
