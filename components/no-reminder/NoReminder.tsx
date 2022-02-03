import React, {useEffect, useRef} from 'react';
import {Animated, View, Text} from 'react-native';

const NoReminder = () => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    return Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeIn]);
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeIn,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'gray',
          textTransform: 'capitalize',
        }}>
        No reminder
      </Text>
    </Animated.View>
  );
};

export default NoReminder;
