// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);

resolver: {
    /* resolver options */
   sourceExts: ['jsx','js', 'ts', 'tsx'] // add tsx if its not yet defined
  }