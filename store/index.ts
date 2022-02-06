import AsyncStorage from '@react-native-async-storage/async-storage';
import {lists} from '../api';

export interface dataProps {
  task: string;
  completed: boolean;
  notes?: string;
  date?: Date;
  iconColor: string;
  iconName: string;
  id?: number;
}
export const storeData = async (key: string, payload: any) => {
  try {
    let stored = await getData(key);
    let length = stored?.length || -1;
    let data = stored || [];
    data?.push({...payload, id: length + 1, date: new Date()});
    await AsyncStorage.setItem(key, JSON.stringify(data));
    await updateListCount('lists', key);
  } catch (error) {
    console.error({error});
  }
};

export const getData = async (key: string) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error({error});
    return [];
  }
};

export const updateListCount = async (key: string, value: string) => {
  try {
    let data = await getData(key);
    let idx = data?.findIndex((item: any) => item.title === value);
    data[idx] = {...data[idx], count: data[idx].count + 1};
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error({error});
  }
};
