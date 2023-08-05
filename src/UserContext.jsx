import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [tarefas, setTarefas] = React.useState(
    JSON.parse(localStorage.getItem('tarefas')),
  );

  const atualizar = () => {
    setTarefas(JSON.parse(localStorage.getItem('tarefas')));
  };

  return (
    <>
      <UserContext.Provider value={{ tarefas, setTarefas, atualizar }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
