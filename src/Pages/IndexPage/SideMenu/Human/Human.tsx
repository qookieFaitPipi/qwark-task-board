import React from 'react';
import styles from './Human.module.scss';

import logo from './../../../../Assets/images/logo.jpg';

const Human: React.FC = () => {
  return (
    <div className={styles.human}>
      <div className={styles.container}>
        <img className={styles.userIcon} src={logo} alt="" />
        <div className={styles.info}>
          <div className={styles.username}>qookieFaitPipi</div>
          <div className={styles.lastseen}>online – 20.20.2000</div>
        </div>
        <div className={styles.options}>&#8249;</div>
      </div>
    </div>
  )
}

export default React.memo(Human);