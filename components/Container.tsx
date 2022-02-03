import * as React from 'react';
import {View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Container = (props: Props) => (
  <View style={{flex: 1, paddingHorizontal: 16}}>{props.children}</View>
);

export default Container;
