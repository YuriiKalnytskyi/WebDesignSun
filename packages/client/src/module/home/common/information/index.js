import React from 'react';

import * as Styled from './information.styled';
import { COLORS, SPACES } from '../../../../theme';
import clock from '../../../../assets/icon/clock.svg';

export const Information = ({ post, component = true }) => {
  return (
    <Styled.Container>
      <Styled.Text color={!component && COLORS.white}>28 Feb 2021</Styled.Text>
      {component && (
        <>
          <Styled.Text color={COLORS.accent}>{post.author}</Styled.Text>
          <Styled.Text>
            <Styled.Icon
              space={SPACES.lxx}
              style={{
                WebkitMaskImage: `url(${clock})`,
                WebkitMaskSize: '100% 100%',
                maskImage: `url(${clock})`
              }}
            />
            6 min read
          </Styled.Text>
        </>
      )}
    </Styled.Container>
  );
};
