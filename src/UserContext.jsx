import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [tarefas, setTarefas] = React.useState(
    JSON.parse(localStorage.getItem('tarefas')),
  );
  const [statusTarefa, setStatusTarefa] = React.useState('todas');
  const [pesquisarTarefa, setPesquisarTarefa] = React.useState('');

  const atualizar = () => {
    setTarefas(JSON.parse(localStorage.getItem('tarefas')));
  };

  return (
    <>
      <UserContext.Provider
        value={{
          tarefas,
          setTarefas,
          atualizar,
          setStatusTarefa,
          statusTarefa,
          setPesquisarTarefa,
          pesquisarTarefa,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
