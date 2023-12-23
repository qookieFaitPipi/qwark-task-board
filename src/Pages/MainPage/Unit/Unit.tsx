import React, { useState } from 'react';
import styles from './Unit.module.scss';

// components
import Swicher from './Swicher/Swicher';
import Searcher from './Searcher/Searcher';
import Board from './Board/Board';
import InfoBox from './InfoBox/InfoBox';

// redux
import { useSelector } from 'react-redux';

const Unit: React.FC = () => {
  const {infoBoxState} = useSelector((state: any) => state.boxSlice);
  console.log(infoBoxState);

  return ( 
    <div className={styles.unit}>
      <div className={styles.container}>
        <Searcher />
        <Swicher 

        />
        {infoBoxState === 'create'
          ? 
          <InfoBox /> 
          :
          <Board />
        }
      </div>
    </div>
  )
}

export default React.memo(Unit);