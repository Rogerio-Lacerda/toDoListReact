import React from 'react';
import styles from './ListarTarefa.module.css';
import Titulo from './Titulo';
import { UserContext } from '../UserContext';
import { ReactComponent as Lixeira } from '../Assets/lix.svg';

const ListarTarefa = () => {
  const { tarefas, setTarefas } = React.useContext(UserContext);

  return (
    <>
      <div className={styles.listarTarefa}>
        <Titulo texto="Tarefas" />
        <ul className={styles.containerTarefas}>
          {tarefas.map(({ tarefa, categoria, id }) => (
            <li key={id} id={id} className={styles.tarefas}>
              <div className={styles.informacoes}>
                <p>{tarefa}</p>
                <span>({categoria})</span>
              </div>
              <div className={styles.botoes}>
                <button className={styles.completar}>Completar</button>
                <button className={styles.excluir}>
                  <Lixeira />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListarTarefa;
