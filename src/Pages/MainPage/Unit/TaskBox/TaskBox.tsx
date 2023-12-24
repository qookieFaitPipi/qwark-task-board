import React, { useEffect, useState } from 'react';
import styles from './TaskBox.module.scss';

// axios
import axios from 'axios';

// redux
import { useDispatch } from 'react-redux';
import { addTask } from '../../../../redux/slices/mainSlice';
import { useSelector } from 'react-redux';
import { selectTaskBoxState } from '../../../../redux/slices/boxSlice';

// modals
import TagMenu from './TagMenu/TagMenu';

// hooks
import { getCookie } from '../../../../Hooks/getCookie';

const TaskBox: React.FC = () => {
  const {taskBoxState, updateTaskId} = useSelector((state: any) => state.boxSlice);
  const dispatch = useDispatch();

  const [tag, setTag] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [info, setInfo] = useState<string>('');

  const [tagMenuActive, setTagMenuActive] = useState<boolean>(false);


  useEffect(() => {
    if(updateTaskId)
      axios.get('http://127.0.0.1:1636/get_task_data/' + updateTaskId).then((res) => {
        setTag(res.data.tag);
        setTitle(res.data.title);
        setInfo(res.data.info);
      })
  }, []);

  const userCreateTask = () => {
    const userData = {
      title: title,
      info: info,
      image: 'image',
      tag: tag,
      creator: getCookie('userLogin'),
    }
    axios.post('http://127.0.0.1:1636/save_new_task', userData).then((res) => {
      if(res.data.status) {
        dispatch(addTask({
          title: title,
          info: info,
          image: 'image',
          tag: tag,
          creator: getCookie('userLogin'),
        }))
        dispatch(selectTaskBoxState(undefined));
      }
    })
  }

  const userUpdateTask = () => {
    const userData = {
      title: title,
      info: info,
      image: 'image',
      tag: tag,
    }
    axios.post('http://127.0.0.1:1636/update_task/' + updateTaskId, userData).then((res) => {
      if(res.data.status) {
        alert('Успешно!')
      }
    })
  }

  return (
    <div className={styles.taskBox}>
      <div className={styles.container}>
        <div className={styles.imageBlock}></div>
        <div className={styles.controlBlock}>
          <div className={styles.tag} onClick={() => setTagMenuActive(!tagMenuActive)}>#{tag}</div>
          <TagMenu 
            tag={tag} 
            setTag={setTag}
            tagMenuActive={tagMenuActive}
            setTagMenuActive={setTagMenuActive}
          />
          <input className={styles.titleInput} value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Название' type="text" />
          <textarea className={styles.infoInput} value={info} onChange={(e) => setInfo(e.target.value)} placeholder='Райтап' name=""></textarea>
        </div>
        <div className={styles.complete} onClick={taskBoxState === 'create' ? userCreateTask : userUpdateTask}>{taskBoxState === 'create' ? 'Complete' : 'Update'}</div>
      </div>
    </div>
  )
}

export default React.memo(TaskBox);