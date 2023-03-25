import React, { forwardRef } from 'react';
import i18next from 'i18next';

import { useField } from 'formik';
import * as Styled from './input-text-area.js.styled';

const InputTextArea = forwardRef(
  ({ rows, name, placeholder, margin, isEmail, maxLength, readOnly }, ref) => {
    const [field, { touched, error }] = useField(name);

    return (
      <Styled.InputContainer margin={margin || ''} ref={ref}>
        <Styled.Input
          rows={rows}
          isEmail={!!isEmail}
          id={name}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={readOnly}
          {...field}
        />
        {error && touched ? (
          <Styled.ErrorInfoContainer>
            <Styled.ErrorInfoText>{i18next.t(error)}</Styled.ErrorInfoText>
          </Styled.ErrorInfoContainer>
        ) : null}
      </Styled.InputContainer>
    );
  }
);
export default InputTextArea;
