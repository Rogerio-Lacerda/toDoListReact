import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [tarefas, setTarefas] = React.useState(
    JSON.parse(localStorage.getItem('tarefas')),
  );
  const [statusTarefa, setStatusTarefa] = React.useState('todas');
  const [pesquisarTarefa, setPesquisarTarefa] = React.useState('');
  const [ordenarTarefa, setOrdenarTarefa] = React.useState('asc');

  const atualizar = () => {
    setTarefas(JSON.parse(localStorage.getItem('tarefas')));
  };

  return (
    <>
      <UserContext.Provider
        value={{
          tarefas,
          setTarefas,
          statusTarefa,
          setStatusTarefa,
          pesquisarTarefa,
          setPesquisarTarefa,
          ordenarTarefa,
          setOrdenarTarefa,
          atualizar,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
