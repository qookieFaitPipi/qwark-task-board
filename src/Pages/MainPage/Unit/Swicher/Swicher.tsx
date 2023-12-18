import React from 'react';
import styles from './Swicher.module.scss';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getCookie } from '../../../../Hooks/getCookie';
import { addTask } from '../../../../redux/slices/mainSlice';

const Swicher: React.FC = () => {
  const {currentUser} = useSelector((state: any) => state.mainSlice);
  const dispatch = useDispatch();

  const userCreateTask = () => {
    dispatch(addTask({}));
  }

  return (
    <div className={styles.swicher}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div className={styles.item}>Overview</div>
          <div className={styles.item}>Tasks</div>
          <div className={styles.item}>CompTasks</div>
          <div className={styles.item}>Questions</div>
        </div>
        <div className={styles.rightBlock}>
          {currentUser === getCookie('userLogin') ? <div className={styles.createInput} onClick={userCreateTask}>Create task</div> : ''}
          <div className={styles.item}>Board</div>
          <div className={styles.item}>Table</div>
          <div className={styles.item}>List</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Swicher);