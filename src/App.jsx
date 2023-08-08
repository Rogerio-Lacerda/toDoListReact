import React from 'react';
import './App.css';
import CriarTarefa from './Components/CriarTarefa';
import { UserStorage } from './UserContext';
import ListarTarefa from './Components/ListarTarefa';
import FiltrarTarefa from './Components/FiltrarTarefa';
import PesquisarTarefa from './Components/PesquisarTarefa';

function App() {
  return (
    <>
      <UserStorage>
        <section className="container">
          <div className="tarefas">
            <PesquisarTarefa />
            <FiltrarTarefa />
            <ListarTarefa />
            <CriarTarefa />
          </div>
        </section>
      </UserStorage>
    </>
  );
}

export default App;
