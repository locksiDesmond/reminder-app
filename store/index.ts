import AsyncStorage from '@react-native-async-storage/async-storage';
import {lists} from '../api';

interface dataProps {
  task: string;
  completed: boolean;
  date?: Date;
  iconColor: string;
  iconName: string;
  id: number;
}
export const storeData = async (key: string, data: dataProps[]) => {
  try {
    await AsyncStorage.clear();
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error({error});
  }
};

export const getData = async (key: string) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as dataProps[];
    }
    return [];
  } catch (error) {
    return [];
    console.error({error});
  }
};
