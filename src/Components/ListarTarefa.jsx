import React from 'react';
import styles from './ListarTarefa.module.css';
import Titulo from './Titulo';
import { UserContext } from '../UserContext';
import { ReactComponent as Lixeira } from '../Assets/lix.svg';

const ListarTarefa = () => {
  const { tarefas, atualizar, statusTarefa, pesquisarTarefa, ordenarTarefa } =
    React.useContext(UserContext);
  const [filtrados, setFiltrados] = React.useState(tarefas);

  React.useEffect(() => {
    if (statusTarefa === 'todas') {
      setFiltrados(tarefas);
    } else if (statusTarefa === 'completas') {
      setFiltrados(tarefas.filter(({ status }) => status));
    } else {
      setFiltrados(tarefas.filter(({ status }) => !status));
    }
  }, [atualizar, setFiltrados, tarefas, statusTarefa]);

  const excluirTarefa = (idTarefa) => {
    localStorage.setItem(
      'tarefas',
      JSON.stringify(tarefas.filter(({ id }) => idTarefa !== id)),
    );
    atualizar();
  };

  const completarTarefa = (idTarefa) => {
    localStorage.setItem(
      'tarefas',
      JSON.stringify(
        tarefas.map(({ tarefa, categoria, id, status }) => {
          if (idTarefa === id) {
            return { tarefa, categoria, id, status: true };
          } else {
            return { tarefa, categoria, id, status };
          }
        }),
      ),
    );
    atualizar();
  };

  const descompletarTarefa = (idTarefa) => {
    localStorage.setItem(
      'tarefas',
      JSON.stringify(
        tarefas.map(({ tarefa, categoria, id, status }) => {
          if (idTarefa === id) {
            return { tarefa, categoria, id, status: false };
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
          {filtrados.length ? (
            filtrados
              .filter(({ tarefa }) =>
                tarefa.toLowerCase().includes(pesquisarTarefa.toLowerCase()),
              )
              .sort((a, b) =>
                ordenarTarefa === 'asc'
                  ? a.tarefa.localeCompare(b.tarefa)
                  : b.tarefa.localeCompare(a.tarefa),
              )
              .map(({ tarefa, categoria, id, status }, index) => (
                <li key={id} id={id} className={styles.tarefas}>
                  <div className={styles.informacoes}>
                    <p className={status ? styles.completo : null}>{tarefa}</p>
                    <span className={status ? styles.completo : null}>
                      ({categoria})
                    </span>
                  </div>
                  <div className={styles.botoes}>
                    <button
                      className={
                        status ? styles.descompletar : styles.completar
                      }
                      onClick={
                        status
                          ? () => descompletarTarefa(id)
                          : () => completarTarefa(id)
                      }
                    >
                      {status ? 'Descompletar' : 'Completar'}
                    </button>
                    <button
                      className={styles.excluir}
                      id={index}
                      onClick={() => excluirTarefa(id)}
                    >
                      <Lixeira />
                    </button>
                  </div>
                </li>
              ))
          ) : (
            <p className={styles.semTarefa}>Nenhuma tarefa foi adicionada</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default ListarTarefa;
