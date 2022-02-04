import React from 'react';
import {StyleSheet, View} from 'react-native';

const IconWrapper = ({iconColor}: {iconColor?: string}) => {
  return (
    <View
      style={[styles.icon, {backgroundColor: iconColor || '#0000f1'}]}></View>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: 40,
    height: 32,
    width: 32,
  },
});

export default IconWrapper;
