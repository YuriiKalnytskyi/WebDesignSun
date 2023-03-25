import React, { useState } from 'react';

import * as Styled from './dashboard.styled';
import { Drawer } from '../common/component';

import { CreatePost } from './component/create-post';
import { EditPost } from './component/edit-post';

const Dashboard = () => {
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState({
    flag: false,
    component: ''
  });

  const onDrawer = (flag, component = '') => {
    setIsAddDrawerOpen((prev) => {
      prev.flag = flag;
      prev.component = component;

      return { ...prev };
    });
  };

  return (
    <Styled.Container>
      Dashboard
      <button onClick={onDrawer.bind(this, true, 'create')}>open</button>
      <button onClick={onDrawer.bind(this, true, 'edit')}>edit</button>
      <button onClick={onDrawer.bind(this, true, 'view')}>view</button>
      <Drawer
        open={isAddDrawerOpen.flag}
        onClose={onDrawer.bind(this, false, '')}
        contentPosition='right'
        slidePosition='right'
      >

        <CreatePost component={isAddDrawerOpen.component} onCloseDrawer={onDrawer.bind(this, false)} />


      </Drawer>
    </Styled.Container>
  );
};
export default Dashboard;
