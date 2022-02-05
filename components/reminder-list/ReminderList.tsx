import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Reminder from '../reminder/Reminder';

const ReminderList = () => {
  return (
    <FlatList
      data={[
        {title: 'nothing', completed: false},
        {title: 'do something', completed: true},
      ]}
      style={styles.list}
      renderItem={({item, index}) => <Reminder key={index} data={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {},
});
export default ReminderList;
