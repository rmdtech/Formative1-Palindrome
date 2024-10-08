// jest.config.js
module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest' // Transform JavaScript and JSX files using babel-jest
    },
    testEnvironment: 'jsdom', // Use jsdom to simulate a browser environment (ideal for React)
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // Mock CSS imports
    }
};