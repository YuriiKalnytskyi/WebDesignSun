import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { Input, Loader } from '../../../common/component';
import { COLORS } from '../../../../theme';
import { ROUTER_KEYS } from '../../../common/constants/app-keys.const';
import { singUpValidation } from '../../validation/sing-up.validation';

import * as Styled from '../login/login.styled';
import { inputsSingIn } from '../../constants';

const SingUp = () => {
  const history = useHistory();

  const [isShowLoader, setIsShowLoader] = useState(false);

  useEffect(() => {
    if (isShowLoader) {
      setTimeout(() => {
        setIsShowLoader(false);
      }, 5000);
    }
  }, [isShowLoader]);

  const onSubmit = (data) => {
    setIsShowLoader(true);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeaderTitle>Sing In</Styled.HeaderTitle>

        <Formik
          initialValues={{ email: '', password: '', fullName: '' }}
          onSubmit={onSubmit}
          enableReinitialize
          validationSchema={singUpValidation}
        >
          {({ errors }) => (
            <Form>
              {inputsSingIn.map(({ name, label, type, inputType }, index) => (
                <Input
                  key={index}
                  type={type}
                  name={name}
                  label={label}
                  required
                  mb={'25px'}
                  inputType={inputType}
                />
              ))}

              <Styled.SaveButton
                content={
                  !isShowLoader ? (
                    'Save'
                  ) : (
                    <Loader size="small" color={COLORS.primaryRed} height="auto" />
                  )
                }
                disabled={isShowLoader}
                type="submit"
                variant="primary"
                mb={'20px'}
                hasErrors={Object.keys(errors).length > 0}
              />

              <Styled.SaveButton
                content={'Login'}
                type="button"
                variant="inverse"
                mb={'20px'}
                onClick={() => {
                  history.push(ROUTER_KEYS.LOGIN);
                }}
              />
            </Form>
          )}
        </Formik>
      </Styled.Content>
    </Styled.Container>
  );
};
export default SingUp;
