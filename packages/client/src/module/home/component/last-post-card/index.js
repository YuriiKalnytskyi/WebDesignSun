import React from 'react';

import * as Styled from './last-post-card.styled';
import i18next from 'i18next';
import { Information } from '../../common';

export const LastPostCard = ({ posts }) => {
  return (
    <Styled.Container>
      <Styled.Text>{i18next.t('common.latest_news')}</Styled.Text>

      {posts &&
        posts.map((post) => (
          <Styled.Post image={post.image} className="block">
            <Styled.Title>{post.title}</Styled.Title>
            <Information post={post} component={false} />
          </Styled.Post>
        ))}
    </Styled.Container>
  );
};
