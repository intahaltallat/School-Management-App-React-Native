import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

const Chevron = ({progress}) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${progress.value * -180}deg`}],
  }));
  return (
    <Animated.View style={iconStyle}>
      <Image source={require('../src/assets/Chevron.png')} style={styles.chevron} />
    </Animated.View>
  );
};

export default Chevron;

const styles = StyleSheet.create({
  chevron: {
    width: 24,
    height: 24,
  },
});
