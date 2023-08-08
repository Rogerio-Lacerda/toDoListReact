import React from 'react';
import './App.css';
import CriarTarefa from './Components/CriarTarefa';
import { UserContext, UserStorage } from './UserContext';
import ListarTarefa from './Components/ListarTarefa';
import FiltrarTarefa from './Components/FiltrarTarefa';

function App() {
  return (
    <>
      <UserStorage>
        <section className="container">
          <div className="tarefas">
            <CriarTarefa />
            <FiltrarTarefa />
            <ListarTarefa />
          </div>
        </section>
      </UserStorage>
    </>
  );
}

export default App;
