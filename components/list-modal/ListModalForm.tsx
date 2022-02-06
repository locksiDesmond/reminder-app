import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {storeData} from '../../store/index';
import {styles as reminderStyle} from '../reminder-modal/ReminderModalForm';

interface ListModalFormProps {
  handleCancel: () => void;
}
const ListModalForm = ({handleCancel}: ListModalFormProps) => {
  const [title, setTitle] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (title) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [title]);

  const handleSubmit = async () => {
    const data = {
      title,
      iconName: 'list-ul',
      iconColor: '#1b84fa',
      count: 0,
    };
    await storeData('lists', data);
    handleCancel();
  };

  return (
    <View style={reminderStyle.container}>
      <View style={reminderStyle.spaceBetween}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={[reminderStyle.text, reminderStyle.blue]}>Cancel</Text>
        </TouchableOpacity>
        <Text style={[reminderStyle.text, reminderStyle.bold]}>New List</Text>
        <TouchableOpacity onPress={handleSubmit}>
          <Text
            style={[
              reminderStyle.text,
              !canSubmit && reminderStyle.disabled,
              reminderStyle.bold,
            ]}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[reminderStyle.inputContainer, styles.center]}>
        <View style={[styles.iconWrapper, styles.center]}>
          <Icon name="list-ul" size={40} color="#fff" />
        </View>
        <TextInput
          placeholder="List name"
          style={styles.titleInput}
          value={title}
          onChangeText={setTitle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleInput: {
    backgroundColor: '#cccccc',
    height: 60,
    width: '90%',
    marginTop: 14,
    borderRadius: 8,
    textAlign: 'center',
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 60,
    marginTop: 10,
    backgroundColor: '#1b84fa',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ListModalForm;
