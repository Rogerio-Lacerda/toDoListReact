import React from 'react';
import styles from './ListarTarefa.module.css';
import Titulo from './Titulo';
import { UserContext } from '../UserContext';
import { ReactComponent as Lixeira } from '../Assets/lix.svg';

const ListarTarefa = () => {
  const { tarefas, atualizar } = React.useContext(UserContext);
  const [completos, setCompletos] = React.useState([]);

  React.useEffect(() => {
    setCompletos(tarefas.filter(({ status }) => status));
  }, [atualizar, setCompletos, tarefas]);

  const excluirTarefa = (index) => {
    localStorage.setItem(
      'tarefas',
      JSON.stringify(tarefas.filter(({ id }) => tarefas[index].id !== id)),
    );
    atualizar();
  };

  const completarTarefa = (index) => {
    localStorage.setItem(
      'tarefas',
      JSON.stringify(
        tarefas.map(({ tarefa, categoria, id, status }) => {
          if (tarefas[index].id === id) {
            return { tarefa, categoria, id, status: true };
          } else {
            return { tarefa, categoria, id, status };
          }
        }),
      ),
    );
    atualizar();
  };

  return (
    <>
      <div className={styles.listarTarefa}>
        <Titulo texto="Tarefas" />
        <ul className={styles.containerTarefas}>
          {tarefas
            ? tarefas.map(({ tarefa, categoria, id, status }, index) => (
                <li key={id} id={id} className={styles.tarefas}>
                  <div className={styles.informacoes}>
                    <p className={status ? styles.completo : null}>{tarefa}</p>
                    <span className={status ? styles.completo : null}>
                      ({categoria})
                    </span>
                  </div>
                  <div className={styles.botoes}>
                    <button
                      className={styles.completar}
                      onClick={() => completarTarefa(index)}
                    >
                      Completar
                    </button>
                    <button
                      className={styles.excluir}
                      id={index}
                      onClick={() => excluirTarefa(index)}
                    >
                      <Lixeira />
                    </button>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

export default ListarTarefa;
