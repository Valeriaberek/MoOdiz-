import React from 'react'
import { Button } from 'react-native-paper'
import { StyleProp, ViewStyle, TextStyle } from 'react-native'

type Props = {
  children: React.ReactNode
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  buttonColor?: string
}

export default function PrimaryButton({ children, onPress, style, labelStyle, buttonColor }: Props) {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      contentStyle={{ height: 50 }}
      buttonColor={buttonColor}
      labelStyle={labelStyle}
      style={[{ borderRadius: 22 }, style]}
    >
      {children}
    </Button>
  )
}
