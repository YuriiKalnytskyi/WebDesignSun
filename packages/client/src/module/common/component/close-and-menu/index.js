import React from 'react';

import * as Styled from './close-and-menu';

export const CloseAndMenu = ({ color, width = 28, checked, setChecked }) => {
  const rotate =
    (width === 32 && '45deg') ||
    (width === 28 && '42.5deg') ||
    (width === 24 && '40deg') ||
    (width === 20 && '37.5deg') ||
    '45deg';

  return (
    <Styled.CheckboxContainer width={width} className='checkbox' >
      <Styled.Checkbox
        onChange={() => {
          setChecked(!checked);
        }}
        checked={checked}
        type='checkbox'
        name=''
        id=''
        rotate={rotate}
      />
      <Styled.HamburgerLines className='hamburger-lines'>
        {[1, 2, 3].map((v) => (
          <Styled.Line color={color} key={v} className={`line${v}`} />
        ))}
      </Styled.HamburgerLines>
    </Styled.CheckboxContainer>
  );
};
