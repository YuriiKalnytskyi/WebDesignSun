import React from 'react';
import { animated, useTransition } from 'react-spring';

import Portal from '../portal';
import { config } from './drawer.config';
import * as Styled from './drawer.styled';

export const Drawer = ({
  children,
  className = '',
  slidePosition = 'right',
  contentPosition = 'right',
  onClose,
  open
}) => {
  const transitions = useTransition(open, config[slidePosition]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose(false);
  };

  return (
    <div>
      <Portal>
        {transitions(
          ({ opacity, transform }, isDrawerOpened) =>
            isDrawerOpened && (
              <animated.div
                style={{ opacity }}
                className={`backdrop ${[contentPosition]} ${className}`}
                onClick={onBackdropClick}
              >
                <Styled.Block style={{ transform }}>{children}</Styled.Block>
              </animated.div>
            )
        )}
      </Portal>
    </div>
  );
};
