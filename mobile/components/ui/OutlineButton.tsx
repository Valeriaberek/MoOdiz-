import React from 'react'
import { Button } from 'react-native-paper'
import { StyleProp, ViewStyle, TextStyle } from 'react-native'

type Props = {
  children: React.ReactNode
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  textColor?: string
}

export default function OutlineButton({ children, onPress, style, labelStyle, textColor }: Props) {
  return (
    <Button
      mode="outlined"
      onPress={onPress}
      contentStyle={{ height: 56 }}
      textColor={textColor}
      labelStyle={labelStyle}
      style={[{ borderRadius: 28 }, style]}
    >
      {children}
    </Button>
  )
}
