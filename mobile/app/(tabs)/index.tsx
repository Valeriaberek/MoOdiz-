import { SafeAreaView, StyleSheet, View } from 'react-native'
import Rive from 'rive-react-native'

export default function HomeScreen() {
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