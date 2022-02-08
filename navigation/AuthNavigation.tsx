import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import List from '../screens/List';
import {Text} from 'react-native';
import EditButton from '../components/edit-button/EditButton';
import SelectList from '../screens/SelectList';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  List: {userId: string};
  'Select-List': undefined;
};

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
      <Stack.Screen
        options={{
          title: 'List',
        }}
        name="Select-List"
        component={SelectList}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
