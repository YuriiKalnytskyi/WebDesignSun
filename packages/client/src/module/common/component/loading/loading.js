import React from 'react';
import { animated, useSpring } from 'react-spring';

import '../../../../styles/loading.css';
import { Loader } from './loader';

export const Loading = ({ className, withAnimation, ...restProps }) => {
  const [styles, animation] = useSpring(() => ({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 200 }
  }));

  if (withAnimation) animation.start();

  return (
    <animated.div className={`loading ${className}`} style={styles} {...restProps}>
      <Loader height="auto" />
    </animated.div>
  );
};
