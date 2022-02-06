import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import IconWrapper from '../icon-wrapper/IconWrapper';
import {ListProps} from '../list-section/ListSection';

const ListCard = ({title, icon, iconColor, onPress, count}: ListProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.list}>
          <IconWrapper iconName={icon} iconColor={iconColor} />
          <View style={styles.detail}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.iconWrapper}>
              <Text style={styles.count}>{count} &nbsp;</Text>
              <Icon name="navigate-next" size={24} color="#aaa" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  icon: {
    backgroundColor: '#1b84fa',
    borderRadius: 40,
    height: 32,
    width: 32,
  },
  iconWrapper: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
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
