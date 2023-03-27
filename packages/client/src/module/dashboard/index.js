import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

import { Drawer, Loading, Pagination } from '../common/component';
import { CreatePost } from './component/create-post';
import { Table } from './component/table/table';
import { Create } from './constants';
import { QUERY_KEYS } from '../common/constants';
import { getAllPost } from '../../services/postServise';

import plus from '../../assets/icon/plus.svg';

import * as Styled from './dashboard.styled';

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

  const onError = (res) => {
    toast.error(res.response.data.message);
  };

  const { data, refetch, isLoading } = useQuery(QUERY_KEYS.ALL_POST, () => getAllPost(page, 6), {
    onError
  });

  const onPage = (num) => {
    setPage(num);
  };

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeaderWrapper>
          <Styled.HeaderTitle>
            Post
            {data?.posts.length ? (
              <Styled.ItemQuantatyBadge>
                {data?.posts.length} {data?.posts.length === 1 ? 'item' : 'items'}
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

        {data?.posts?.length ? <Table items={data?.posts ?? []} /> : null}

        <div>
          {(data?.posts?.length && data?.posts?.length > data?.totalCount) || 10 ? (
            <Pagination
              totalCount={data?.totalCount}
              pageSize={6}
              siblingCount={1}
              onPageChange={onPage}
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

      {isLoading ? <Loading className="full-screen" /> : null}
    </Styled.Container>
  );
};
export default Dashboard;
