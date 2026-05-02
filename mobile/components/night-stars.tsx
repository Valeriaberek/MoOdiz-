import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

type StarConfig = {
  top: `${number}%`;
  left: `${number}%`;
  size: number;
  duration: number;
  delay: number;
  opacityMin: number;
  opacityMax: number;
};

const stars: StarConfig[] = [
  { top: '10%', left: '14%', size: 4, duration: 2200, delay: 0, opacityMin: 0.2, opacityMax: 1 },
  { top: '18%', left: '72%', size: 3, duration: 1800, delay: 300, opacityMin: 0.15, opacityMax: 0.9 },
  { top: '28%', left: '26%', size: 5, duration: 2600, delay: 700, opacityMin: 0.25, opacityMax: 1 },
  { top: '36%', left: '84%', size: 3, duration: 2000, delay: 100, opacityMin: 0.2, opacityMax: 0.85 },
  { top: '52%', left: '18%', size: 4, duration: 2400, delay: 500, opacityMin: 0.2, opacityMax: 1 },
  { top: '62%', left: '76%', size: 5, duration: 1900, delay: 900, opacityMin: 0.3, opacityMax: 1 },
  { top: '74%', left: '40%', size: 3, duration: 2300, delay: 200, opacityMin: 0.15, opacityMax: 0.95 },
];

function BlinkingStar({ top, left, size, duration, delay, opacityMin, opacityMax }: StarConfig) {
  const opacity = useRef(new Animated.Value(opacityMin)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(opacity, {
          toValue: opacityMax,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: opacityMin,
          duration,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [delay, duration, opacity, opacityMax, opacityMin]);

  return <Animated.View style={[styles.star, { top, left, width: size, height: size, opacity }]} />;
}

export function NightStars() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {stars.map((star, index) => (
        <BlinkingStar key={`${star.top}-${star.left}-${index}`} {...star} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 2,
  },
});