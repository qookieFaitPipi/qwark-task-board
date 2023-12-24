import React, { useState } from 'react';
import styles from './Unit.module.scss';

// components
import Swicher from './Swicher/Swicher';
import Searcher from './Searcher/Searcher';
import Board from './Board/Board';
import TaskBox from './TaskBox/TaskBox';

// redux
import { useSelector } from 'react-redux';

const Unit: React.FC = () => {
  const {taskBoxState} = useSelector((state: any) => state.boxSlice);

  return ( 
    <div className={styles.unit}>
      <div className={styles.container}>
        <Searcher />
        <Swicher 

        />
        {taskBoxState
          ? 
          <TaskBox /> 
          :
          <Board />
        }
      </div>
    </div>
  )
}

export default React.memo(Unit);