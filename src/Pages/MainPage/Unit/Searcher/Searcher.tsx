import React from 'react';
import styles from './Searcher.module.scss';

// icons
import settings from './../../../../Assets/images/icons/settings1.png';
import bell from './../../../../Assets/images/icons/bell2.png';

import logo from './../../../../Assets/images/logo.jpg';

// hooks
import { getCookie } from '../../../../Hooks/getCookie';

const Searcher: React.FC = () => {
  return (
    <div className={styles.searcher}>
      <div className={styles.container}>
        <input className={styles.searchInput} type="text" placeholder='Поиск...' />
        <div className={styles.control}>
          <img className={styles.settingsIcon} src={settings} alt="settings" />
          <img className={styles.settingsIcon} src={bell} alt="bell" />
          <div className={styles.userControl}>
            <img className={styles.userIcon} src={logo} alt="" />
            <div className={styles.userName}>{getCookie('userLogin')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Searcher);