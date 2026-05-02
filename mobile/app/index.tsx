import { Link, router } from 'expo-router';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NightScene } from '@/components/night-scene';
import { fontFamilies } from '@/constants/typography';
import { useDayNightTheme } from '@/hooks/use-day-night-theme';

export default function LandingScreen() {
  const { isNight, backgroundColor, textColor, subtitleColor, buttonColor, accentColor } = useDayNightTheme();
  const titleFontFamily = fontFamilies.hagrid;
  const subtitleFontFamily = fontFamilies.agletMono;
  const bodyFontFamily = fontFamilies.robotoMedium;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.container, { backgroundColor }]}>
        {isNight ? <NightScene /> : null}

        <View style={styles.header}>
          <Image source={require('@/assets/images/logo.png')} resizeMode="contain" style={styles.logo} />
          <Image source={require('@/assets/images/wave.png')} resizeMode="stretch" style={styles.topWave} />
        </View>

        <View style={styles.content}>
          <View style={styles.textBlock}>
            <Text style={[styles.title, { fontFamily: titleFontFamily, color: textColor }]}>Bienvenue dans Moodiz</Text>
            <Text style={[styles.subtitle, { fontFamily: subtitleFontFamily, color: subtitleColor }]}>Des activités simples et adaptées pour accompagner votre enfant au quotidien.</Text>
          </View>
        </View>

        <View style={styles.bottomWrapper}>
          <Image source={require('@/assets/images/vector.png')} resizeMode="stretch" style={styles.bottomVector} />

          <View style={styles.actions}>
            <Pressable style={[styles.primaryButton, { backgroundColor: buttonColor }]} onPress={() => router.push('/(auth)/register')}>
              <Text style={[styles.primaryButtonText, { fontFamily: titleFontFamily }]}>Inscription</Text>
            </Pressable>

            <Pressable style={[styles.secondaryButton, { borderColor: accentColor }]} onPress={() => router.push('/(auth)/login')}>
              <Text style={[styles.secondaryButtonText, { fontFamily: titleFontFamily, color: accentColor }]}>Se connecter</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.footer}>
          <Link href="/legal" style={[styles.footerLink, { color: subtitleColor, fontFamily: bodyFontFamily }]}>Mentions légales</Link>
          <Text style={[styles.footerDivider, { color: subtitleColor }]}>|</Text>
          <Link href="/privacy" style={[styles.footerLink, { color: subtitleColor, fontFamily: bodyFontFamily }]}>Confidentialité</Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  header: {
    alignItems: 'center',
    paddingTop: 18,
    justifyContent: 'flex-start',
    zIndex: 2,
  },
  logo: {
    width: 150,
    height: 120,
  },
  topWave: {
    alignSelf: 'stretch',
    width: '100%',
    height: 70,
    marginTop: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -6,
    zIndex: 2,
  },
  textBlock: {
    marginTop: 20,
    gap: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  actions: {
    zIndex: 2,
    gap: 12,
    marginBottom: 28,
    paddingHorizontal: 28,
  },
  primaryButton: {
    minHeight: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  secondaryButton: {
    minHeight: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  secondaryButtonText: {
    fontSize: 22,
    fontWeight: '700',
  },
  bottomVector: {
    position: 'absolute',
    bottom: 0,
    right: -90,
    width: '130%',
    height: 300,
    zIndex: 0,
  },
  bottomWrapper: {
    height: '36%',
    justifyContent: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 18,
    paddingTop: 8,
    zIndex: 2,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '600',
  },
  footerDivider: {
    fontSize: 14,
    fontFamily: fontFamilies.robotoMedium,
    fontWeight: '600',
  },
});