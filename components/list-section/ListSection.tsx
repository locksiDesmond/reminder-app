import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import IconWrapper from '../icon-wrapper/IconWrapper';

export interface ListProps {
  icon?: string;
  title: string;
  count: number;
  iconColor: string;
  onPress: () => void;
}

const ListSection = (props: ListProps) => {
  return (
    <TouchableOpacity
      onLongPress={() => console.log('long press')}
      onPress={props.onPress}
      style={styles.listSection}>
      <View>
        <IconWrapper iconColor={props.iconColor} iconName={props.icon} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.count}>{props.count}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listSection: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    minWidth: '45%',
    maxWidth: '48%',
    marginRight: '2%',
    marginVertical: '2%',
    justifyContent: 'space-between',
  },
  icon: {
    height: 30,
    width: 30,
    backgroundColor: '#0000ff',
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    color: '#555555',
    marginTop: 8,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default ListSection;
