import { useField } from 'formik';
import i18next from 'i18next';
import React, { useEffect, useState } from 'react';

import { SPACES } from '../../../../theme';
import * as Styled from './input.styled';

export const Input = ({
  name,
  label,
  gapFromLabel,
  textarea,
  checkbox,
  radio,
  withIcon,
  iconsStyles,
  innerPads,
  required,
  className,
  type = 'text',
  labelClassName,
  inputType = '1',
  readOnly,
  ml,
  mb,
  mr,
  mt
}) => {
  const [field, { touched, error }] = useField(name);

  const shoudRenderInput = !checkbox && !textarea && !radio;

  const svgStyles = { ...Styled.defaultSvgStyles, ...iconsStyles };
  const pads =
    (withIcon ? `${SPACES.xs} ${SPACES.lxxs}` : innerPads) ||
    (type === 'password' ? `${SPACES.xs} ${SPACES.lxxs} ${SPACES.xs} ${SPACES.m}` : undefined);

  const [types, setTypes] = useState(type);
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    if (type === 'password' && isPassword) {
      setTypes('text');
    } else {
      setTypes(type);
    }
  }, [type, isPassword]);

  const onClickPassword = () => {
    setIsPassword(!isPassword);
  };

  return (
    <Styled.Wrapper className={className} ml={ml} mb={mb} mr={mr} mt={mt}>
      {label && inputType === '1' && (
        <Styled.Label
          required={required}
          htmlFor={name}
          className={labelClassName}
          readOnly={readOnly}
        >
          {label}
        </Styled.Label>
      )}

      {shoudRenderInput && inputType === '1' ? (
        <Styled.Input
          id={name}
          gapFromLabel={gapFromLabel}
          innerPads={pads}
          type={types}
          readOnly={readOnly}
          {...field}
        />
      ) : (
        <Styled.Input2 id={name} type={types} readOnly={readOnly} required {...field} />
      )}

      {label && inputType === '2' && (
        <Styled.Label2 htmlFor={name} className={labelClassName} readOnly={readOnly}>
          {label}
        </Styled.Label2>
      )}

      {withIcon && React.createElement(withIcon, svgStyles)}
      {type === 'password' &&
        (isPassword ? (
          <Styled.Visibility top={inputType} onClick={onClickPassword} />
        ) : (
          <Styled.VisibilityOff top={inputType} onClick={onClickPassword} />
        ))}

      {touched && error && <Styled.Error>{i18next.t(error)}</Styled.Error>}
    </Styled.Wrapper>
  );
};
