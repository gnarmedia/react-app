module.exports = {
  clearMocks: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coverageDirectory: "__coverage__",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/components/**/*.js"],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],

  // identify test setup file for Enzyme adapter and other needs
  setupFiles: ["<rootDir>/enzyme.config.js"]
};
