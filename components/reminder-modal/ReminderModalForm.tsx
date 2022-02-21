import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {OptionCard} from '../option-card/OptionCard';
import {storeData} from '../../store/index';
import {ListContext} from '../../context/list-context/index';
interface ReminderModalFormProps {
  handleCancel: () => void;
}
const ReminderModalForm = ({handleCancel}: ReminderModalFormProps) => {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const {list} = useContext(ListContext);

  useEffect(() => {
    if (title) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [title]);
  const handleSubmit = async () => {
    const data = {
      task: title,
      notes,
      completed: false,
      scheduled: false,
    };

    await storeData(list, data);
    handleCancel();
  };
  return (
    <View style={styles.container}>
      <View style={styles.spaceBetween}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={[styles.text, styles.blue]}>Cancel</Text>
        </TouchableOpacity>
        <Text style={[styles.text, styles.bold]}>New Reminder</Text>
        <TouchableOpacity onPress={handleSubmit}>
          <Text
            style={[styles.text, !canSubmit && styles.disabled, styles.bold]}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setTitle}
          value={title}
          style={styles.titleInput}
          placeholder="Title"
        />
        <View style={styles.noteInputContainer}>
          <TextInput
            onChangeText={setNotes}
            value={notes}
            style={styles.noteInput}
            placeholder="Notes"
          />
        </View>
      </View>
      <OptionCard handlePress={handleCancel} title="Details" />
      <OptionCard title="List" iconText="Reminders" />
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    height: '97%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#eee',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: '#222222',
  },
  textMd: {
    fontSize: 18,
  },
  blue: {
    color: '#1b84fa',
  },
  disabled: {
    color: '#cccccc',
  },
  bold: {
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    marginTop: 30,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 8,
      height: -37,
    },
    shadowOpacity: 1,
    shadowRadius: 9,
  },
  titleInput: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    color: '#222222',
    fontSize: 16,
  },
  noteInput: {
    height: 40,
    marginLeft: 16,
    color: '#222222',
    fontSize: 16,
  },
  noteInputContainer: {
    height: 100,
  },
  placeholder: {
    color: '#555555',
    fontSize: 16,
  },
});

export default ReminderModalForm;
