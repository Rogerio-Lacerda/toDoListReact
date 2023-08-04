import React from 'react';
import './App.css';
import CriarTarefa from './Components/CriarTarefa';
import { UserContext, UserStorage } from './UserContext';

function App() {
  // const { tarefas } = React.useContext(GlobalContext);

  // console.log(tarefas);

  return (
    <>
      <UserStorage>
        <section className="container">
          <div className="tarefas">
            <CriarTarefa />
          </div>
        </section>
      </UserStorage>
    </>
  );
}

export default App;
