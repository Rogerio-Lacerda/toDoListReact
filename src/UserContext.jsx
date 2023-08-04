import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [tarefas, setTarefas] = React.useState([]);

  return (
    <>
      <UserContext.Provider value={{ tarefas, setTarefas }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
