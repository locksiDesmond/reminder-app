import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import IconWrapper from '../icon-wrapper/IconWrapper';
import ListModalForm from '../list-modal/ListModalForm';
import ReminderModalForm from '../reminder-modal/ReminderModalForm';

const ButtonBottom = () => {
  const [reminderModalVisible, setReminderModalVisible] = useState(false);
  const [listModalVisible, setListModalVisible] = useState(false);
  const handleReminderModal = () => {
    setReminderModalVisible(!reminderModalVisible);
  };
  const handleListModal = () => {
    setListModalVisible(!listModalVisible);
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={reminderModalVisible}
        onRequestClose={handleReminderModal}>
        <ReminderModalForm handleCancel={handleReminderModal} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={listModalVisible}
        onRequestClose={handleListModal}>
        <ListModalForm handleCancel={handleListModal} />
      </Modal>
      <TouchableOpacity onPress={() => setReminderModalVisible(true)}>
        <View style={styles.newReminderWrapper}>
          <IconWrapper iconName="plus" iconColor="#1b84fa" />
          <Text style={styles.newReminderText}>New Reminder</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setListModalVisible(true)}>
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
    color: '#1887ff',
    textAlign: 'center',
  },
  newList: {
    fontSize: 22,
    fontWeight: '400',
    color: '#1887ff',
    textAlign: 'center',
  },
});

export default ButtonBottom;
