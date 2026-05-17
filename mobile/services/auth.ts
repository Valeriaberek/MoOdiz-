import Constants from 'expo-constants'
import { Platform } from 'react-native'

function getApiUrl() {
  const explicitUrl = process.env.EXPO_PUBLIC_API_URL?.trim() || Constants.expoConfig?.extra?.apiUrl

  if (explicitUrl) {
    return explicitUrl
  }

  const hostUri = Constants.expoConfig?.hostUri
  if (hostUri) {
    const match = hostUri.match(/^(?:https?:\/\/|exp:\/\/)?([^:/]+)(?::\d+)?/)

    if (match?.[1] && match[1] !== 'localhost' && match[1] !== '127.0.0.1') {
      return `http://${match[1]}:3000`
    }
  }

  return Platform.select({
    android: 'http://localhost:3000',
    ios: 'http://localhost:3000',
    web: 'http://localhost:3000',
    default: 'http://localhost:3000'
  })
}

export const API_URL = getApiUrl()

type AuthResponse = {
  access_token?: string
  error?: string
}

async function requestAuth(path: string, email: string, password: string) {
  try {
    console.log('requestAuth', { API_URL, path, email })
    const response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json().catch(() => ({})) as any

    if (!response.ok) {
      const errorMsg = data?.error || data?.message || `Erreur ${response.status}`
      console.error('requestAuth non-ok', { status: response.status, data })
      throw new Error(errorMsg)
    }

    if (data?.error) {
      throw new Error(data.error)
    }

    return data
  } catch (error) {
    console.error('requestAuth error', error)
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Impossible de se connecter au serveur.')
  }
}

export async function loginUser(email: string, password: string) {
  return await requestAuth('/auth/login', email, password)
}

export async function registerUser(email: string, password: string) {
  return await requestAuth('/auth/register', email, password)
}