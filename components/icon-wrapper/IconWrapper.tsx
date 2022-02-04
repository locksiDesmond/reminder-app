import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconWrapper = ({
  iconColor,
  iconName,
}: {
  iconName?: string;
  iconColor?: string;
}) => {
  return (
    <View style={[styles.icon, {backgroundColor: iconColor || '#0000f1'}]}>
      <Icon name={iconName || 'flag'} size={18} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: 40,
    height: 32,
    width: 32,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconWrapper;
