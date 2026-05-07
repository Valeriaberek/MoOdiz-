import React from 'react'
import { TextInput } from 'react-native-paper'
import { StyleProp, TextStyle } from 'react-native'

type Props = {
  label?: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  keyboardType?: any
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  style?: StyleProp<TextStyle>
}

export default function TextField({ label, value, onChangeText, secureTextEntry, keyboardType, autoCapitalize = 'none', style }: Props) {
  return (
    <TextInput
      label={label}
      mode="flat"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      selectionColor="#C969D6"
      theme={{ colors: { text: '#1A1A1A', placeholder: 'rgba(26,26,26,0.45)', primary: '#C969D6' } }}
      style={[{ backgroundColor: '#F6EAF6', borderRadius: 12, height: 50 }, style]}
    />
  )
}
