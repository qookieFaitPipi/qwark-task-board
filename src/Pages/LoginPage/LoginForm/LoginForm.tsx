import React, {useState} from 'react';
import styles from './LoginForm.module.scss'

// axios
import axios from 'axios';

// react-router-dom
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/slices/userSlice';

const LoginForm: React.FC = () => {
  const [userLogin, serUserLogin] = useState<string>('');
  const [userPassword, serUserPassword] = useState<string>('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEntry = async() => {
    try {
      await axios.post('http://127.0.0.1:1636/login', {login: userLogin, password: userPassword}).then((res) => {
        if(res.data.status) {
          dispatch(login({
            userLogin: userLogin,
            accessToken: res.data
          }));
          navigate('/index');
        }
      })
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.loginForm}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.title}>login</div>
        </div>
        <div className={styles.mainBlock}>
          <input className={styles.textInput} value={userLogin} onChange={e => serUserLogin(e.target.value)} placeholder='login' type="text" />
          <input className={styles.textInput} value={userPassword} onChange={e => serUserPassword(e.target.value)} placeholder='password' type="password" />
          <div className={styles.continueInput} onClick={userEntry}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(LoginForm);
