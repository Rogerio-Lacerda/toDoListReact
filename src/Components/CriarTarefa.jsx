import React from 'react';
import styles from './CriarTarefa.module.css';
import Titulo from './Titulo';
import Error from './Helper/Error';
import { UserContext } from '../UserContext';

const CriarTarefa = () => {
  const [tarefa, setTarefa] = React.useState('');
  const [escolha, setEscolha] = React.useState('categoria');
  const [errorEscolha, setErrorEscolha] = React.useState(false);
  const [errorTarefa, setErrorTarefa] = React.useState(false);
  const { tarefas, setTarefas } = React.useContext(UserContext);

  const handleChange = ({ target }) => {
    setTarefa(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tarefa.length === 0) {
      setErrorTarefa('Preencha alguma tarefa!');
      setErrorEscolha(false);
    } else if (escolha === 'categoria') {
      setErrorEscolha('Escolha alguma categoria!');
      setErrorTarefa(false);
    } else {
      setErrorTarefa(false);
      setErrorEscolha(false);
      const letras = 'abcdefghijklmnopqrstuvwxyz';
      const place_id =
        letras.charAt(Math.floor(Math.random() * letras.length)) +
        (Math.random() + 1).toString(36).substring(2, 9);
      setTarefas([
        ...tarefas,
        { tarefa: tarefa, categoria: escolha, id: place_id },
      ]);
    }
  };

  return (
    <div className={styles.criarTarefa}>
      <Titulo texto="Criar Tarefa" />
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <label htmlFor="tarefa">Nome da Tarefa</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={handleChange}
        />
        <Error error={errorTarefa} />
        <label htmlFor="escolha">Categoria</label>
        <select
          name="escolha"
          id="escolha"
          onChange={({ target }) => setEscolha(target.value)}
          value={escolha}
          className={styles.categoria}
        >
          <option value="categoria" disabled>
            Seleciona uma categoria
          </option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <Error error={errorEscolha} />
        <button>Criar tarefa</button>
      </form>
    </div>
  );
};

export default CriarTarefa;
