import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import ListContextWrapper from './context/list-context';
import AuthNavigation from './navigation/AuthNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <ListContextWrapper>
        <>
          <AuthNavigation />
          <StatusBar barStyle="default" />
        </>
      </ListContextWrapper>
    </NavigationContainer>
  );
};

export default App;
