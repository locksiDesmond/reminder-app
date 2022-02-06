import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import useReminder from '../../hooks/useReminder';
import Reminder from '../reminder/Reminder';

const ReminderList = () => {
  const {lists, isLoading} = useReminder('Reminder');
  return (
    <FlatList
      data={lists}
      style={styles.list}
      renderItem={({item, index}) => <Reminder key={index} data={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {},
});
export default ReminderList;
