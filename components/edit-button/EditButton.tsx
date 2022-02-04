import React from 'react';
import {TouchableHighlight, Text, TouchableWithoutFeedback} from 'react-native';

const EditButton = () => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
      <Text
        style={{
          fontSize: 20,
          color: '#1887ff',
          textTransform: 'capitalize',
        }}>
        Edit
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default EditButton;
