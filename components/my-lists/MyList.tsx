import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import ListCard from '../list-card/ListCard';
import useList from '../../hooks/useLists';

const MyList = ({navigation}: any) => {
  const {lists} = useList();
  console.log({lists});
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
            icon={item.iconName}
            onPress={() =>
              navigation.navigate('List', {id: item.id, type: 'my-list'})
            }
          />
        )}
        style={styles.lists}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 35},
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
