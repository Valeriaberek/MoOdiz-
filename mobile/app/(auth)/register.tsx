import { router } from 'expo-router';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NightScene } from '@/components/night-scene';
import { fontFamilies } from '@/constants/typography';
import { useDayNightTheme } from '@/hooks/use-day-night-theme';

export default function RegisterScreen() {
  const { isNight, backgroundColor, textColor, subtitleColor, buttonColor } = useDayNightTheme();
  const titleFontFamily = fontFamilies.hagrid;
  const subtitleFontFamily = fontFamilies.agletMono;
  const bodyFontFamily = fontFamilies.robotoMedium;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.container, { backgroundColor }]}>
        {isNight ? <NightScene /> : null}

        <View style={styles.topSection}>
          <Image source={require('@/assets/images/logo.png')} resizeMode="contain" style={styles.logo} />
          <Image source={require('@/assets/images/wave.png')} resizeMode="stretch" style={styles.topWave} />
        </View>

        <View style={styles.middleSection}>
          <View style={styles.textBlock}>
            <Text style={[styles.title, { fontFamily: titleFontFamily, color: textColor }]}>Créer un compte</Text>
            <Text style={[styles.subtitle, { fontFamily: subtitleFontFamily, color: subtitleColor }]}>Commencez avec Moodiz et accedez aux activites adaptees a votre enfant.</Text>
          </View>

          <View style={styles.actions}>
            <Pressable style={[styles.primaryButton, { backgroundColor: buttonColor }]}> 
              <Text style={[styles.primaryButtonText, { fontFamily: titleFontFamily }]}>Inscription</Text>
            </Pressable>

            <Text style={[styles.accountText, { fontFamily: bodyFontFamily }]}>Vous avez deja un compte ?</Text>
            <Pressable onPress={() => router.push('/(auth)/login')}>
              <Text style={[styles.loginLink, { fontFamily: titleFontFamily }]}>Se connecter</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 10,
    paddingBottom: 22,
    zIndex: 2,
  },
  textBlock: {
    width: '100%',
    marginTop: 42,
    gap: 10,
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
    gap: 8,
    marginBottom: 24,
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
  accountText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '600',
  },
  loginLink: {
    color: '#C969D6',
    fontSize: 24,
    textAlign: 'center',
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