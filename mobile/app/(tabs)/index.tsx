import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NightScene } from '../../components/night-scene';
import { fontFamilies } from '@/constants/typography';
import { useDayNightTheme } from '@/hooks/use-day-night-theme';

export default function HomeScreen() {
  const { isNight, backgroundColor, textColor, subtitleColor, buttonColor, accentColor } = useDayNightTheme();
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
          <Text style={[styles.title, { fontFamily: titleFontFamily, color: textColor }]}>PARLER, RESSENTIR, GRANDIR</Text>
          <Text style={[styles.subtitle, { fontFamily: subtitleFontFamily, color: subtitleColor }]}>MOODIZ aide les enfants de 3 à 5 ans à comprendre leurs émotions grâce à des activités simples à faire avec leurs parents</Text>
        </View>

        <View style={styles.bottomWrapper}>
          <Image source={require('@/assets/images/vector.png')} resizeMode="stretch" style={styles.bottomVector} />

          <View style={styles.bottomSection}>
            <Pressable style={[styles.primaryButton, { backgroundColor: buttonColor }]}>
              <Text style={[styles.primaryButtonText, { fontFamily: titleFontFamily }]}>Sign up</Text>
            </Pressable>

            <Text style={[styles.secondaryText, { fontFamily: bodyFontFamily, color: accentColor }]}>Already have an account ?</Text>
            <Pressable>
              <Text style={[styles.linkText, { fontFamily: titleFontFamily, color: accentColor }]}>Log in</Text>
            </Pressable>
          </View>
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
  },
  topSection: {
    paddingTop: 18,
    alignItems: 'center',
    height: '34%',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 150,
    height: 120,
  },
  topWave: {
    alignSelf: 'stretch',
    width: '100%',
    height: 70,
    marginTop: 10,
    opacity: 1,
  },
  middleSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 6,
  },
  title: {
    fontSize: 44,
    letterSpacing: 0.5,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: '600',
  },
  bottomWrapper: {
    height: '36%',
    justifyContent: 'flex-end',
  },
  bottomVector: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 300,
  },
  bottomSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingTop: 84,
    paddingBottom: 24,
    gap: 8,
  },
  primaryButton: {
    width: '100%',
    maxWidth: 320,
    minHeight: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  secondaryText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  linkText: {
    fontSize: 24,
    fontWeight: '700',
  },
});
