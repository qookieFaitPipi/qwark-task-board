import React from 'react';
import styles from './Board.module.scss';

// components
import Task from './Task/Task';

// redux
import { useSelector } from 'react-redux';

import { TaskType } from '../../../../@types/types';

const Board: React.FC = () => {
  const {tasks} = useSelector((state: any) => state.mainSlice);

  return (
    <div className={styles.board}>
      <div className={styles.container}>
        {tasks.map((task: TaskType) => 
          <Task 
            id={task.id}
            key={task.id}
            title={task.title} 
            info={task.info}
            image={task.image}
            tag={task.tag}
            creator={task.creator}
            status={task.status}
          />
        )}
      </div>
    </div>
  )
}

export default React.memo(Board);