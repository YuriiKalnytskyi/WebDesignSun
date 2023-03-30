import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

import { QUERY_KEYS } from '../common/constants';
import { findPost } from '../../services/postServise';
import { Loading } from '../common/component';
import { ArbitraryPostCard } from '../home/component';

const Post = () => {
  const { id } = useParams();

  const onError = (res) => {
    toast.error(res.response.data.message);
  };

  const { data, refetch, isLoading } = useQuery(QUERY_KEYS.FIND_POST, () => findPost(id), {
    onError
  });

  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <>
      {data?.post && <ArbitraryPostCard post={data.post} />}

      {isLoading ? <Loading className="full-screen" /> : null}
    </>
  );
};
export default Post;
