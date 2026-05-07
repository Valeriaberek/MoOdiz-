import React, { useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native'
import { router } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextField, PrimaryButton, SocialButton } from '@/components/ui'

import { fontFamilies } from '@/constants/typography'
import { loginUser } from '@/services/auth'

export default function LoginScreen() {
  const textColor = '#1A1A1A'
  const subtitleColor = '#8B8B8B'
  const buttonColor = '#C969D6'
  const titleFontFamily = fontFamilies.hagrid

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Remplis ton email et ton mot de passe.')
      return
    }

    try {
      setLoading(true)
      await loginUser(email.trim(), password)
      router.replace('/redirect')
    } catch (error) {
      Alert.alert('Connexion impossible', error instanceof Error ? error.message : 'Réessaie plus tard.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('@/assets/images/background.png')} resizeMode="contain" style={styles.background}>
        <View style={styles.container}>

          <View style={styles.topSection}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <MaterialCommunityIcons name="arrow-left" size={24} color={textColor} />
            </Pressable>
          </View>

          <View style={styles.middleSection}>
            <Text numberOfLines={1} style={[styles.title, { fontFamily: titleFontFamily, color: textColor }]}>Heureux de vous revoir !</Text>

            <View style={styles.form}>
              <SocialButton icon="facebook" label="Continuer avec Facebook" onPress={() => {}} facebookColor={buttonColor} />
              <SocialButton icon="google" label="Continuer avec Google" onPress={() => {}} />

              <Text style={[styles.divider, { color: subtitleColor }]}>Ou se connecter avec vos identifiants</Text>

              <TextField
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextField
                label="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
              />

              <PrimaryButton
                onPress={handleLogin}
                buttonColor={buttonColor}
                labelStyle={[styles.primaryButtonText, { fontFamily: titleFontFamily }]}
                style={styles.paperButton}
                disabled={loading}
              >
                {loading ? 'Connexion...' : 'Se connecter'}
              </PrimaryButton>

              <Text style={[styles.forgotPassword, { color: textColor }]}>Mot de passe oublié</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  topSection: {
    paddingTop: 6,
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingTop: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginTop: 36,
    gap: 12,
  },
  divider: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 8,
  },
  input: {
    backgroundColor: 'transparent',
  },
  paperButton: {
    borderRadius: 22,
    alignSelf: 'center',
    width: '92%',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  forgotPassword: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 10,
    fontWeight: '600',
  },
});