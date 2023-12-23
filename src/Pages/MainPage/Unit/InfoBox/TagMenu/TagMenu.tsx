import React from 'react';
import styles from './TagMenu.module.scss';

// types
import { TagMenuType } from '../../../../../@types/types';

const TagMenu: React.FC<TagMenuType> = ({tag, setTag, tagMenuActive, setTagMenuActive}) => {

  const chooseTag = (e: any) => {
    setTag(e.target.innerText);
    setTagMenuActive(!tagMenuActive);
  }

  return (
    <div className={styles.tagMenu} style={tagMenuActive ? {display: 'block'} : {display: 'none'}}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>web</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>reverse</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>pwn</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>osint</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>stego</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>crypto</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>forensics</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>misc</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>ppc</div>
        <div className={styles.item} onClick={(e) => chooseTag(e)}>other</div>
      </div>
    </div>
  )
}

export default React.memo(TagMenu);