import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import IconWrapper from '../icon-wrapper/IconWrapper';

const ButtonBottom = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('first')}>
        <View style={styles.newReminderWrapper}>
          <IconWrapper />
          <Text style={styles.newReminderText}>New Reminder</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('second')}>
        <Text style={styles.newList}>Add List</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 50,
    justifyContent: 'space-between',
  },
  newReminderWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  newReminderText: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10,
    color: '#0000f1',
    textAlign: 'center',
  },
  newList: {
    fontSize: 22,
    fontWeight: '400',
    color: '#0000f1',
    textAlign: 'center',
  },
});

export default ButtonBottom;
