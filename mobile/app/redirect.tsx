import { useEffect } from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import Rive from 'rive-react-native'

export default function RedirectScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)')
    }, 3500) // un peu plus stable pour laisser charger l'anim

    return () => clearTimeout(timer)
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Rive
          resourceName="octopus"
          autoplay
          style={styles.rive}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rive: {
    width: 300,
    height: 300,
  },
})