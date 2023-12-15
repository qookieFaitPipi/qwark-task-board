import React from 'react';
import styles from './Swicher.module.scss';

const Swicher: React.FC = () => {
  return (
    <div className={styles.swicher}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div className={styles.item}>Overview</div>
          <div className={styles.item}>Tasks</div>
          <div className={styles.item}>Notes</div>
          <div className={styles.item}>Questions</div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.item}>Board</div>
          <div className={styles.item}>Table</div>
          <div className={styles.item}>List</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Swicher);