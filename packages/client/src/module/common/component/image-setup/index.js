import React from 'react';

import addAvatar from '../../../../assets/icon/add-avatar.svg';
import * as Styled from './image-setup.styled';

export const ImageSetup = ({ label, avatar, handleAvatarUpload, delAvatar, readOnly = false }) => {
  const onChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleAvatarUpload(file);
  };

  return (
    <Styled.OptionBlock>
      <Styled.FieldLabel>{label}</Styled.FieldLabel>
      <Styled.AvatarContainer>
        {avatar ? <Styled.Avatar src={avatar} alt={'avatar'} key={avatar} /> : null}

        {!avatar && (
          <>
            <label htmlFor="field-upload">
              <Styled.AddAvatar src={addAvatar} alt={'avatar'} />
            </label>
            <input id="field-upload" type="file" accept="image/*" onChange={onChange} title="" />
          </>
        )}
        {avatar && !readOnly && <Styled.CloseButton onClick={delAvatar}>&#10006;</Styled.CloseButton>}
      </Styled.AvatarContainer>
    </Styled.OptionBlock>
  );
};
