import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import ListSection from '../list-section/ListSection';
import {lists} from '../../api/index';

const Sections = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      {lists.map(({title, icon, count, iconColor, id}) => (
        <ListSection
          onPress={() =>
            navigation.navigate('List', {id, type: 'top-category'})
          }
          key={`${title}-${count}`}
          title={title}
          icon={icon}
          count={count}
          iconColor={iconColor}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
export default Sections;
