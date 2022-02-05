import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {OptionCard} from '../option-card/OptionCard';
interface ReminderModalFormProps {
  handleClick: () => void;
}
const ReminderModalForm = ({handleClick}: ReminderModalFormProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.spaceBetween}>
        <TouchableOpacity onPress={handleClick}>
          <Text style={[styles.text, styles.blue]}>Cancel</Text>
        </TouchableOpacity>
        <Text style={[styles.text, styles.bold]}>New Reminder</Text>
        <Text style={[styles.text, styles.disabled, styles.bold]}>Add </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.titleInput} placeholder="Title" />
        <View style={styles.noteInputContainer}>
          <TextInput style={styles.noteInput} placeholder="Notes" />
        </View>
      </View>

      <OptionCard title="Details" />
      <OptionCard title="List" iconText="Reminders" />
    </View>
  );
};
const styles = StyleSheet.create({
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
  },
  titleInput: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    color: '#222222,',
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
