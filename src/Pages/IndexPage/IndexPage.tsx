import React from 'react';

// components
import Navbar from './Navbar/Navbar';
import SideMenu from './SideMenu/SideMenu';
import Unit from './Unit/Unit';

const IndexPage: React.FC = () => {
  return (
    <div style={{display: 'flex'}}>
      <Navbar />
      <SideMenu />
      <Unit />
    </div>
  )
}

export default React.memo(IndexPage);