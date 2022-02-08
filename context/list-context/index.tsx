import React from 'react';

export const ListContext = React.createContext({
  list: '',
});

const ListContextWrapper: React.FC<{children: JSX.Element}> = ({children}) => {
  return (
    <ListContext.Provider value={{list: 'Reminder'}}>
      {children}
    </ListContext.Provider>
  );
};
export default ListContextWrapper;
