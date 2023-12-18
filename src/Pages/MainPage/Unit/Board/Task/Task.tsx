import React, { useState } from 'react';
import styles from './Task.module.scss';

// types 
import { TaskType } from '../../../../../@types/types';

// modals
import TagMenu from './TagMenu/TagMenu';
import EditMenu from './EditMenu/EditMenu';

const Task: React.FC<TaskType> = ({id, title, info, image, tag, creator, status}) => {
  const [tagMenuActive, setTagMenuActive] = useState<boolean>(false);
  const [editMenuActive, setEditMenuActive] = useState<boolean>(false)

  const [taskTag, setTaskTag] = useState<string>(tag);

  return (
    <div className={styles.task}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.tag} onClick={() => setTagMenuActive(!tagMenuActive)}>#{taskTag}</div>
          <div className={styles.options} onClick={() => setEditMenuActive(!editMenuActive)}>&#8230;</div>
        </div>
        <div className={styles.mainBlock}>
          <div className={styles.title}>{title}</div>
          <div className={styles.info}>{info}</div>
        </div>
        <div className={styles.bottomBlock}>
          
        </div>
        <TagMenu tagMenuActive={tagMenuActive} setTagMenuActive={setTagMenuActive} setTaskTag={setTaskTag} />
        <EditMenu taskId={id} editMenuActive={editMenuActive} setEditMenuActive={setEditMenuActive}/>
      </div>  
    </div>
  )
}

export default React.memo(Task);