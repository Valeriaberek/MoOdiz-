const { getDefaultConfig } = require('@expo/metro-config');
const config = getDefaultConfig(__dirname);

// Ensure Metro treats .riv files as assets so `require('../assets/octopus.riv')` works
if (config.resolver && Array.isArray(config.resolver.assetExts)) {
  if (!config.resolver.assetExts.includes('riv')) {
    config.resolver.assetExts.push('riv');
  }
}

module.exports = config;
