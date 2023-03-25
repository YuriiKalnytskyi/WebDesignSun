import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { Input, Loader } from '../../../common/component';
import { COLORS } from '../../../../theme';
import { loginValidation } from '../../validation';
import { ROUTER_KEYS } from '../../../common/constants/app-keys.const';
import { inputsLogin } from '../../constants';
import * as Styled from './login.styled';

const Login = () => {
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
    // console.log(data);
    //
    // onCloseDrawer();
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeaderTitle>Login</Styled.HeaderTitle>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmit}
          enableReinitialize
          validationSchema={loginValidation}
        >
          {({ errors }) => (
            <Form>
              {inputsLogin.map(({ name, label, type, inputType }, index) => (
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
                content={'Sing In'}
                type="button"
                variant="inverse"
                mb={'20px'}
                onClick={() => {
                  history.push(ROUTER_KEYS.SING_UP);
                }}
              />
            </Form>
          )}
        </Formik>
      </Styled.Content>
    </Styled.Container>
  );
};
export default Login;
