import { router } from 'expo-router';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NightScene } from '@/components/night-scene';
import { fontFamilies } from '@/constants/typography';
import { useDayNightTheme } from '@/hooks/use-day-night-theme';

export default function LoginScreen() {
  const { isNight, backgroundColor, textColor, subtitleColor, buttonColor, accentColor } = useDayNightTheme();
  const titleFontFamily = fontFamilies.hagrid;
  const subtitleFontFamily = fontFamilies.agletMono;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.container, { backgroundColor }]}>
        {isNight ? <NightScene /> : null}

        <View style={styles.topSection}>
          <Image source={require('@/assets/images/logo.png')} resizeMode="contain" style={styles.logo} />
          <Image source={require('@/assets/images/wave.png')} resizeMode="stretch" style={styles.topWave} />
        </View>

        <View style={styles.middleSection}>
          <Text style={[styles.title, { fontFamily: titleFontFamily, color: textColor }]}>Se connecter</Text>
          <Text style={[styles.subtitle, { fontFamily: subtitleFontFamily, color: subtitleColor }]}>Retrouvez vos activités et continuez le parcours de votre enfant.</Text>

          <View style={styles.actions}>
            <Pressable style={[styles.primaryButton, { backgroundColor: buttonColor }]}> 
              <Text style={[styles.primaryButtonText, { fontFamily: titleFontFamily }]}>Connexion</Text>
            </Pressable>

            <Pressable style={[styles.secondaryButton, { borderColor: accentColor }]} onPress={() => router.back()}>
              <Text style={[styles.secondaryButtonText, { fontFamily: titleFontFamily, color: accentColor }]}>Retour</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.bottomWrapper}>
          <Image source={require('@/assets/images/vector.png')} resizeMode="stretch" style={styles.bottomVector} />
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
  topSection: {
    paddingTop: 18,
    alignItems: 'center',
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
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 10,
    zIndex: 2,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  actions: {
    width: '100%',
    gap: 12,
    marginTop: 12,
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
  bottomWrapper: {
    height: '36%',
    justifyContent: 'flex-end',
  },
  bottomVector: {
    position: 'absolute',
    bottom: 0,
    right: -90,
    width: '130%',
    height: 300,
    zIndex: 0,
  },
});