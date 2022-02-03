import React from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import ListCard from '../list-card/ListCard';
import {lists} from '../../api/index';

const MyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Lists</Text>
      <FlatList
        data={lists}
        renderItem={({item}) => (
          <ListCard
            iconColor={item.iconColor}
            count={item.count}
            title={item.title}
            key={item.id}
            onPress={() => console.log('onPress')}
          />
        )}
        style={styles.lists}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 80},
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
    marginBottom: 14,
    marginTop: 20,
  },
  lists: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexShrink: 1,
  },
});

export default MyList;
