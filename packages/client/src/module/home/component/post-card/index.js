import React from 'react';
import * as Styled from './post-card.styled';
import { DirectionText, Information, Title } from '../../common';

export const PostCard = ({ post }) => {
  return (
    <Styled.Container>
      <Styled.Image src={post.image} />
      <DirectionText text={post.direction} />
      <Title text={post.title} />
      <Information post={post} />
    </Styled.Container>
  );
};
