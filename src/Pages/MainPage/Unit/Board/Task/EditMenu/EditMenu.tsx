import React from 'react';
import styles from './EditMenu.module.scss';

// types
import { EditMenuType } from '../../../../../../@types/types';

// redux
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../../../../redux/slices/mainSlice';

const EditMenu: React.FC<EditMenuType> = ({taskId, editMenuActive, setEditMenuActive}) => {
  const dispatch = useDispatch()

  const userDeleteTask = () => {
    setEditMenuActive(!editMenuActive);
    dispatch(deleteTask({id: taskId}))
  }

  return (
    <div className={styles.editMenu} onClick={() => setEditMenuActive(!editMenuActive)} style={editMenuActive ? {display: 'block'} : {display: 'none'}}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <div className={styles.item}>Редактировать</div>
        <div className={styles.item} onClick={userDeleteTask}>Удалить</div>
      </div>
    </div>
  )
}

export default React.memo(EditMenu);