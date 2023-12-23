import React, { useEffect, useState } from 'react';
import styles from './InfoBox.module.scss';

// axios
import axios from 'axios';

// redux
import { useDispatch } from 'react-redux';
import { addTask } from '../../../../redux/slices/mainSlice';
import { useSelector } from 'react-redux';
import { selectBoxState } from '../../../../redux/slices/boxSlice';

// modals
import TagMenu from './TagMenu/TagMenu';

// hooks
import { getCookie } from '../../../../Hooks/getCookie';

const CreateBox: React.FC = () => {
  const {pickedTaskId} = useSelector((state: any) => state.mainSlice);
  const dispatch = useDispatch();

  const [tag, setTag] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [info, setInfo] = useState<string>('');

  useEffect(() => {
    if(!pickedTaskId)
      return

    axios.get('http://127.0.0.1:1636/get_task_data/' + pickedTaskId).then((res) => {
      setTag(res.data.tag);
    });
  }, []);

  const [tagMenuActive, setTagMenuActive] = useState<boolean>(false);

  const userCompleteTask = () => {
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
        dispatch(selectBoxState(undefined));
      }
    })
  }

  return (
    <div className={styles.infoBox}>
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
        <div className={styles.complete} onClick={userCompleteTask}>Complete</div>
      </div>
    </div>
  )
}

export default React.memo(CreateBox);