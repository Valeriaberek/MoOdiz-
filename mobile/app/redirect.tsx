import { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'

export default function RedirectScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)')
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A'
  }
})