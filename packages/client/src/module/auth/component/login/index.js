import React from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';

import { Input, Loader } from '../../../common/component';
import { COLORS } from '../../../../theme';
import { loginValidation } from '../../validation';
import { ROUTER_KEYS } from '../../../common/constants';
import { inputsLogin } from '../../constants';
import * as Styled from './login.styled';
import { login } from '../../../../services/authServise';

const Login = () => {
  const history = useHistory();

  const onError = (res) => {
    toast.error(res.response.data.message);
  };

  const onSuccess = ({ accessToken }) => {
    localStorage.setItem('accessToken', accessToken);
    history.push(ROUTER_KEYS.DASHBOARD);
  };

  const { mutate, isLoading } = useMutation((req) => login(req), { onSuccess, onError });

  const onSubmit = (data) => {
    mutate(data);
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
                  !isLoading ? (
                    'Save'
                  ) : (
                    <Loader size="small" color={COLORS.primaryRed} height="auto" />
                  )
                }
                disabled={isLoading}
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
