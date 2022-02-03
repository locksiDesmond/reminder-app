import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import List from '../screens/List';
import {Text} from 'react-native';
import EditButton from '../components/edit-button/EditButton';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: '#eeeeee'},
          headerShadowVisible: false,
          title: '',
          headerRight: () => <EditButton />,
        }}
      />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
