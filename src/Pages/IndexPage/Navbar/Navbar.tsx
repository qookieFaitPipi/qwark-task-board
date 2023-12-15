import React from 'react';
import styles from './Navbar.module.scss';

import userIcon from './../../../Assets/images/icons/user.png';
import middle from './../../../Assets/images/icons/middle.png';
import tasks from './../../../Assets/images/icons/tasks.png';
import clock from './../../../Assets/images/icons/clock.png';
import exit from './../../../Assets/images/icons/exit.png';

// react-router-dom
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/slices/userSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogout = () => {
    dispatch(logout());
    navigate('/');
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <img className={styles.userIcon} width='40px' height='40px' src={userIcon} alt="userIcon" />
        </div>
        <div className={styles.mainBlock}>
          <img className={styles.sideIcon} width='40px' height='40px' src={middle} alt="" />
          <img className={styles.sideIcon} width='38px' height='38px' src={tasks} alt="" />
          <img className={styles.sideIcon} width='38px' height='38px' src={clock} alt="" />
          <img className={styles.sideIcon} width='40px' height='40px' src={middle} alt="" />
          <img className={styles.sideIcon} width='40px' height='40px' src={middle} alt="" />
        </div>      
        <div className={styles.bottomBlock} onClick={userLogout}>
          <img className={styles.sideIcon} width='40px' height='40px' src={exit} alt="" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Navbar);