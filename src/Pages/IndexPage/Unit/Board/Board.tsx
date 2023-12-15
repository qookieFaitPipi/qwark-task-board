import React from 'react';
import styles from './Board.module.scss';

// components
import Task from './Task/Task';

const Board: React.FC = () => {
  return (
    <div className={styles.board}>
      <div className={styles.container}>
        <Task />
      </div>
    </div>
  )
}

export default React.memo(Board);