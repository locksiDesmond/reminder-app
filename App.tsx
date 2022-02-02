import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, StatusBar, Text} from 'react-native';
import AuthNavigation from './navigation/AuthNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
      <StatusBar barStyle="default" />
    </NavigationContainer>
  );
};

export default App;
