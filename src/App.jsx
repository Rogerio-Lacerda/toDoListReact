import React from 'react';
import './App.css';
import CriarTarefa from './Components/CriarTarefa';
import { UserContext, UserStorage } from './UserContext';
import ListarTarefa from './Components/ListarTarefa';

function App() {
  // const { tarefas } = React.useContext(GlobalContext);

  // console.log(tarefas);

  return (
    <>
      <UserStorage>
        <section className="container">
          <div className="tarefas">
            <CriarTarefa />
            <ListarTarefa />
          </div>
        </section>
      </UserStorage>
    </>
  );
}

export default App;
