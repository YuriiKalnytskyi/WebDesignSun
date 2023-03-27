import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Drawer, Loading, Pagination } from '../common/component';
import { CreatePost } from './component/create-post';
import { Table } from './component/table/table';
import { Create } from './constants';
import { QUERY_KEYS, ROUTER_KEYS } from '../common/constants';
import { getAllPost } from '../../services/postServise';
import { logout } from '../../services/authServise';

import plus from '../../assets/icon/plus.svg';

import * as Styled from './dashboard.styled';

const Dashboard = () => {
  const history = useHistory();

  const [page, setPage] = useState(1);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState({
    flag: false,
    component: '',
    id: ''
  });

  const onDrawer = (flag, component = '', id) => {
    setIsAddDrawerOpen((prev) => {
      prev.flag = flag;
      prev.component = component;
      prev.id = id
      return { ...prev };
    });
  };

  const onSuccess = () => {
    history.push(ROUTER_KEYS.LOGIN);
  };

  const onError = (res) => {
    toast.error(res.response.data.message);
  };

  const {
    data,
    refetch,
    isLoading: isLoadingAllPost
  } = useQuery(QUERY_KEYS.ALL_POST, () => getAllPost(page, 6), {
    onError
  });

  const { mutate } = useMutation(logout, { onSuccess, onError });

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    mutate();
  };

  const onPage = (num) => {
    setPage(num);
  };

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    setIsLoadingUser(true);
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) history.push(ROUTER_KEYS.LOGIN);

    setIsLoadingUser(false);
  }, []);

  const isLoading = isLoadingAllPost || isLoadingUser;

  return (
    <Styled.Container>
      <Styled.SaveButton
        width={'150px'}
        content={'Logout'}
        type="submit"
        variant="primary"
        mb={'20px'}
        onClick={onLogout}
      />
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

        {data?.posts?.length ? <Table onDrawer={onDrawer} items={data?.posts ?? []} /> : null}

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
          onClose={onDrawer.bind(this, false, 'ss', isAddDrawerOpen.id)}
          contentPosition="right"
          slidePosition="right"
        >
          <CreatePost
            component={isAddDrawerOpen.component}
            onCloseDrawer={onDrawer.bind(this, false, 'aa', isAddDrawerOpen.id)}
            id={isAddDrawerOpen.id}
          />
        </Drawer>
      </Styled.Content>

      {isLoading ? <Loading className="full-screen" /> : null}
    </Styled.Container>
  );
};
export default Dashboard;
