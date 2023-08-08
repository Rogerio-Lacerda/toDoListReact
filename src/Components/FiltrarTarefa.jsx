import React from 'react';
import styles from './FiltrarTarefa.module.css';
import Titulo from './Titulo.jsx';
import { UserContext } from '../UserContext';

const FiltrarTarefa = () => {
  const { setStatusTarefa, setOrdenarTarefa } = React.useContext(UserContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setStatusTarefa(value);
  };

  const handleClick = ({ target }) => {
    setOrdenarTarefa(target.innerText.toLowerCase());
  };

  return (
    <div className={styles.filtrarTarefa}>
      <Titulo texto="Filtrar" />
      <form className={styles.formStatus}>
        <label htmlFor="status">Status</label>
        <select id="status" name="status" onClick={handleChange}>
          <option value="todas">Todas</option>
          <option value="completas">Completas</option>
          <option value="incompletas">Incompletas</option>
        </select>
      </form>
      <div className={styles.ordenar}>
        <h3>Ordenar</h3>
        <div className={styles.ordenarBtns}>
          <button onClick={handleClick}>Asc</button>
          <button onClick={handleClick}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default FiltrarTarefa;
