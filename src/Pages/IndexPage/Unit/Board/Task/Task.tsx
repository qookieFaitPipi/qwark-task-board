import React from 'react';
import styles from './Task.module.scss';

const Task: React.FC = () => {
  return (
    <div className={styles.task}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.class}>#web</div>
          <div className={styles.options}>&#8230;</div>
        </div>
        <div className={styles.mainBlock}>
          <div className={styles.title}>title-task</div>
          <div className={styles.info}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptas similique! Incidunt est, reiciendis ad fugiat eaque aliquid in architecto tenetur ipsa. Nulla alias temporibus ipsa voluptate ratione aut quas.</div>
        </div>
        <div className={styles.bottomBlock}>
          
        </div>
      </div>  
    </div>
  )
}

export default React.memo(Task);