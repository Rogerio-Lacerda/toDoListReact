import React from 'react';
import styles from './PesquisarTarefa.module.css';
import Titulo from './Titulo';
import { UserContext } from '../UserContext';

const PesquisarTarefa = () => {
  const [pesquisar, setPesquisar] = React.useState('');
  const { setPesquisarTarefa } = React.useContext(UserContext);

  const handleChange = ({ target }) => {
    setPesquisar(target.value);
    setPesquisarTarefa(target.value);
  };

  return (
    <div className={styles.pesquisarTarefa}>
      <Titulo texto="Pesquisar" />
      <form className={styles.formPesquisar}>
        <label htmlFor="pesquisar">Digite alguma tarefa</label>
        <input
          id="pesquisar"
          name="pesquisar"
          value={pesquisar}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default PesquisarTarefa;
