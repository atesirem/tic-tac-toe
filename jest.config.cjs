module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(scss|css)$": "<rootDir>/__mocks__/styleMock.js"
  },
};
