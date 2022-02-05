import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import IconWrapper from '../icon-wrapper/IconWrapper';
import ReminderModalForm from '../reminder-modal/ReminderModalForm';

const ButtonBottom = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleClick = () => {
    //    Alert.alert("Modal has closed.");
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClick}>
        <ReminderModalForm handleClick={handleClick} />
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.newReminderWrapper}>
          <IconWrapper iconName="plus" iconColor="#1b84fa" />
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
