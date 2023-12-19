import React from 'react';
import styles from './Human.module.scss';

// axios
import axios from 'axios';

import logo from './../../../../Assets/images/logo.jpg';

// redux
import { useDispatch } from 'react-redux';
import { setTasks } from '../../../../redux/slices/mainSlice';

// types
import { UserType } from '../../../../@types/types';

const Human: React.FC<UserType> = ({id, login, image}) => {
  const dispatch = useDispatch()

  const selectUser = (login: string) => {
    try {
      axios.get('http://127.0.0.1:1636/get_tasks/' + login).then((res) => {
        dispatch(setTasks({
          tasks: res.data,
          currentUser: login
        }))
      })
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.human} onClick={() => selectUser(login)}>
      <div className={styles.container}>
        <img className={styles.userIcon} src={logo} alt="" />
        <div className={styles.info}>
          <div className={styles.username}>{login}</div>
          <div className={styles.lastseen}>online – 20.20.2000</div>
        </div>
        <div className={styles.options}>&#8249;</div>
      </div>
    </div>
  )
}

export default React.memo(Human);