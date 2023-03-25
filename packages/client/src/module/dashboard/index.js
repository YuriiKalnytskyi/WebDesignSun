import React, { useState } from 'react';

import * as Styled from './dashboard.styled';
import { Drawer, Pagination } from '../common/component';

import { CreatePost } from './component/create-post';
import { posts } from '../home';
import { Table } from './component/table/table';

import plus from '../../assets/icon/plus.svg';
import { Create } from './constants';

const Dashboard = () => {
  const [page, setPage] = useState(1);

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
      <Styled.Content>
        <Styled.HeaderWrapper>
          <Styled.HeaderTitle>
            Post
            {posts.length ? (
              <Styled.ItemQuantatyBadge>
                {posts.length} {posts.length === 1 ? 'item' : 'items'}
              </Styled.ItemQuantatyBadge>
            ) : null}
          </Styled.HeaderTitle>

          <Styled.SaveButton
            width={'150px'}
            content={'Create'}
            type="submit"
            variant="primary"
            mb={'20px'}
            startIcon={plus}
            onClick={onDrawer.bind(this, true, Create)}
          />
        </Styled.HeaderWrapper>

        {posts?.length ? <Table items={posts} /> : null}

        <div>
          {30 && 30 > 10 ? (
            <Pagination
              totalCount={100}
              pageSize={10}
              siblingCount={1}
              onPageChange={(num) => setPage(num)}
              currentPage={page}
            />
          ) : null}
        </div>

        <Drawer
          open={isAddDrawerOpen.flag}
          onClose={onDrawer.bind(this, false, '')}
          contentPosition="right"
          slidePosition="right"
        >
          <CreatePost
            component={isAddDrawerOpen.component}
            onCloseDrawer={onDrawer.bind(this, false)}
          />
        </Drawer>
      </Styled.Content>
    </Styled.Container>
  );
};
export default Dashboard;
