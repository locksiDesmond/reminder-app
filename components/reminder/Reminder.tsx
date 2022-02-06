import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface ReminderProps {
  task: string;
  completed: boolean;
}
const Reminder = ({data}: {data: ReminderProps}) => {
  const [state, setState] = useState(data.task);
  const [completed, setCompleted] = useState(data.completed);

  const handleCheckBox = () => {
    setCompleted(!completed);
  };
  return (
    <View style={styles.container}>
      {/* creates a new checkbox ui but position react native checkbox over it */}
      <CheckBox
        onChange={handleCheckBox}
        style={styles.hidden}
        value={completed}
      />
      <View style={styles.checkBox}>
        <View style={completed && styles.checked}></View>
      </View>
      <TextInput
        onBlur={() => console.log('should save')}
        value={state}
        style={styles.input}
        onChangeText={setState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hidden: {
    position: 'absolute',
    left: 2,
    zIndex: 4,
    opacity: 0,
  },
  checkBox: {
    borderColor: '#e1e2e1',
    borderWidth: 2,
    borderRadius: 40,
    marginLeft: 4,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 18,
    height: 18,
    borderRadius: 40,
    backgroundColor: '#fd756e',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#e1e2e1',
    paddingBottom: 8,
    flex: 1,
    color: '#333333',
    fontWeight: '600',
    minHeight: 45,
    paddingTop: 8,
    marginLeft: 6,
    fontSize: 18,
  },
});
export default Reminder;
