import React, { useState } from 'react';
import styles from './SideMenu.module.scss';

// components
import Project from './Project/Project';
import Human from './Human/Human';

const SideMenu: React.FC = () => {
  const [project, setProjects] = useState([]);

  return (
    <div className={styles.sideMenu}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.title}>Projects</div>
          <Project />
          <Project />
        </div>
        <div className={styles.mainBlock}>
          <div className={styles.title}>Team members</div>
          <Human />
          <Human />
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.addInput}>+ Add Project</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SideMenu);