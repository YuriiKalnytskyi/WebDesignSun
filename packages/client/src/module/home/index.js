import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

import { ArbitraryPostCard, LastPostCard, PostCard, RandomPostCard } from './component';
import { Loading, Pagination } from '../common/component';
import { getAllPost, getAllSpecificPost } from '../../services/postServise';
import { QUERY_KEYS } from '../common/constants';

import * as Styled from './home.styled';

const Home = () => {
  const [page, setPage] = useState(1);

  const onError = (res) => {
    toast.error(res.response.data.message);
  };

  const { data, refetch, isLoading } = useQuery(QUERY_KEYS.ALL_POST, () => getAllPost(page, 6), {
    onError
  });

  const { data: specificPosts } = useQuery(QUERY_KEYS.ALL_POST_SPECIFIC,  getAllSpecificPost, { onError });

  console.log(specificPosts?.randomPost);

  const onPage = (num) => {
    setPage(num);
  };

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <Styled.Container>
      <Styled.Content>
        <RandomPostCard post={specificPosts?.randomPost[0] ?? {}} />
        <LastPostCard posts={specificPosts?.lastPost ?? []} />
        <ArbitraryPostCard post={specificPosts?.randomPost[1] ?? {}} />

        <Styled.PostsContainer>
          <Styled.PostsContent>
            {data?.posts?.length ? (
              data?.posts.map((post, index) => <PostCard key={index} post={post} />)
            ) : isLoading ? (
              <Loading className="full-screen" />
            ) : null}
          </Styled.PostsContent>

          {(data?.posts?.length && data?.posts?.length > data?.totalCount) || 10 ? (
            <Pagination
              totalCount={data?.totalCount}
              pageSize={6}
              siblingCount={1}
              onPageChange={onPage}
              currentPage={page}
            />
          ) : null}
        </Styled.PostsContainer>
      </Styled.Content>
    </Styled.Container>
  );
};
export default Home;
