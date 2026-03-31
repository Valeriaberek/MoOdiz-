import { Pressable, StyleSheet, Text } from 'react-native';

type LandingActionButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
};

export function LandingActionButton({
  label,
  variant = 'primary',
  onPress,
}: LandingActionButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable style={[styles.base, isPrimary ? styles.primary : styles.secondary]} onPress={onPress}>
      <Text style={[styles.textBase, isPrimary ? styles.primaryText : styles.secondaryText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 14,
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#1C1B1A',
  },
  secondary: {
    borderWidth: 1,
    borderColor: '#1C1B1A',
    backgroundColor: 'transparent',
  },
  textBase: {
    fontSize: 16,
    fontWeight: '700',
  },
  primaryText: {
    color: '#FFF8F2',
  },
  secondaryText: {
    color: '#1C1B1A',
  },
});
