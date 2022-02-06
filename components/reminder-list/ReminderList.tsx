import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import useReminder from '../../hooks/useReminder';
import Reminder from '../reminder/Reminder';
import NoReminder from '../no-reminder/NoReminder';

const ReminderList = ({title}: {title: string}) => {
  const {lists, isLoading} = useReminder(title);
  return (
    <>
      {!!lists[0] ? (
        <FlatList
          data={lists}
          style={styles.list}
          renderItem={({item, index}) => <Reminder key={index} data={item} />}
        />
      ) : (
        <NoReminder />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  list: {},
});
export default ReminderList;
