import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface OptionCardProps {
  title: string;
  iconText?: string;
}
export const OptionCard = (props: OptionCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.iconTextContainer}>
        <Text style={styles.iconText}>{props.iconText}</Text>
        <Icon name="navigate-next" size={24} color="#aaa" />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    marginTop: 30,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#222',
  },
  iconTextContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    marginRight: 6,
  },
});
