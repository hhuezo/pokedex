module.exports = function(api) {
  api.cache(true);
  return {
    "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    "@babel/plugin-proposal-export-namespace-from"
    // Otros plugins que puedas tener
  ]
  };
};
