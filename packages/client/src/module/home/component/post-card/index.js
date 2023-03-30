import React from 'react';
import { useHistory } from 'react-router-dom';

import { DirectionText, Information, Title } from '../../common';

import * as Styled from './post-card.styled';

export const PostCard = ({ post }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(`/post/${post.id}`);
  };

  return (
    <Styled.Container onClick={onClick}>
      <Styled.Image src={post.image} />
      <DirectionText text={post.direction} />
      <Title text={post.title} component />
      <Information post={post} />
    </Styled.Container>
  );
};
