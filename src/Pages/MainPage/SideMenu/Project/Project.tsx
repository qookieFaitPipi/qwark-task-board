import React from 'react';
import styles from './Project.module.scss';

const Project: React.FC = () => {
  return (
    <div className={styles.project}>
      <div className={styles.container}>
        <div className={styles.title}>Project1</div>
        <div className={styles.options}>&#8230;</div>
      </div>
    </div>
  )
}

export default React.memo(Project);