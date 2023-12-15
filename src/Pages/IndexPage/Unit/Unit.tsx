import React from 'react';
import styles from './Unit.module.scss';

// components
import Swicher from './Swicher/Swicher';
import Searcher from './Searcher/Searcher';
import Board from './Board/Board';

const Unit: React.FC = () => {
  return (
    <div className={styles.unit}>
      <div className={styles.container}>
        <Searcher />
        <Swicher />
        <Board />
      </div>
    </div>
  )
}

export default React.memo(Unit);