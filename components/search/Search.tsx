import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Search = () => {
  const [state, setState] = useState('');
  return (
    <TextInput
      value={state}
      placeholder="Search"
      style={styles.input}
      onChangeText={setState}></TextInput>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    backgroundColor: '#e5e5e5',
    margin: 1,
    padding: 4,
    paddingLeft: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
});

export default Search;
