import { useEffect, useRef } from 'react';
import { Animated, Image, ImageBackground, StyleSheet, View } from 'react-native';

type StarConfig = {
  top: `${number}%`;
  left: `${number}%`;
  size: number;
  duration: number;
  delay: number;
  opacityMin: number;
  opacityMax: number;
};

type CloudConfig = {
  top: `${number}%`;
  left: `${number}%`;
  width: number;
  height: number;
  drift: number;
  duration: number;
  delay: number;
};

const stars: StarConfig[] = [
  { top: '10%', left: '12%', size: 18, duration: 1800, delay: 0, opacityMin: 0.25, opacityMax: 1 },
  { top: '16%', left: '72%', size: 12, duration: 2200, delay: 400, opacityMin: 0.2, opacityMax: 0.9 },
  { top: '24%', left: '30%', size: 16, duration: 2000, delay: 200, opacityMin: 0.18, opacityMax: 1 },
  { top: '34%', left: '84%', size: 11, duration: 2400, delay: 700, opacityMin: 0.15, opacityMax: 0.85 },
  { top: '48%', left: '18%', size: 14, duration: 2100, delay: 500, opacityMin: 0.2, opacityMax: 1 },
  { top: '58%', left: '76%', size: 15, duration: 2500, delay: 900, opacityMin: 0.22, opacityMax: 1 },
  { top: '72%', left: '40%', size: 13, duration: 2300, delay: 300, opacityMin: 0.18, opacityMax: 0.95 },
  { top: '22%', left: '54%', size: 10, duration: 1700, delay: 1100, opacityMin: 0.2, opacityMax: 0.88 },
];

const clouds: CloudConfig[] = [
  { top: '26%', left: '8%', width: 180, height: 95, drift: 10, duration: 5200, delay: 0 },
  { top: '44%', left: '62%', width: 150, height: 80, drift: -12, duration: 6200, delay: 500 },
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

  return <Animated.Image source={require('@/assets/images/etoile.png')} resizeMode="contain" style={[styles.star, { top, left, width: size, height: size, opacity }]} />;
}

function FloatingCloud({ top, left, width, height, drift, duration, delay }: CloudConfig) {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(translateX, {
          toValue: drift,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [delay, drift, duration, translateX]);

  return (
    <Animated.View style={[styles.cloudWrapper, { top, left, transform: [{ translateX }] }]}>
      <Image source={require('@/assets/images/nuage.png')} resizeMode="contain" style={{ width, height }} />
    </Animated.View>
  );
}

export function NightScene() {
  return (
    <ImageBackground
      source={require('@/assets/images/night.png')}
      resizeMode="cover"
      style={styles.background}>
      <View pointerEvents="none" style={styles.overlay}>
        {stars.map((star, index) => (
          <BlinkingStar key={`${star.top}-${star.left}-${index}`} {...star} />
        ))}
        {clouds.map((cloud, index) => (
          <FloatingCloud key={`${cloud.top}-${cloud.left}-${index}`} {...cloud} />
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    flex: 1,
  },
  star: {
    position: 'absolute',
    tintColor: '#FFFFFF',
  },
  cloudWrapper: {
    position: 'absolute',
    opacity: 0.9,
  },
});