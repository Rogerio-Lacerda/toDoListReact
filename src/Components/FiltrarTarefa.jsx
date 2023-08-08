import React from 'react';
import styles from './FiltrarTarefa.module.css';
import Titulo from './Titulo.jsx';
import { UserContext } from '../UserContext';

const FiltrarTarefa = () => {
  const { setStatusTarefa } = React.useContext(UserContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setStatusTarefa(value);
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
    </div>
  );
};

export default FiltrarTarefa;
