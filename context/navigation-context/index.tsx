import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../navigation/AuthNavigation';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ProfileScreenNavigationProp = Props['navigation'];

export const NavigationContext = React.createContext<{
  navigation: ProfileScreenNavigationProp | null;
}>({
  navigation: null,
});

const NavigationWrapper: React.FC<{
  children: JSX.Element;
  navigation: ProfileScreenNavigationProp;
}> = ({children, navigation}) => {
  return (
    <NavigationContext.Provider value={{navigation}}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationWrapper;
