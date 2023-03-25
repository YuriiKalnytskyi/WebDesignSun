import React from 'react';

import * as Styled from './arbitrary-post-card';
import { Description, DirectionText, Information, Title } from '../../common';

export const ArbitraryPostCard = ({ post }) => {
  return (
    <Styled.Container>
      <Styled.Image src={post.image} />
      <Styled.Content>
        <DirectionText text={post.direction} />
        <Title text={post.title} />
        <Description text={post.description} />
        <Information post={post} />
      </Styled.Content>
    </Styled.Container>
  );
};
