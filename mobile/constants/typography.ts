import { Platform } from 'react-native';

export const fontFamilies = {
  // Mobile-first fallback set: stable on Android/iOS without custom font files.
  hagrid:
    Platform.select({
      android: 'sans-serif-black',
      ios: 'System',
      default: 'sans-serif',
    }) ?? 'sans-serif',
  agletMono:
    Platform.select({
      android: 'monospace',
      ios: 'Courier',
      default: 'monospace',
    }) ?? 'monospace',
  robotoMedium:
    Platform.select({
      android: 'Roboto',
      ios: 'System',
      default: 'sans-serif',
    }) ?? 'sans-serif',
};

export const fontWeights = {
  regular: '400' as const,
  bold: '700' as const,
  extraBold: '800' as const,
};