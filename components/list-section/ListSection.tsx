import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

interface ListSectionProps {
  icon?: string;
  title: string;
  count: number;
  iconColor: string;
  onPress: () => void;
}

const ListSection = (props: ListSectionProps) => {
  return (
    <TouchableOpacity
      onLongPress={() => console.log('long press')}
      onPress={props.onPress}
      style={styles.listSection}>
      <View>
        <View style={[styles.icon, {backgroundColor: props.iconColor}]}></View>
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
    minWidth: '43%',
    maxWidth: '45%',
    marginHorizontal: '2%',
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
