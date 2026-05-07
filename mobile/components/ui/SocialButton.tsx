import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
  icon: 'facebook' | 'google'
  label: string
  onPress?: () => void
  facebookColor?: string
}

export default function SocialButton({ icon, label, onPress, facebookColor = '#C969D6' }: Props) {
  const iconName = icon === 'facebook' ? 'facebook' : 'google'
  const bgColor = icon === 'facebook' ? facebookColor : '#FFFFFF'
  const textColor = icon === 'facebook' ? '#FFFFFF' : '#000000'

  return (
    <Pressable style={[styles.button, { backgroundColor: bgColor }]} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={20} color={textColor} />
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 46,
    borderRadius: 20,
    alignSelf: 'center',
    width: '92%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
})
