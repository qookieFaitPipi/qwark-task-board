import React, { useState } from 'react';
import styles from './SideMenu.module.scss';

// components
import Project from './Project/Project';
import Human from './Human/Human';

// redux
import { useSelector } from 'react-redux';

// types
import { UserType } from '../../../@types/types';

const SideMenu: React.FC = () => {
  const {users} = useSelector((state: any) => state.mainSlice);

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
          {users.map((user: UserType) => 
            <Human 
              key={user.id} 
              id={user.id}
              login={user.login}
              image={user.image}
            />
          )}
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.addInput}>+ Add Project</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SideMenu);