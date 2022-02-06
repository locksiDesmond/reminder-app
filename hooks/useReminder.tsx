import {useState, useEffect} from 'react';
import {getData} from '../store';

const useReminder = (key: string) => {
  const [lists, setLists] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getData(key);
      if (data) {
        setLists(data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return {lists, isLoading};
};
export default useReminder;
