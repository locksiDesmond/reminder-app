import {useState, useEffect} from 'react';
import {getData} from '../store';

const useList = () => {
  const [lists, setLists] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getData('lists');
      if (data) {
        setLists(data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return {lists, isLoading};
};
export default useList;
