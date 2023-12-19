import React, { useEffect } from 'react';

// axios
import axios from 'axios';

// components
import Navbar from './Navbar/Navbar';
import SideMenu from './SideMenu/SideMenu';
import Unit from './Unit/Unit';

// redux
import { useDispatch } from 'react-redux';
import { setUsers } from '../../redux/slices/mainSlice';

const MainPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      axios.get('http://127.0.0.1:1636/get_users').then((res) => {
        dispatch(setUsers({
          users: res.data
        }))
      })
    } catch(err) {
      console.log(err);
    }
  }, []);

  return (
    <div style={{display: 'flex'}}>
      <Navbar />
      <SideMenu />
      <Unit />
    </div>
  )
}

export default React.memo(MainPage);