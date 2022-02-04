import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';
import IconWrapper from '../icon-wrapper/IconWrapper';
import {ListProps} from '../list-section/ListSection';

const ListCard = ({title, icon, iconColor, onPress, count}: ListProps) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.list}>
          <IconWrapper iconName={icon} iconColor={iconColor} />
          <View style={styles.detail}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.count}>{count} &nbsp; &gt;</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  icon: {
    backgroundColor: '#0000f1',
    borderRadius: 40,
    height: 32,
    width: 32,
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    marginLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
    minHeight: '100%',
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#222222',
  },
  count: {
    fontSize: 16,
    color: '#999999',
  },
  list: {
    flex: 1,
    minHeight: 60,
    alignItems: 'center',
    padding: 8,
    paddingBottom: 0,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
});
export default ListCard;
