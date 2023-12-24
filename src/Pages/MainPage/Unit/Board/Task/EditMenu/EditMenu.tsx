import React from 'react';
import styles from './EditMenu.module.scss';

// axios
import axios from 'axios';

// types
import { EditMenuType } from '../../../../../../@types/types';

// redux
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../../../../redux/slices/mainSlice';
import { setUpdateTaskId, selectTaskBoxState } from '../../../../../../redux/slices/boxSlice';

const EditMenu: React.FC<EditMenuType> = ({taskId, editMenuActive, setEditMenuActive}) => {
  const dispatch = useDispatch()

  const userDeleteTask = () => {
    axios.get('http://127.0.0.1:1636/delete_task/' + taskId).then((res) => {
      if(res.data.status) {
        setEditMenuActive(!editMenuActive);
        dispatch(deleteTask({id: taskId}));
      }
    })
  }

  const userEditTask = () => {
    setEditMenuActive(!editMenuActive);
    dispatch(setUpdateTaskId(taskId));
    dispatch(selectTaskBoxState('update'));
  }

  return (
    <div className={styles.editMenu} onClick={() => setEditMenuActive(!editMenuActive)} style={editMenuActive ? {display: 'block'} : {display: 'none'}}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <div className={styles.item} onClick={userEditTask}>Редактировать</div>
        <div className={styles.item} onClick={userDeleteTask}>Удалить</div>
      </div>
    </div>
  )
}

export default React.memo(EditMenu);