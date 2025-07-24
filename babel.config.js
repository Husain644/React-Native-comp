module.exports = {
  presets:['module:@react-native/babel-preset'],
  plugins: [
    [
      "module:react-native-dotenv",
      {moduleName: "react-native-dotenv",
      },
    ],
    "react-native-reanimated/plugin"
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel','react-native-reanimated/plugin'],
    },
  },
};
