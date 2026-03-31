import { useFonts } from 'expo-font';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Hagrid: require('@/assets/fonts/Hagrid.ttf'),
  });

  const titleFontFamily = fontsLoaded ? 'Hagrid' : undefined;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image source={require('@/assets/images/logo.png')} resizeMode="contain" style={styles.logo} />
          <Image source={require('@/assets/images/wave.png')} resizeMode="stretch" style={styles.topWave} />
        </View>

        <View style={styles.middleSection}>
          <Text style={[styles.title, { fontFamily: titleFontFamily }]}>PARLER, RESSENTIR, GRANDIR</Text>
          <Text style={[styles.subtitle, { fontFamily: titleFontFamily }]}>MOODIZ aide les enfants de 3 à 5 ans à comprendre leurs émotions grâce à des activités simples à faire avec leurs parents</Text>

        </View>

        <View style={styles.bottomWrapper}>
          <Image source={require('@/assets/images/vector.png')} resizeMode="stretch" style={styles.bottomVector} />

          <View style={styles.bottomSection}>
            <Pressable style={styles.primaryButton}>
              <Text style={[styles.primaryButtonText, { fontFamily: titleFontFamily }]}>Sign up</Text>
            </Pressable>

            <Text style={[styles.secondaryText, { fontFamily: titleFontFamily }]}>Already have an account ?</Text>
            <Pressable>
              <Text style={[styles.linkText, { fontFamily: titleFontFamily }]}>Log in</Text>
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
    backgroundColor: '#F4F4F6',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F4F6',
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
    color: '#050505',
    letterSpacing: 0.5,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 21,
    lineHeight: 26,
    color: '#C7C9D3',
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
    backgroundColor: '#C969D6',
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
    color: '#C969D6',
    fontSize: 24,
    fontWeight: '700',
  },
});
